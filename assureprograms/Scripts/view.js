$(document).ready(function(){
	var $window = $(window);
		$mainNav = $('article #main .main-column a');
		$mainNavLeft = $('article #main .left-side a');
		$mainNavRight = $('article #main .right-side a');
		$mainImg = $('article #main .main-column a .main-img');
		$mainAccess = $('#access');
		$mainAnswers = $('#answers');
		$mainAssistance = $('#assistance');
		$mainAdvocacy = $('#advocacy');
		$topTop = '40px';
		$h4Horz = '80px';
		$bottomTop = '70px';
		$isiOffset = $('.below').offset().top;
		$popUp = $('.pop-up');
		$mask = $('.mask');
		$modal = $('.modal');
		$spacer = $('.isi-spacer');
		$header = $('header');
		$article = $('article');
		$below = $('.isi .below');
		$sticky = $('#sticky');
		$contentHeight = $header.outerHeight() + $article.outerHeight() + 26 + $sticky.outerHeight();
		$close = $('.close');
		$pp = $('#pp-scroll');
		$submit = $('#email-submit');
		var $windowHeight;
		
		
		$submit.live('click', function(){
			$('.email-sign-up-form').validate({
				ignore: ('.not-required'),
				messages: {
					'cm-f-qsti' : 'Please acknowledge our Privacy Policy',
					'cm-tylkdu-tylkdu' : 'Invalid or missing email address'
				},
				submitHandler: function(form) {
    				$(form).ajaxSubmit();
    				$('#email-sign-up').fadeOut(200);
    				$('#thank-you').clone().appendTo('.modal-content').fadeIn(200);
    				$('.mask').delay(4000).fadeOut(200);
  				}
			});
		});
		
		
		
		$window.bind('load resize', function(){
			var	$fullscreen = {
					'width' : $window.width() + 'px',
					'height' : $window.height() +'px'
				};
				$windowHeight = $window.height();
			if ($contentHeight >= $window.height()) {
				$spacer.height($sticky.outerHeight());
			} else {
				$spacer.height(1);
			}
			
			$mask.css($fullscreen);
			
		});
		

		$popUp.each(function(index){
			$(this).click(function(){
				var	$ajaxContent = $(this).attr('href');
				$($ajaxContent).clone().appendTo('.modal-content').removeClass('hidden');
				$('.modal' + $ajaxContent).removeClass('hidden');
				$modal.children('.modal-content').children().children().removeClass('hidden');
				$mask.fadeIn(200);
				$modal.delay(100).fadeIn(200);
			});
		});
		
		$close.click(function(){
			$(this).parent('.modal').fadeOut(200).parent('.mask').delay(100).fadeOut(200);
			$(this).parent('.modal').find('.modal-content').empty();
		});
		
		$('#scroll-to-pp').live('click', function(){
			var $scrollDistance = 0 - ($('#email-sign-up').width() / 2);
			$('.modal-content #email-sign-up').animate({
				left: $scrollDistance
			}, 200);
		});
		
		$('#scroll-back').live('click', function(){
			$('.modal-content #email-sign-up').animate({
				left: 0
			}, 200);
		});


		
		$('#please-see span').click(function(){
			$.scrollTo($isiOffset + 'px', {
				duration: 500
			});
		});
		
		$below.waypoint(function(event, direction){
			$sticky.toggleClass('unstick', direction === 'down');
			$spacer.toggle();
			event.stopPropagation();
		},{
			offset : '100%'
		});

		
		$mainNav.hover(
			function(){
				$(this).children('.main-img').fadeOut(250);
				$(this).children('p').delay(200).fadeIn(100);
			},
			function(){
				$(this).children('.main-img').fadeIn(250);
				$(this).children('p').fadeOut(100);
			}
		);
		$mainAccess.hover(
			function(){
				$(this).children('h4').animate({
					top : $topTop,
					left: '20px'
				}, 200);
			},
			function(){
				$(this).children('h4').animate({
					top : $topTop,
					left: $h4Horz
				}, 250);
			}
		);
		$mainAnswers.hover(
			function(){
				$(this).children('h4').animate({
					top : $topTop,
					left: '20px'
				}, 200);
			},
			function(){
				$(this).children('h4').animate({
					top : $bottomTop,
					left: $h4Horz
				}, 250);
			}
		);
		$mainAssistance.hover(
			function(){
				$(this).children('h4').animate({
					top : $topTop,
					right: '20px'
				}, 200);
			},
			function(){
				$(this).children('h4').animate({
					top : $topTop,
					right: $h4Horz
				}, 250);
			}
		);
		$mainAdvocacy.hover(
			function(){
				$(this).children('h4').animate({
					top : $topTop,
					right: '20px'
				}, 200);
			},
			function(){
				$(this).children('h4').animate({
					top : $bottomTop,
					right: $h4Horz
				}, 250);
			}
		);
		
});