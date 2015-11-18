/**
 * Created by katban on 18.11.15.
 */
angular.module('Workshop')
    .directive('placeForm', function () {
        return {
            restrict: 'E',   // w jaki sposob dyrektywa zostanie wpisana w glowny html (ACEM)
            templateUrl: '_directives/place-form.html',
            transclude: true,    // w dyrekrywie chcemy przekazac jeszcze kawalek kodu
            scope: {}, // ma scopa
            controller: function($scope, $rootScope, $http) {
                // variables
                $scope.placesList = [];
                var url = 'http://188.226.184.180:3000/api/';
                $scope.placeToUpdate = {};
                $scope.updatModeFlag = false;

                $scope.newPlace = {name: '', city: '', street: '', phone: '', buildingNumber:''};

                $rootScope.$on('updateMode', function (evt, place) {
                    $scope.placeToUpdate = place;
                    $scope.updatModeFlag = true;
                });

                // methods
                $scope.add = function(place) {
                    var flag = false;
                    angular.forEach($scope.placesList, function (placeFromList) {
                        if (place.name == placeFromList.name) {
                            flag = true;
                        }
                    });

                    if (place.name && place.city && place.street && flag == false) {
                        var newPlace = angular.copy(place);
                        //$scope.placesList.push(newPlace);
                        $http.post(url + 'places', newPlace)
                            .then(function (response) {
                                $rootScope.$broadcast('refreshPlacesList');
                            });
                    }
                };



                $scope.updatePlace = function (place) {
                    $http.put(url + 'place/' + place._id, place)
                        .then(function (response) {
                            //getPlaces();
                            $scope.updatModeFlag = false;
                        });
                };


                $scope.cancelForm = function() {
                    $scope.updatModeFlag = false;
                }

            }
        }
    });