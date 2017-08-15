(function($) {
    "use strict";
    //when dom is ready
    $(document).ready(function(){

        // on scroll event start
        $(window).on('scroll', function() {
            if($(window).width() > 768){
                if ($(window).scrollTop() > 55) {
                    $('#navbar').addClass('navbar-bg');
                } else {
                    $('#navbar').removeClass('navbar-bg');
                }
            }
        });
        // on scroll event end
        
        // animated 
        $('.progress-bar').each(function(){
            var width = $(this).data('percent');
            $(this).css({'transition': 'width 3s'});
            $(this).appear(function() {
                console.log('hello');
                $(this).css('width', width + '%');
            });
        });

        // scroller start
        $('a.scroll').bind('click', function(event) {
            var $anchor = $(this);
            $('html, body').stop().animate({
                scrollTop: $($anchor.attr('href')).offset().top -72
            }, 1500, 'easeInOutExpo');
            event.preventDefault();
        });
        $('body').scrollspy({ target: '#navbar', offset:72 })
        // scroller end

    });
    //dom ready end

})(jQuery);