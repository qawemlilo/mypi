/*
    CrushIt - application namespace.
*/
define(function () {
    "use strict";
    
    var App = function () {};
    
    App.prototype.init = function () {
        this.name = "MyPi";
    };
  
    return new App();
})