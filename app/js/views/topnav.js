define(['jquery', 'backbone'], function ($, Backbone) {
    "use strict";
    
    var topNav = Backbone.View.extend({
        el: '#topheader',
        
        
        siblings: {},
        
        
        initialize: function (opts) {
            this.siblings.left = opts.leftPanel;
            this.siblings.right = opts.rightPanel;
            this.siblings.content = opts.content;
        },
        
        
        events: {
            'click #navToggle': 'toggleContent'
        },
        
        
        toggleContent: function() {
            if (this.siblings.content.$el.hasClass('open')) {
                this.close();
            }
            else {
                this.open();            
            }
        },
        
        
        open: function() {
            this.$el.removeClass('close').addClass('open');
            this.siblings.left.open();
            this.siblings.right.open(); 
            this.siblings.content.open(); 
        },
        
    
        close: function() { 
            this.$el.removeClass('open').addClass('close');
            this.siblings.left.close();
            this.siblings.right.close();
            this.siblings.content.close();
        }
    });
  
    return topNav;
})
