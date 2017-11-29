/*
Template Name: Mountain  -  One Page Responsive - Light Version Core-Script
Author: SlyThemes

Index Of JS:

    :: 1. Page-Loader
       -1.1 Button to go back to Top
       -1.2 Contact-Form 
    :: 2. Isotope
    :: 3. Filter
    :: 4. Smooth-Page-Scroll
    :: 5. Nav scrolling
    :: 6. Smooth Button-Scroll
    :: 7. Progress-Bar
    :: 8. Tabs
    :: 9. Magnific-Popup JS
    :: 10. Owl-Carousel JS
    :: 11. Stellar
    :: 12. Map
    :: 13. Animation-Code
        
*/
"use strict";
/*jslint browser:true */

/* >>>>>>>>> Page-Loader >>>>>>>>>>*/
$(window).on("load", function() {

    $(".page-loader").fadeOut(500);

    /* >>>>>>>>>Button to go back to the top >>>>>>>>>>>>*/
    var wind = $(window);

    var main_height = $(".main-height").outerHeight();

    $(".sub-height").outerHeight(main_height);

    var owl = $('.owl-carousel');

    // scrollIt
    $.scrollIt({
      upKey: 38,                // key code to navigate to the next section
      downKey: 40,              // key code to navigate to the previous section
      easing: 'swing',         // the easing function for animation
      scrollTime: 850,          // how long (in ms) the animation takes
      activeClass: 'active',    // class given to the active nav element
      onPageChange: null,       // function(pageIndex) that is called when page is changed
      topOffset: -60            // offste (in px) for fixed top navigation
    });


    // button scroll to top
    wind.on("scroll",function () {

        var bodyScroll = wind.scrollTop(),
            button_top = $(".button-top");

        if(bodyScroll > 700){

            button_top.addClass("button-show");

        }else{

            button_top.removeClass("button-show");
        }
    });

    /* >>>>>>>>> Contact-Form >>>>>>>>>>*/
    $('#contact-form').validator();

    $('#contact-form').on('submit', function(e) {
        if (!e.isDefaultPrevented()) {
            var url = "contact.php";

            $.ajax({
                type: "POST",
                url: url,
                data: $(this).serialize(),
                success: function(data) {
                    var messageAlert = 'alert-' + data.type;
                    var messageText = data.message;

                    var alertBox = '<div class="alert ' + messageAlert + ' alert-dismissable"><button type="button" class="close" data-dismiss="alert" aria-hidden="true">&times;</button>' + messageText + '</div>';
                    if (messageAlert && messageText) {
                        $('#contact-form').find('.messages').html(alertBox);
                        $('#contact-form')[0].reset();
                    }
                }
            });
            return false;
        }
    });

    /* >>>>>>>>> Isotope >>>>>>>>>>*/
    $('.gallery').isotope({
        itemSelector: '.item-img'
    });

    var $gallery = $('.gallery').isotope({});

    /* >>>>>>>>> Filter >>>>>>>>>>*/
    $('.filtering').on('click', 'span', function() {
        var filterValue = $(this).attr('data-filter');
        $gallery.isotope({
            filter: filterValue
        });
    });

    $('.filtering').on('click', 'span', function() {
        $(this).addClass('active').siblings().removeClass('active');
    });

});


$(function() {
    "use strict";

    var wind = $(window);

    /* >>>>>>>>> Smooth-Page-Scroll >>>>>>>>>>*/
    $('.navbar-nav').singlePageNav({
        speed: 1000,
        currentClass: 'active',
        offset: 60
    });

    /* >>>>>>>>> Nav scrolling >>>>>>>>>>*/
    wind.on("scroll", function() {

        var bodyScroll = wind.scrollTop(),
            navbar = $(".navbar-default");

        if (bodyScroll > 300) {

            navbar.addClass("nav-scroll");

        } else {

            navbar.removeClass("nav-scroll");
        }
    });

    /* >>>>>>>>> Smooth Button-Scroll >>>>>>>>>>*/
    $('.button-scroll').on('click', function() {

        var scrollTo = $(this).attr('data-scrollTo');

        $('body, html').animate({

            "scrollTop": $('#' + scrollTo).offset().top - 60
        }, 1000);

    });


    /* >>>>>>>>> Progress-Bar >>>>>>>>>>*/
    wind.on('scroll', function() {
        $(".skill_progression span").each(function() {
            var bottom_of_object =
                $(this).offset().top + $(this).outerHeight();
            var bottom_of_window =
                $(window).scrollTop() + $(window).height();
            var myVal = $(this).attr('data-value');
            if (bottom_of_window > bottom_of_object) {
                $(this).css({
                    width: myVal
                });
            }
        });
    });


    /* >>>>>>>>> Tabs >>>>>>>>>>*/
    $(".services").on("click", "li", function() {

        var myID = $(this).attr("id");

        $(this).addClass("active").siblings().removeClass("active");

        $(".services .item").hide();

        $("#" + myID + "-content").fadeIn();

    });


    /* >>>>>>>>> Magnific-Popup JS >>>>>>>>>>*/
    $('.portfolio .link').magnificPopup({
        delegate: 'a',
        type: 'image'
    });


    /* >>>>>>>>> Owl-Carousel JS >>>>>>>>>>*/
    $('.demo4 .owl-carousel').owlCarousel({
        items: 1,
        loop: true,
        mouseDrag: false,
        autoplay: true,
        dots: false,
        nav: true,
        navText: ['<span> <i class="fa fa-angle-left" aria-hidden="true"></i> </span>',
            '<span> <i class="fa fa-angle-right" aria-hidden="true"></i> </span>'
        ],
        smartSpeed: 500
    });

    $('.Reviews .owl-carousel').owlCarousel({
        items: 1,
        loop: true,
        mouseDrag: false,
        autoplay: true,
        smartSpeed: 500
    });

    /* >>>>>>>>> Stellar >>>>>>>>>>*/
    wind.stellar();


    /* >>>>>>>>> Map >>>>>>>>>>*/
    $(".map-toggle").on('click', function() {
        $(".map-loc").slideToggle(10);
        $("span").toggleClass("open");
    });

    /* >>>>>>>>> Animation-Code >>>>>>>>>>*/
    $(window).on('scroll', function() {
        $('.hide-me').each(function(i) {
            var bottom_of_object = $(this).position().top;
            var bottom_of_window = $(window).scrollTop() + $(window).height();

            if (bottom_of_window > bottom_of_object) {
                $(this).animate({
                    'opacity': '1'
                }, 780);
            }

        });

    });

});
















