parking.directive("alert", function () {
    return {
        restrict: 'E',
        scope: {
            //Si la propiedad es la misma que la expresion, se puede dejar
            //solamente el prefijo
            topic: '=',
            description: '=',
            close: '&'
        },
        templateUrl: "alert.html",
        replace: true
    };
});