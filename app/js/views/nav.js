define(['backbone'], function (Backbone) {
    "use strict";
    
    var topNav = Backbone.View.extend({
        el: '#topheader',
        
        
        open: function() {
            this.$el.removeClass('close').addClass('open');
        },
        
    
        close: function() { 
            this.$el.removeClass('open').addClass('close');
        }
    });
  
    return topNav;
})
