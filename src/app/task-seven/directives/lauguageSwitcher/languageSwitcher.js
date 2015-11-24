angular.module('workshop')
    .directive('languageSwitcher', function () {
        return {
            restrict: 'E',
            templateUrl: 'directives/lauguageSwitcher/language-switcher.html',
            transclude: true,
            scope: {},
            controller: function($scope, gettextCatalog) {
                $scope.lang = 'pl_PL';
                $scope.zmiana = function () {
                    gettextCatalog.setCurrentLanguage($scope.lang);
                }
            }

        }
    });