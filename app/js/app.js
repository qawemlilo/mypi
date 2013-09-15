

define([
    'views/leftpanel', 
    'views/rightpanel', 
    'views/body', 
    'views/content', 
    'views/topnav'
],
function (leftPanel, rightPanel, Body, Content, topNav) {
    "use strict";
    
    var App = {
        views: {},
        models: {},
        collections: {}
    };
    
    App.init = function () {
        App.views.leftPanel = new leftPanel();
        
        App.views.rightPanel = new rightPanel();
        
        App.views.Body = new Body();
         
        App.views.Content = new Content({
            nav: App.views.topNav
        });
     
        App.views.topNav = new topNav({
            leftPanel:  App.views.leftPanel,
            rightPanel: App.views.rightPanel,
            content: App.views.Content
        });
    };

  
    return App;
})
