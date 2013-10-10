$(document).ready(function() {
  
  // On click, remove class on active element, add it to the new one
  
  $('header nav a').click(function(e) {
    
    $('header nav a.active').removeClass('active');
    $(this).addClass('active');
    
    // Scroll to anchor
    
    $('html,body').animate({
      scrollTop: $($(this).attr('href')).offset().top - 70
    },'slow');
    
    e.preventDefault();
    return false;
    
  });
  
  // On scroll, remove class on active element and add it to the new one
  
  $(document).scroll(function() {
     
     var position = Math.floor($(this).scrollTop() / 800) + 1;
    
     $('header nav a.active').removeClass('active');
     $('header nav a.link-' + position).addClass('active');
    
  });
  


        /* SIDE SCROLL */
        $(function() {
            $('#options ul a').bind('click',function(e){
                //var $anchor = $(this);
                /*
                if you want to use one of the easing effects:
                $('html, body').stop().animate({
                    scrollLeft: $($anchor.attr('href')).offset().left
                }, 1500,'easeInOutExpo');*/
                        var $anchor = $(this);
                        /*
                        if you want to use one of the easing effects:
                        $('html, body').stop().animate({
                            scrollLeft: $($anchor.attr('href')).offset().left
                        }, 1500,'easeInOutExpo');
                         */
                         if(($(this).attr('href')) === '#section1'){
                          $('#skills .port2').stop().animate({
                            "left":"0px"
                          }, 'slow');
                        } else if (($(this).attr('href')) === '#section2'){
                          $('#skills .port2').stop().animate({
                            "left":"-1500px"
                          }, 'slow');
                        } else if (($(this).attr('href')) === '#section3'){
                          $('#skills .port2').stop().animate({
                            "left":"-3000px"
                          }, 'slow');
                        }

                        e.preventDefault();

                console.log( $(this).attr('href') ) ;
                //$('#skills .port').animate({"left":"300px"},'slow')

            });
        });

});