/* ===================================
    Preloader
===================================== */

$(window).on('load', function () {
    $('#status').fadeOut();
    $('#preloader').delay(350).fadeOut('slow');
});

/* ===================================
    Team
===================================== */
$(function () {
    $("#team-members").owlCarousel({
        items: 2,
        autoplay: true,
        smartSpeed: 700,
        loop: true,
        autoplayHoverPause: true,
        nav: true,
        dots: false,
        navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>']
    })
});

/* ===================================
    Progress Bars
===================================== */
$(function () {
    $("#progress-elements").waypoint(function () {
        $(".progress-bar").each(function () {
            $(this).animate({
                width: $(this).attr("aria-valuenow") + "%"
            }, 900);
        });
        this.destroy();
    }, {
        offset: 'bottom-in-view'
    });
});

/* ===================================
    Responsive Tabs
===================================== */
$(function () {
    $('#services-tabs').responsiveTabs({
        animation: 'slide'
    });
});

/* ===================================
    Portfolio
===================================== */
$(window).on('load', function () {

    //Initialize Isotope
    $("#isotope-container").isotope({});

    // Filter items on Button Click
    $("#isotope-filters").on('click', 'button', function () {

        //get filter value
        var filterValue = $(this).attr('data-filter');

        //filter portfolio
        $("#isotope-container").isotope({
            filter: filterValue
        });

        //active button
        $("#isotope-filters").find('.active').removeClass('active');
        $(this).addClass('active');
    });
});

/* ===================================
    Magnifier
===================================== */
$(function () {
    $("#portfolio-wrapper").magnificPopup({
        delegate: 'a', // child items selector, by clicking on it popup will open
        type: 'image',
        gallery: {
            enabled: true
        }
    });
});

/* ===================================
    Testimonial
===================================== */
$(function () {
    $("#testimonial-slider").owlCarousel({
        items: 1,
        autoplay: false,
        smartSpeed: 700,
        loop: true,
        autoplayHoverPause: true,
        nav: true,
        dots: false,
        navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>']
    })
});

/* ===================================
    Stats
===================================== */
$(function () {

    $(".counter").counterUp({
        delay: 10,
        time: 2000

    });

});
/* ===================================
    Clients
===================================== */
$(function () {
    $("#clients-list").owlCarousel({
        items: 6,
        autoplay: true,
        smartSpeed: 700,
        loop: true,
        autoplayHoverPause: true,
        nav: true,
        dots: false,
        navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>']
    })
});
/* ===================================
    Navigation
===================================== */
$(function(){
    
    showHideNav();
   $(window).scroll(function(){
      
       showHideNav();
       
   }); 
    
    function showHideNav(){
        
        if($(window).scrollTop()>50){
            $("nav").addClass("white-nav-top");
           $(".navbar-brand img").attr("src", "img/logo/logo-dark.png");
          }
          else
          {
            $("nav").removeClass("white-nav-top");
            $(".navbar-brand img").attr("src", "img/logo/logo.png");
          }
       
    }
});

//Smooth Scrolling
$(function(){
   
    $("a.smooth-scroll").click(function(event){
       
        event.preventDefault();
        
        var section_id = $(this).attr("href");
        
        $("html, body").animate({
            scrollTop: $(section_id).offset().top -64
        }, 1250, "easeInOutExpo");
        
    });
});



















