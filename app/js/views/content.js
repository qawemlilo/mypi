define(['jquery', 'backbone'], function ($, Backbone) {
    "use strict";
    
    var Content = Backbone.View.extend({
        el: '#content',
        
        
        siblings: {},
        
        
        initialize: function (opts) {
            this.siblings.nav = opts.nav;
        },
        
        
        events: {
            'click': 'toggleContent'
        },
        
        
        toggleContent: function() {
            if (this.$el.hasClass('open')) {
                this.siblings.nav.close();
            }
        },
        
        
        open: function() {
            this.$el.removeClass('close').addClass('open');
        },
        
    
        close: function() { 
            this.$el.removeClass('open').addClass('close');
        }
    });
  
    return Content;
})
