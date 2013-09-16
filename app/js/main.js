requirejs.config({
    appDir: "../",
    
    baseUrl: 'js',
   
    paths: {
        jquery : "libs/jquery",
        underscore: 'libs/underscore-min',
        backbone: "libs/backbone",
        io: "http://localhost:8080/socket.io/socket.io"
    },
    
    shim: {
        jquery: {
            exports: '$'
        },
        
        backbone: {
            deps: ['underscore','jquery'],
            exports: 'Backbone'
        }
    }
});

require(["jquery", "app"], function($, App) {  
    $(function() {
        "use strict";
        
        App = new App();
        App.socketConnect();
    });
});
