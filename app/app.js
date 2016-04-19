//var app = angular.module('myApp', ['ui.bootstrap']);
//
//app.filter('startFrom', function () {
//    return function (input, start) {
//        if (input) {
//            start = +start; //parse to int
//            return input.slice(start);
//        }
//        return [];
//    }
//});
//app.controller('customersCrtl', function ($scope, $http, $timeout) {
//    $http.get('ajax/getCustomers.php').success(function (data) {
//        $scope.list = data;
//        $scope.currentPage = 1; //current page
//        $scope.entryLimit = 5; //max no of items to display in a page
//        $scope.filteredItems = $scope.list.length; //Initially for no filter
//        $scope.totalItems = $scope.list.length;
//    });
//    $scope.setPage = function (pageNo) {
//        $scope.currentPage = pageNo;
//    };
//    $scope.filter = function () {
//        $timeout(function () {
//            $scope.filteredItems = $scope.filtered.length;
//        }, 10);
//    };
//    $scope.sort_by = function (predicate) {
//        $scope.predicate = predicate;
//        $scope.reverse = !$scope.reverse;
//    };
//});

angular.module('queryApp', ['queryControllers']);

var queryControllers = angular.module('queryControllers', []);

queryControllers.controller('queryControllers', ['$scope', '$http', '$filter', '$window', function ($scope, $http, $filter, $window) {
    $scope.topQuery = 5;
    $scope.orderBy = "count";
    $scope.targetType = "ATL";
    $scope.selectDate = moment().format("MM/DD/YYYY");

    $('.input-group.date').datepicker({
        autoclose: true,
        todayHighlight: true,
        startDate: '3/1/2016',
        endDate: new Date()

    });

    $scope.query = function(topQuery, orderBy, targetType, selectDate) {
        console.log(topQuery)

    }


}]);

