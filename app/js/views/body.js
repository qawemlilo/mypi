define(['backbone'], function (Backbone) {
    "use strict";
    
    var Body = Backbone.View.extend({
        el: '#content',
        
        
        open: function() {
            this.$el.removeClass('close').addClass('open');
        },
        
    
        close: function() { 
            this.$el.removeClass('open').addClass('close');
        }
    });
  
    return Body;
})
