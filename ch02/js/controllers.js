//Registering the parkingCtrl to the parking module
parking.controller("parkingCtrl", function ($scope) {
    //ng-bind example
    $scope.appTitle = "[Packt] Parking";
    //Binding the car's array to the scope
    $scope.cars = [];
    //Binding the color array to the scope
    $scope.colors = ["White", "Black", "Brown", "Red", "Green", "Blue"];
    //Binding the park function to the scope
    $scope.park = function (car) {
        car.entrance = new Date();
        $scope.cars.push(car);
        delete $scope.car;
    };
});