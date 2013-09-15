define(['jquery', 'backbone'], function ($, Backbone) {
    "use strict";
    
    var rightPanel = Backbone.View.extend({
        el: '.slideRight',
        
        open: function() {
            this.$el.removeClass('close').addClass('open');
        },
    
        close: function() { 
            this.$el.removeClass('open').addClass('close');
        }
    });
  
    return rightPanel;
})
