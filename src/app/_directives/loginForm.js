/**
 * Created by katban on 19.11.15.
 */
angular.module('Workshop')
    .directive('loginForm', function() {
        return {
            restrict: 'E',
            templateUrl: '_directives/login-form.html',
            transclude: true,    // w dyrekrywie chcemy przekazac jeszcze kawalek kodu
            scope: {}, // ma scopa
            controller: function($scope, $http) {
                // variables
                $scope.user = [];

                //methods

            }
        }
    })
