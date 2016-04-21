define([
    "globals",
    "underscore",
    "knockout",
    "jquery",
    "cookie-reader",
  ],
  function(globals, _, ko, $, cookieReader) {

    "use strict";

    return function CartViewModel() {

      var self = this;

      self.cartItemCount = ko.observable(0);
      self.name = ko.computed(function() {
        if (cookieReader.userName() === undefined) {
          return "";
        }
        return cookieReader.userName();
      });

      self.updateCount = function() {
        $.ajax(globals.globalPaths.getCartItemCount).done(
          function(count) {
            self.cartItemCount(count.Data);
          }
        ).fail(function() {
          self.cartItemCount(-1);
        });
      };

      self.updateCount();
    };
  });