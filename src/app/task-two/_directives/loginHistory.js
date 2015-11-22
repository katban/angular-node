/**
 * Created by katban on 22.11.15.
 */
angular.module("Workshop")
    .directive('loginHistory', function() {
        return {
            restrict: 'E',
            templateUrl: '_directives/login-history.html',
            transclude: true,
            scope: {},
            controller: function ($scope, $http) {
                $http.get('http://www.filltext.com/?rows=50&user={email}&ip={ip}&lastLogin={date|10-10-2004,11-18-2015}')
                    .then(function (response){
                        $scope.loginList = response.data;
                    })

            }
        }
    });
