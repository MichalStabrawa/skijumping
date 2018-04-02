const skoczkowieGet = JSON.parse(localStorage.getItem('element'));
const skoczkowieGet2 = JSON.parse(localStorage.getItem('element2'));
const skoczkowieGet3 = JSON.parse(localStorage.getItem('element16'));
const skoczkowieGet4 = JSON.parse(localStorage.getItem('element2015'));

var app = angular.module('aplikacja', []);




app.controller('kontrolerTabeli', ['$scope', '$filter', function ($scope, $filter) {

        $scope.showMe = false;
        $scope.myFunc = function () {
            $scope.showMe = !$scope.showMe;
        }

        $scope.showMe2 = false;
        $scope.myFunc2 = function () {
            $scope.showMe2 = !$scope.showMe2;
        }
        $scope.showMe3 = false;
        $scope.myFunc3 = function () {
            $scope.showMe3 = !$scope.showMe4;
        }

        $scope.showMe4 = false;
        $scope.myFunc4 = function () {
            $scope.showMe4 = !$scope.showMe4;
        }

        $scope.usunSkoczka = function ($index) {
            console.log($scope.skoczkowie[$index]);
        }
        $scope.skoczkowie = skoczkowieGet2;
        $scope.skoczkowie2 = skoczkowieGet;
        $scope.skoczkowie3 = skoczkowieGet3;
        $scope.skoczkowie4 = skoczkowieGet4;

}


])