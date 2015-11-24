angular.module('gettext').run(['gettextCatalog', function (gettextCatalog) {
/* jshint -W100 */
    gettextCatalog.setStrings('en_GB', {"Translate me!":"Translate me!","Translate me... yah":"Translate me... yah"});
    gettextCatalog.setStrings('pl_PL', {"Translate me!":"Przetłumacz mnie!","Translate me... yah":"Tia... przetłumacz..."});
/* jshint +W100 */
}]);