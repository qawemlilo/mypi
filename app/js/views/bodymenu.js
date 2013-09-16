define(['backbone'], function (Backbone) {
    "use strict";
    
    var Menu = Backbone.View.extend({
        el: '#body-menu',
        
        
        open: function() {
            this.$el.removeClass('close').addClass('open');
        },
        
    
        close: function() { 
            this.$el.removeClass('open').addClass('close');
        }
    });
  
    return Panel;
})
