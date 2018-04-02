'use strict'

const wisla1 = JSON.parse(localStorage.getItem('elementW'));
console.log(wisla1);

var app = angular.module('konkursy2018', [])

app.controller('kontrolerWynikow2018', ['$scope', '$filter', function ($scope, $filter) {
    $scope.showResult = false
    $scope.wisla = function () {
        $scope.showResult = !$scope.showResult;
    }

    $scope.skoczkowieWisla1 = wisla1;

}])