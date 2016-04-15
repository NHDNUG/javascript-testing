
define(function() {
    return{
      removeAllDomNodesWithId : function(id)
    {
      var existingNode = document.getElementById(id);
      while (existingNode != null) {
        existingNode.parentNode.removeChild(existingNode);
        var existingNode = document.getElementById(id);
      }
    },

     addDomNode: function(id) {
      testNode = document.createElement("div");
      testNode.id = id;
      document.body.appendChild(testNode);
    }

  }
  }
);