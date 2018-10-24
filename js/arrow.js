
$(document).ready(function(){

    $('.down').click( function(event) {
        event.preventDefault();
        var anchor = 0;
        var top= $('.down');

        if(top.length){
            var newtop= top.offset().top - 10 ;
            anchor = newtop;
            $('html,body').stop().animate({scrollTop:anchor}, 900,'swing');
        }

        
    });

    $(".btn.menu-btn, .sidemenu-btn a").on("click",function(){
        $("nav").addClass("active");
        return false;
    });
    $("html").on("click",function(){
        $("nav").removeClass("active");
    });
    $(".btn.menu-btn, nav,  .sidemenu-btn a").on("click",function(e){
        e.stopPropagation();
    });

    
    $(".responsive-header nav ul li.menu-item-has-children > a, .half-header nav ul li.menu-item-has-children > a").on("click", function(){
        $(this).parent().toggleClass("active").siblings().removeClass("active");
        $(this).parent().siblings().find("ul").slideUp("slow");
        $(this).next("ul").slideToggle("slow");
        return false;
    });





    $( '.launch-overlay' ).simpleOverlay();

    $(window).bind('scroll', function () {
    if ($(window).scrollTop() > 50) {
        $('.scroll-top-button').addClass('visible');

    } else {
        $('.scroll-top-button').removeClass('visible');
    }

    });

    $("body").niceScroll({
        cursorcolor:"#2980b9",
        cursorwidth:"12px",
        cursorminheight: 100,
        background:"rgba(20,20,20,0.1)",
        cursorborder:"none",
        cursorborderradius:5


            
        });



    $('#contact_form').bootstrapValidator({
        // To use feedback icons, ensure that you use Bootstrap v3.1.0 or later
        feedbackIcons: {
            valid: 'glyphicon glyphicon-ok',
            invalid: 'glyphicon glyphicon-remove',
            validating: 'glyphicon glyphicon-refresh'
        },
        fields: {
             password: {
                validators: {
                     stringLength: {
                        min: 2,
                    },
                    notEmpty: {
                        message: '.. .. Please supply your password'
                    }
                }
            },
            email: {
                validators: {
                    notEmpty: {
                        message: '.. .. Please supply your email address'
                    },
                    emailAddress: {
                        message: '.. .. Please supply a valid email address'
                    }
                }
            }
            }
        })
        .on('success.form.bv', function(e) {

            swal("success", "You clicked the button!", "success")
            // $('#success_message').slideDown({ opacity: "show" }, "slow") // Do something ...
                $('#contact_form').data('bootstrapValidator').resetForm();


            // Prevent form submission
            e.preventDefault();


            // Get the form instance
            var $form = $(e.target);

            // Get the BootstrapValidator instance
            var bv = $form.data('bootstrapValidator');

            // Use Ajax to submit form data
            $.post($form.attr('action'), $form.serialize(), function(result) {
                console.log(result);
            }, 'json');




        });


	// $("#contact_form").validator();
        

    
});

new WOW().init();

$('.scroll-top-button').click(function () {
    $('.scroll-top-button').tooltip('hide');
    $('body,html').animate({
        scrollTop: 0
    }, 1500);
    return false;
});




