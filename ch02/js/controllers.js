//Registering the parkingCtrl to the parking module
parking.controller("parkingCtrl", function ($scope) {
    //ng-bind example
    $scope.appTitle = "[Packt] Parking";
    //Binding the showAlert variable to the scope
    $scope.showAlert = true;
    //Binding the alert directive to the scope
    $scope.alertTopic = "Something went wrong!";
    //Errata in the book pag 40
    //controllers.js $scope.alertMessage => $scope.descriptionTopic
    $scope.descriptionTopic = "You must inform the plate and the color of the car!";
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
    //Binding the closeAlert function to the scope
    $scope.closeAlert = function(){
        $scope.showAlert = false;
    };
});