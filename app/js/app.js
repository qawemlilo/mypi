

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
            leftPanel:  App.views.leftPanel,
            rightPanel: App.views.rightPanel
        });
     
        App.views.topNav = new topNav({
            leftPanel:  App.views.leftPanel,
            rightPanel: App.views.rightPanel
        });
    };

  
    return App;
})
