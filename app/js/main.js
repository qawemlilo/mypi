requirejs.config({
    appDir: "../",
    
    baseUrl: 'js',
   
    paths: {
        jquery : "libs/jquery",
        trunk : "libs/trunk"
    },
    
    shim: {
        jquery: {
            exports: '$'
        },
        
        trunk: {
            deps: ['jquery']
        }
        
        app: {
            deps: ['jquery', 'trunk'],
            exports: 'app'
        }
    }
});

require(["jquery", "app", "trunk"], function($, App) {  
    $(function() {
        App.init();
    });
});