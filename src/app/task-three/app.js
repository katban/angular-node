/**
 * Created by katban on 22.11.15.
 */
(function(){
    var app = angular.module('Workshop', []);

    app.controller('BaseController', function ($scope) {
        $scope.vehicles = [
            {name: 'Mercedes Benz S', category: 'osobowe', isAvailable: true},
            {name: 'DAF XF105', category: 'ciężarowe', isAvailable: false},
            {name: 'Kawasaki Vulcan', category: 'motocykle', isAvailable: true},
            {name: 'Opel Insignia', category: 'osobowe', isAvailable: true},
            {name: 'Toyota Yaris', category: 'osobowe', isAvailable: true},
            {name: 'MAN TGL', category: 'ciężarowe', isAvailable: false},
            {name: 'Fiat Punto', category: 'osobowe', isAvailable: true},
            {name: 'Suzuki DL 650', category: 'motocykle', isAvailable: true},
            {name: 'Kawasaki VN 1600', category: 'motocykle', isAvailable: false},
            {name: 'BMW K 1300', category: 'motocykle', isAvailable: false},
            {name: 'Fiat Lamar', category: 'ciężarowe', isAvailable: true}
        ];
    });
})();