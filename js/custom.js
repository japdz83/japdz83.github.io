/*=================================================================
  SideNav Responsive
==================================================================*/
$( document ).ready(function(){
	$(".button-collapse").sideNav();
});

/*=================================================================
  Portafolio Modal
==================================================================*/
$(document).ready(function(){
    // the "href" attribute of the modal trigger must specify the modal ID that wants to be triggered
    $('.modal').modal();
    
  });

/*=================================================================
  Habilidades
==================================================================*/
(function() {
  $(document).ready(function() {
    $('.skill-box').find('b').each(function(i) {
      return $(this).prop('Counter', 0).animate({
        Counter: $(this).parent().data('percent')
      }, {
        duration: 1500,
        easing: 'swing',
        step: function(now) {
          return $(this).text(Math.ceil(now) + '%');
        }
      });
    });
    return $('.skill-box .skills-circle li').each(function(i) {
      var _left, _percent, _right, deg, full_deg, run_duration;
      _right = $(this).find('.bar-circle-right');
      _left = $(this).find('.bar-circle-left');
      _percent = $(this).attr('data-percent');
      deg = 3.6 * _percent;
      if (_percent <= 50) {
        return _right.animate({
          circle_rotate: deg
        }, {
          step: function(deg) {
            $(this).css('transform', 'rotate(' + deg + 'deg)');
          },
          duration: 1500
        });
      } else {
        full_deg = 180;
        deg -= full_deg;
        run_duration = 1500 * (50 / _percent);
        return _right.animate({
          circle_rotate: full_deg
        }, {
          step: function(full_deg) {
            $(this).css('transform', 'rotate(' + full_deg + 'deg)');
          },
          duration: run_duration,
          easing: 'linear',
          complete: function() {
            run_duration -= 1500;
            _left.css({
              'clip': 'rect(0, 150px, 150px, 75px)',
              'background': '#009fe3'
            });
            return _left.animate({
              circle_rotate: deg
            }, {
              step: function(deg) {
                $(this).css('transform', 'rotate(' + deg + 'deg)');
              },
              duration: Math.abs(run_duration),
              easing: 'linear'
            });
          }
        });
      }
    });
  });

}).call(this);

/*=================================================================
  NiceScroll
==================================================================*/
var nice = $("html").niceScroll({
		cursorborderradius: 0,
		cursorwidth: "8px",
		cursorfixedheight: 150,
		cursorcolor: "#009fe3",
		zindex: 9999,
		cursorborder: 0,
	});
/*=================================================================
  Icon Section
==================================================================*/
/* Demo purposes only */
// $(".hover").mouseleave(
//   function () {
//     $(this).removeClass("hover");
//   }
// );
/* ========================================================================= */
/*	Call To Action scrolldowncon
/* ========================================================================= */




/* ========================================================================= */
/*	Scroll Up / Back to top
/* ========================================================================= */
	
	$(window).scroll(function() {
		if ($(window).scrollTop() > 400) {
			$("#scrollUp").fadeIn(200);
		} else {
			$("#scrollUp").fadeOut(200);
		}
	});
	
	$('#scrollUp').click(function() {
		$('html, body').stop().animate({
			scrollTop : 0
		}, 1500, 'easeInOutExpo');
	});

/* ========================================================================= */
/*	Call To Action scrolldowncon
/* ========================================================================= */
	 
	$('.ancla').click(function(){
      var link = $(this);
      var anchor  = link.attr('href');
      $('html, body').stop().animate({
          scrollTop: jQuery(anchor).offset().top
      }, 1700);
      e.preventDefault();
      return false;
  });


/* ========================================================================= */
/*	Menu item highlighting
/* ========================================================================= */

	$("#navigation").sticky({
		topSpacing : 0
	});
	
	$('#nav').onePageNav({
		currentClass: 'current',
		changeHash: false,
		scrollSpeed: 1500,
		scrollThreshold: 0.5,
		filter: '',
		easing: 'easeInOutExpo'
	});

/* ========================================================================= */
/*	Menu item Mobile Version
/* ========================================================================= */

$("#navigation").sticky({
		topSpacing : 0
	});
	
	$('#mobile-demo').onePageNav({
		currentClass: 'current',
		changeHash: false,
		scrollSpeed: 1500,
		scrollThreshold: 0.5,
		filter: '',
		easing: 'easeInOutExpo'
	});

/* ========================================================================= */
/*	Call To Action scrolldowncon
/* ========================================================================= */
	 
	$('.ancla').click(function(){
      var link = $(this);
      var anchor  = link.attr('href');
      $('html, body').stop().animate({
          scrollTop: jQuery(anchor).offset().top
      }, 1700);
      e.preventDefault();
      return false;
  });
  
/*=================================================================
  Validar Formulario
==================================================================*/



/*=================================================================
  ----
==================================================================*/