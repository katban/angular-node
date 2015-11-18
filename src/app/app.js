
(function(){
    var app = angular.module('Workshop', []);

    app.controller('ShoppingList', function ($scope) {
        $scope.sorting = 'name';
        $scope.shoppingList = [
            {name: 'Chleb', price: 2.30, isBought: false},
            {name: 'Masło', price: 4.50, isBought: false},
            {name: 'Mleko', price: 3.20, isBought: false},
            {name: 'Bułki 5 szt.', price: 1.25, isBought: false},
            {name: 'Jogurt', price: 2.20, isBought: false},
            {name: 'Płatki owsiane', price: 3.40, isBought: false},
            {name: 'Płatki kukurydziane', price: 5.60, isBought: false}
        ];

        $scope.sortingField = '';
        $scope.desc = false;

        $scope.reorder = function (field) {
            $scope.desc = $scope.sortingField === field ? !$scope.desc : false;
            $scope.sortingField = field;
        };

        $scope.newPosition = {name: '', price: 0, isBought: false};
        $scope.addItem = function (data) {
            $scope.shoppingList.push(data);
        };

        $scope.removeIt = function (it) {
            $scope.shoppingList.splice(it, 1);
        };
    });

    app.controller('PeopleController', function ($scope, $http) {
        $scope.peopleList = [
            {name: "Marek", city: 'Gdansk', country: 'PL'},
            {name: "Zosia", city: 'Lodz', country: 'PL'},
            {name: "Amoa", city: 'Krakow', country: 'DE'},
            {name: "Kuba", city: 'Malbork', country: 'NO'},
            {name: "Jacek", city: 'Sopot', country: 'PL'},
            {name: "Ola", city: 'Gdynia', country: 'PL'},
        ];

        $http.get('http://www.w3schools.com/angular/customers.php')
            .then(function (response) {
                $scope.peopleList = response.data.records;
                //console.log(response);
            });

        $scope.reorder = function (field) {
            $scope.desc = $scope.sortingField === field ? !$scope.desc : false;
            $scope.sortingField = field;
        };

        $scope.filterValue = '';
        $scope.filter = function(filter) {
        };

        $scope.newPerson = {Name: '', City: '', Country: ''}
        $scope.addPeople = function(person) {
            var flag = false;
            angular.forEach($scope.peopleList, function(personFromList) {
                if(person.Name == personFromList.Name) {
                    flag = true;
                }
            });

            if(person.Name && person.City && person.Country && flag == false) {
                var newPerson = angular.copy(person);
                $scope.peopleList.push(newPerson);
            }
        };

        $scope.kill = function(thisPerson) {
            var indexOfThisPeerson = $scope.peopleList.indexOf(thisPerson);
            $scope.peopleList.splice(indexOfThisPeerson, 1);
        }

    });
    //188.226.184.180
    app.controller('PlacesController', function($scope, $http) {
        $scope.place = [];

        var url = 'http://188.226.184.180:3000/api/';
        $scope.placeToUpdate = {};
        $scope.updatModeFlag = false;

        var getPlaces = function () {
        $http.get(url + 'places')
            .then(function (response) {
                $scope.placesList = response.data;
                    //console.log(response);
            });
        };


        $scope.newPlace = {name: '', city: '', street: '', phone: '', buildingNumber:''}
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
                        getPlaces();
                    });
            }
        };

        $scope.removeItem = function (item) {
            $http.delete(url + 'place/'+item._id).then(function (response) {
                getPlaces();
            });
        };

        $scope.getPlace = function (id) {
          $http.get(url + 'place/' + id)
              .then(function (reponse) {
                  return response.data;
              })
        };

        $scope.updatePlace = function (place) {
            $http.post(url + 'place/' + place._id, place)
                .then(function (response) {
                    getPlaces();
                    $scope.updatModeFlag = false;
                });
        };

        $scope.updateMode = function (place) {
            $scope.placeToUpdate = place;
            $scope.updatModeFlag = true;
        }


        getPlaces();
    });

})();