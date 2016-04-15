var testProjectPath =  "";
require.config( {

  deps: [testProjectPath + 'main'],

  baseUrl: "",

  paths: {
    // Base
    "jquery" :"node_modules/jquery/dist/jquery",
    "knockout" : "node_modules/knockout/build/output/knockout-latest",
    "underscore" : "node_modules/underscore/underscore",

    //Classes Under Test
    "cart-view-model": "classes/cart-view-model",
    //Test Framework

    "sinon":  "node_modules/sinon/lib/sinon",
    "squire": "node_modules/squirejs/src/squire",
    "should": "node_modules/should/should",
    "testHelpers": "/testhelpers",
    //Tests

    "headerTests": "tests/headerViewModelTests",


  },



  shim: {
    "postal": {
      deps: ["underscore"],
      exports: "postal"
    },
    
  }

} );
