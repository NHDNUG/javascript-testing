define(['squire', 'sinon', 'jquery','testHelpers' ], function(Squire, sinon, $, testHelpers) {
  var injector = new Squire();


 describe("Broken jQuery View Model Tests", function() {
 

 // // Uncomment these one at a time, because erroring javascript gets super flaky.  Should this test pass? 
 //     it( "should initialize the viewModel and explode because it uses a jquery selector", function () {
 //        injector.require( ["jquery-view-model"], function ( viewModel) {
	// 	var vm = new viewModel();
	// 	vm.init();
		
	// });
 //     });
 //  //   This test correctly fails because we are telling it to wait before reporting success (in fact it reports the error for the first test too)
 //    it( "should initialize the viewModel and explode because it uses a jquery selector", function (done) {
 //        injector.require( ["jquery-view-model"], function ( viewModel) {

 //      		var vm = new viewModel();
 //      		vm.init();
 //      		done();
	// });
 //    });

 
    
    });

describe("Super complicated, naive jQuery ViewModel Tests", function(){
      beforeEach(function(done){
      var myJQuery = function(selector, context) {
      // The jQuery object is actually just the init constructor 'enhanced'
      //We have to do this to work around the use of jQuery in the view model.  Well, sort of, this is only really necessary if you need 'normal' jquery to work AND stub something out
      if ( selector === "#my-div" )
            return [{text: function(){}}];
     
        return new jQuery.fn.init(selector, context, $);
      };
    
     //PhantomJS doesn't support Object.setPrototypeOf yet
     myJQuery.__proto__ = $;

     injector.mock({
        'jquery': myJQuery
});
     done();
});
  it("should use the stub jQuery", function(done){
	injector.require( ["jquery-view-model"], function ( viewModel) {
	  var vm = new viewModel();
	  vm.init();
          done();

	});
});
});

describe("The easy way to do this", function(){
 it("just create a dom node first", function(done){
  injector = new Squire();
  injector.require( ["jquery-view-model"], function ( viewModel) {
    testHelpers.addDomNode("my-div");
    var vm = new viewModel();
    vm.init();
    testHelpers.removeAllDomNodesWithId("my-div")
    done();

  });
});
})
});

