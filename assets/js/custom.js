jQuery( document ).ready(function( $ ) {


	"use strict";

        // Page loading animation

        $("#preloader").animate({
            'opacity': '0'
        }, 600, function(){
            setTimeout(function(){
                $("#preloader").css("visibility", "hidden").fadeOut();
            }, 300);
        });

        //Hide head office view on page load
        $(".head_office_view").hide();        

        $(window).scroll(function() {
          var scroll = $(window).scrollTop();
          var box = $('.header-text').height();
          var header = $('header').height();

          if (scroll >= box - header) {
            $("header").addClass("background-header");
          } else {
            $("header").removeClass("background-header");
          }
        });
        
        if ($('.owl-clients').length) {
            $('.owl-clients').owlCarousel({
                loop: true,
                nav: false,
                dots: true,
                items: 1,
                margin: 30,
                autoplay: false,
                smartSpeed: 700,
                autoplayTimeout: 6000,
                responsive: {
                    0: {
                        items: 1,
                        margin: 0
                    },
                    460: {
                        items: 1,
                        margin: 0
                    },
                    576: {
                        items: 2,
                        margin: 20
                    },
                    992: {
                        items: 3,
                        margin: 30
                    }
                }
            });
        }

        if ($('.owl-banner').length) {
            $('.owl-banner').owlCarousel({
                loop: true,
                nav: false,
                dots: true,
                items: 1,
                margin: 0,
                autoplay: false,
                smartSpeed: 700,
                autoplayTimeout: 6000,
                responsive: {
                    0: {
                        items: 1,
                        margin: 0
                    },
                    460: {
                        items: 1,
                        margin: 0
                    },
                    576: {
                        items: 1,
                        margin: 20
                    },
                    992: {
                        items: 1,
                        margin: 30
                    }
                }
            });
        }

        $("#login-button").click(function()
        {
            if($("#Username").val() === "admin" && $("#Password").val() === "password")
            {
                //hide login form
                $(".login-form").remove();
                //show head office view
                $(".head_office_view").show();     
                //make sure content stays hidden until an option is selected
                $("#staff-content").hide();
                $("#location-content").hide();
                $("#product-content").hide();
                $("#search-content").hide();                
            }
            else
            {
                alert("Invalid login details");
            }
        });

        $("#staff-button").click(function()
        {
            //hide other content
            $("#location-content").hide();
            $("#product-content").hide();
            $("#search-content").hide();
            //show staff content
            $("#staff-content").show();
        }
        );

        $("#location-button").click(function()
        {
            //hide other content
            $("#staff-content").hide();
            $("#product-content").hide();
            $("#search-content").hide();
            //show staff content
            $("#location-content").show();
        }
        );

        $("#product-button").click(function()
        {
            //hide other content
            $("#location-content").hide();
            $("#staff-content").hide();
            $("#search-content").hide();
            //show staff content
            $("#product-content").show();
        }
        );

        $("#search-button").click(function()
        {
            //hide other content
            $("#location-content").hide();
            $("#staff-content").hide();
            $("#product-content").hide();
            //show staff content
            $("#search-content").show();
        }
        );
});