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

            }
        }
    });
