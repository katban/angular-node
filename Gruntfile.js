module.exports = function(grunt) {
  grunt.loadNpmTasks('grunt-angular-gettext');  // laduje task; jedno wyciaga tlumaczenie a drigie z powrotem wklada w plik js dane tlumaczenie

    grunt.initConfig({
        nggettext_extract: {
            pot: {
                files: { // co tlumaczymy i gdzie maja trafic tlumaczenia
                    'src/app/task-seven/translations/translations.pot' : ['**/*.html', 'src/app/app.js'] //dokad kopiuje tlumaczenia - skad je biore (tablica wielu elementow)
                }
            }
        },
        nggettext_compile: {
            all: {
                files: {
                    'src/app/task-seven/translations/translation.js' : ['src/app/translations/*.po']//plik JS! i miejsce wszystkich pilikow PO
                }
            }
        }
    });
};