/**
 * Created by katban on 18.11.15.
 */
angular.module('Workshop')
    .directive('placeTable', function () {
           return {
               restrict: 'E',   // w jaki sposob dyrektywa zostanie wpisana w glowny html (ACEM)
               templateUrl: '_directives/place-table.html',
               transclude: true,    // w dyrekrywie chcemy przekazac jeszcze kawalek kodu
               scope: {}, // ma scopa
               controller: function($scope, $rootScope, $http) {
                   // variables
                   $scope.placesList = [];
                   var url = 'http://188.226.184.180:3000/api/';

                   $scope.updateMode = function (place) {
                       $rootScope.$broadcast('updateMode', place);
                   };

                   $rootScope.$on('refreshPlacesList', function () {
                       getPlaces();
                   });

                   // methods
                   var getPlaces = function () {
                       $http.get(url + 'places')
                           .then(function (response) {
                               $scope.placesList = response.data;
                               //console.log(response);
                           });
                   };

                   $scope.removeItem = function (item) {
                       $http.delete(url + 'place/'+item._id).then(function (response) {
                           getPlaces();
                       });
                   };


                   getPlaces();


               }
           }
        });