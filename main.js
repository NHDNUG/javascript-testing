require( [
  'headerTests',
  'should',
  'sinon'
], function () {
  if ( typeof mochaPhantomJS !== "undefined" ) {
    mochaPhantomJS.run();
  } else {
    mocha.run();
  }
} );

