define(['jquery', 'backbone'], function ($, Backbone) {
    "use strict";
    
    var topNav = Backbone.View.extend({
        el: '#navToggle',
        
        
        siblings: {},
        
        
        initialize: function (opts) {
            this.siblings.left = opts.leftPanel;
            this.siblings.right = opts.rightPanel;
        },
        
        
        events: {
            'click': 'toggleContent'
        },
        
        
        toggleContent: function() {
            if ($('.content').hasClass('open')) {
                this.siblings.left.close();
                this.siblings.right.close();
            }
            else {
                this.siblings.left.open();
                this.siblings.right.open();              
            }
        }
    });
  
    return topNav;
})
