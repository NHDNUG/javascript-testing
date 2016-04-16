define([
    "underscore",
    "knockout",
    "jquery",
  ],
  function(_, ko, $){

    "use strict";

    return function JqueryViewModel() {

      var self = this;
      self.init = function(){
        var myDiv = $("#my-div")[0];
        myDiv.innerText="I should do this in a binding instead";
          
      }


    
    };
  });