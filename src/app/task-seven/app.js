angular.module('workshop', ['gettext'])
    .run(function(gettextCatalog) { //run - co chce do modulu wpiąć
        gettextCatalog.currentLanguage = 'pl_PL';   //jezyk domyslni w formacie rozszerzonym
        gettextCatalog.debug = true;
    })
    .controller('BaseController', function ($scope, gettext) {
        $scope.translateMe = 'Translate me!'; // korzystam z czegos co juz mam
        $scope.translateMe2 = gettext('Translate me please!'); // dodaje nowa fraze
    });