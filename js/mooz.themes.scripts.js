$(window).scroll(function() {
    if ($(document).scrollTop() > 150) {
        $('.navbar').addClass('navbar-shrink');
    }
    else {
        $('.navbar').removeClass('navbar-shrink');
    }
});

$(function() {
  $('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
});


$('.owl-partners').owlCarousel({
    loop:true,
    margin:0,
    nav:false,
    autoplay:true,
   autoplayTimeout:772,
    autoplayHoverPause:true,
    responsive:{
        0:{
            items:1
        },
        100:{
            items:3
        },
        500:{
            items:7
        }
    }
})


$('.owl-portfolio').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    navText: [
          "<i class='fa fa-angle-left'></i>",
          "<i class='fa fa-angle-right'></i>"
          ],
    dots:false,
    autoplay:true,
    autoplayTimeout:2000,
    autoplayHoverPause:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
})


  $("#back-top").hide();

  

  $(window).scroll(function () {
  	if ($(this).scrollTop() > 100) {
  		$('#back-top').fadeIn();
  	} else {
  		$('#back-top').fadeOut();
  	}
  });

  
  $('#back-top a').on("click", function(){
  	$('body,html').animate({
  		scrollTop: 0
  	}, 800);
  	return false;
  });


$('.navbar-collapse ul li a').click(function() {
    $('.navbar-toggle:visible').click();
});

$(function() {    
    $('.stats-bar').appear();
    $('.stats-bar').on('appear', function() {
    var fx = function fx() {
    $(".stat-number").each(function (i, el) {
        var data = parseInt(this.dataset.n, 10);
        var props = {
            "from": {
                "count": 0
            },
                "to": {
                "count": data
            }
        };
        $(props.from).animate(props.to, {
            duration: 1000 * 1,
            step: function (now, fx) {
                $(el).text(Math.ceil(now));
            },
            complete:function() {
                if (el.dataset.sym !== undefined) {
                  el.textContent = el.textContent.concat(el.dataset.sym)
                }
            }
        });
    });
    };
    
    var reset = function reset() {
        console.log($(this).scrollTop())
        if ($(this).scrollTop() > 90) {
            $(this).off("scroll");
          fx()
        }
    };
    
    $(window).on("scroll", reset);
});
    });