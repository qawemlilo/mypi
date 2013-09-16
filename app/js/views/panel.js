define(['backbone'], function (Backbone) {
    "use strict";
    
    var Panel = Backbone.View.extend({
        el: '#sidePanel',
        
        
        open: function() {
            this.$el.removeClass('close').addClass('open');
        },
        
    
        close: function() { 
            this.$el.removeClass('open').addClass('close');
        }
    });
  
    return Panel;
})
