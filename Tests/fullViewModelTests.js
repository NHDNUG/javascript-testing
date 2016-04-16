define(['squire', 'sinon'], function(Squire, sinon) {
  var injector = new Squire();
  var Header, Requests;
  //We use squire to inject our own mocked versions of RequireJS dependencies.  
  injector.mock({
    'cookie-reader': {
      userName: sinon.stub().returns("Test User Name"),
    }
  } );
  injector.mock({
    'globals': {
      globalPaths: {
        getCartItemCount: "/CartService"
      }
    }
  } );

  describe("Cart View Model Tests", function() {

    beforeEach( function ( done ) {
      //This require block behaves the same way as a normal RequireJS block but uses our mocked dependencies instead 
      injector.mock({
        'cookieReader': {
          userName: sinon.stub().returns("Test User Name"),
        }
      });

      injector.require( ["full-view-model"], function ( header ) {


        //If you want to verify that a request is made but don't care about handling the response, you can uncomment this instead of using sinon's fake Server

        //this.xhr = sinon.useFakeXMLHttpRequest();
        //Requests = [];
        //this.xhr.onCreate = function ( xhr ) {
        //  Requests.push( xhr );
        //};

        //This sets up a fake server that will intercept any XMLHTTPRequests and can respond to them
        this.server = sinon.fakeServer.create();
        Header = new header()
        done();
      } );

    });

    describe("Full View Model", function() {
      it( "should initialize the cart with zero items", function () {
        Header.cartItemCount().should.be.exactly(0).and.be.a.Number;
      });

      //Note that by passing in a done method, this becomes an async test (but make sure you call it or it will wait forever)
      it("should return the user name from the external dependency", function(done) {
        Header.name().should.be.exactly("Test User Name");
        done();
      } );

      //Here we are making an actual server response
      it("should update the cart item count upon response from the cart service", function ( done ) {
        var responseData = JSON.stringify({ Data: 5 });
        server.respondWith( "/CartService", [200, { "Content-Type": "application/json" }, responseData] );
        server.respond();

        Header.cartItemCount().should.be.exactly(5).and.be.a.Number;
        done();
      })
    })
  });
});