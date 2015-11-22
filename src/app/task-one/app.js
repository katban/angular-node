/**
 * Created by katban on 22.11.15.
 */
(function(){
    var app = angular.module('Workshop', []);

    app.controller('BaseController', function ($scope, $http) {
        $scope.person = {
            "fname":"Aely",
            "lname":"Ruback",
            "company":"Chaudary Marketing",
            "phone":"(431)905-3906",
            "email":"DLinville@elementum.gov",
            "address":{
                "streetAddress":"200 Id Ln",
                "city":"Palm Harbor",
                "state":"TX",
                "zip":"99380"
            }
        };

        $http.get('http://www.filltext.com/?rows=10&fname={firstName}&lname={lastName}&company={business}&phone={phone}&email={email}&address={addressObject}')
            .then(function(response) {
                return $scope.peopleList = response.data;
            });

        $scope.showCard = function (person) {
            $scope.personDetails = person;
        }

    })
})();