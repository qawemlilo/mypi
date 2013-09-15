define(['jquery', 'backbone'], function ($, Backbone) {
    "use strict";
    
    var Content = Backbone.View.extend({
        el: '.content',
        
        
        siblings: {},
        
        
        initialize: function (opts) {
            this.siblings.left = opts.leftPanel;
            this.siblings.right = opts.rightPanel;
        },
        
        
        events: {
            'click': 'toggleContent'
        },
        
        
        toggleContent: function() {
            if (this.$el.hasClass('open')) {
                this.siblings.left.close();
                this.siblings.right.close();
            }
        }
    });
  
    return Content;
})
