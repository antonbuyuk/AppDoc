$(document).foundation();

$(window).on("load",function(){
	$('select').styler()
	nonePadding();
	rotateBorder();
});

function nonePadding() {
	var greyBlock = $('.section-last');

	if ($(greyBlock).length) {
		$('.wrapper').css('padding-bottom', '0');
	}
}
function rotateBorder() {
	$('.blog_inter-item-img').each(function() {
		var border = $(this).children('.border').data('rotate');
		$(this).children('.border').css('transform', 'rotate('+ border +'deg)');

		$(this).hover(function() {
			moveBorder = parseInt(border) + parseInt(360);
			$(this).children('.border').css('transform', 'rotate('+ moveBorder + 'deg)');
		}, function() {
			moveBorder = parseInt(border);
			$(this).children('.border').css('transform', 'rotate('+ moveBorder + 'deg)');
		});

	});
}

/*Menu*/
$(document).ready(function() {
	$('.burger').click(function(event) {
		$(this).children('i').toggleClass('icon-close');;
		$('.header-bar').toggleClass('active');
	});
});



/*Parallax*/
$(document).ready(function() {
	if ($(window).width() > '1024'){
		$(window).stellar();
	}
});

/*Carousel*/
$(document).ready(function() {
	if ($('.carousel-text_block').length) {
		$('.carousel-text_block').owlCarousel({
			margin:0,
			nav:true,
			dots: false,
			items:1,
			navText: ['<i class="icon-ios-arrow-left"></i>','<i class="icon-ios-arrow-right"></i>'],
		})
	}


	if ($('.carousel-partners').length) {
		$('.carousel-partners').owlCarousel({
			margin:0,
			nav:true,
			dots: false,
			items:1,
			autoHeight:true,
			navText: ['<i class="icon-ios-arrow-thin-left"></i>','<i class="icon-ios-arrow-thin-right"></i>'],
		});
		nameNav();
		$('.carousel-partners .owl-nav button').click(function(event) {
			nameNav();
		});
	}
});

function nameNav() {
	var namePrev = $('.owl-item.active').prev('.owl-item').find('.carousel-name').text();
		nameNext = $('.owl-item.active').next('.owl-item').find('.carousel-name').text();
	
	$('.carousel-partners .owl-nav .owl-prev').html('<span>' + namePrev + '</span><i class="icon-ios-arrow-thin-left"></i>');
	$('.carousel-partners .owl-nav .owl-next').html('<i class="icon-ios-arrow-thin-right"></i><span>' + nameNext + '</span>');
}