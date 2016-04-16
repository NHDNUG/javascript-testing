
require.config( {


  baseUrl: "",

  paths: {
    // Base
    "jquery" :"node_modules/jquery/dist/jquery",
    "knockout" : "node_modules/knockout/build/output/knockout-latest",
    "underscore" : "node_modules/underscore/underscore",

    //Classes Under Test
    "full-view-model": "classes/full-view-model",
    "jquery-view-model": "classes/jquery-using-view-model",
    //Test Framework

    "sinon":  "node_modules/sinon/lib/sinon",
    "squire": "node_modules/squirejs/src/squire",
    "should": "node_modules/should/should",
    "testHelpers": "testhelpers",
    //Tests

    "fullTests": "tests/fullViewModelTests",
    "jqueryTests": "tests/jqueryUsingViewModelTests"


  },

} )
requirejs(['main']);;
