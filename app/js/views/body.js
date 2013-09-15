define(['jquery', 'backbone'], function ($, Backbone) {
    "use strict";
    
    var leftPanel = Backbone.View.extend({
        el: '.slideLeft',
        
        open: function() {
            this.$el.removeClass('close').addClass('open');
        },
    
        close: function() { 
            this.$el.removeClass('open').addClass('close');
        }
    });
  
    return leftPanel;
})
