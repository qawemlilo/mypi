requirejs.config({
    appDir: "../",
    
    baseUrl: 'js',
   
    paths: {
        jquery : "libs/jquery",
        backbone: "libs/backbone",
        underscore: 'libs/underscore-min'
    },
    
    shim: {
        jquery: {
            exports: '$'
        },
        
        backbone: {
            deps: ['jquery', 'underscore'],
            exports: 'Backbone'
        }
    }
});

require(["jquery", "app"], function($, App) {  
    $(function() {
        App.init();
    });
});
