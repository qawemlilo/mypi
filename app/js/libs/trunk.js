$(function() {
    var items, content, open, close; 
    
    items = $('.slideRight, .slideLeft');
    content = $('.content');
    
    open = function() {
        $(items).removeClass('close').addClass('open');
    };
    
    close = function() { 
        $(items).removeClass('open').addClass('close');
    };
    
    $('#navToggle').click(function(){
        if (content.hasClass('open')) {
            close();
        }
        else {
            open();
        }
    });
    
    content.click(function(){
        if (content.hasClass('open')) {
           close();
        }
    });
});
