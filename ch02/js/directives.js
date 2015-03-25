parking.directive("alert", function(){
    return {
        restrict: 'E',
        scope: {
            //Si la propiedad es la misma que la expresion, se puede dejar
            //solamente el prefijo
            topic: '@'
        },
        templateUrl: "alert.html",
        replace: true,
        //Transclude
        transclude: true
    };
});

//Errata pag 45: directives.html => directives.js
parking.directive("accordion", function(){
    return {
        template: "<div ng-transclude></div>",
        restrict:"E",
        transclude: true,
        //Controller, muy similar a link. Casi los mismos parametros, exepto el mismo. El proposito del controlador es dirente.
        controller: function($scope, $element, $attrs, $transclude){
            var accordionItems = [];
            var addAccordionItem = function(accordionScope){
                accordionItems.push(accordionScope);
            };
            var closeAll = function(){
                angular.forEach(accordionItems, function(accordionScope){
                    accordionScope.active=false;
                })
            };
            return{
                addAccordionItem: addAccordionItem,
                closeAll: closeAll
            };
        }
    };
});
//Errata pag 44: directives.html => directives.js
parking.directive("accordionItem", function(){
    return {
        templateUrl: "accordionItem.html",
        restrict: "E",
        scope:{
            title: "@"
        },
        transclude: true,
        //Require, con el parametro ^ busca el controlador en el elemento padre.
        require:"^accordion",
        link: function(scope, element, attrs, ctrl, transcludeFn){
            //Se agrega el controlador 
            ctrl.addAccordionItem(scope);
            element.bind("click", function(){
                ctrl.closeAll();
                scope.$apply(function(){
                    scope.active = !scope.active;
                });
            });
        }
    };
});