parking.directive("alert", function () {
    return {
        restrict: 'E',
        scope: {
            topic: '=topic',
            description: '=description'
        },
        templateUrl: "alert.html",
        replace: true
    };
});