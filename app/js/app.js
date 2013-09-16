

define([
    'backbone',
    'views/panel', 
    'views/body',  
    'views/nav',
    'io'
],
function (Backbone, Panel, Body, topNav, io) {
    "use strict";
    
    
    var App = Backbone.View.extend({
        el: '#container',
        
        
        events: {
            "click #navToggle": "toggleContent",
            "click #content": "closeBody"
        },
        
        
        views: {},
        
        
        initialize: function () {
            this.views.panel =  new Panel();
            this.views.body = new Body();
            this.views.nav = new topNav();
        },
        
        
        toggleContent: function() {
            if (this.views.body.$el.hasClass('open')) {
                this.close();
            }
            else {
                this.open();            
            }
        },
        
        
        open: function() {
            this.views.nav.open();
            this.views.body.open();  
        },
        
    
        close: function() { 
            this.views.nav.close();
            this.views.body.close();
        },
        
        
        closeBody: function() { 
            if (this.views.body.$el.hasClass('open')) {
                this.close();
            }
        },
        
        
        socketConnect: function () {
            var self = this;
            
            self.socket = io.connect('http://localhost:8080');
        
            self.socket.on('connected', function (data) {
            });
        
            self.socket.on('disconnect', function (data) {
            });      
        },
    });

  
    return App;
})
