$(document).foundation();

$(window).on("load",function(){
	$('select').styler()
	nonePadding();
	rotateBorder();
	radioIcon();
	checkboxBtn();
	sorting();
	sortingView();
	favorites();
	docApp();
	closeModal();
	showRev();
	showProfiles();

  // Also can pass in optional settings block
	var rellax = new Rellax('.rellax', {
		speed: -2,
		center: false,
		wrapper: null,
		round: true,
		vertical: true,
		horizontal: false
	});

});

function nonePadding() {
	var greyBlock = $('.section-last');

	if ($(greyBlock).length) {
		$('.wrapper').css('padding-bottom', '0');
	}
}

function showProfiles() {
	$('.profile_more').click(function() {
		$(this).parents('.profile_list').removeClass('profile_list-hide');
		$(this).hide();
	});
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

/*Show revirews*/
function showRev() {
	$('.reviews_show').click(function() {
		$(this).parent('.reviews_list-hide').removeClass('reviews_list-hide');
		$(this).hide();
	});
}

/*Filters*/
function moreFilters() {
	$('#filtersRow').slideToggle('fast');
	$('#moreFilters').toggleClass('is-active');
	$('#moreFilters').children('i').toggleClass('icon-chevron-up');
}

$(document).ready(function() {
	$('#moreFilters').click(function() {
		moreFilters();
	});
});

function closeModal() {
	$('.modal_close').click(function() {
		$(this).parents('.modal').removeClass('is-active');
		$(this).parents('.overlay').removeClass('is-active');
	});

	// $('.overlay').click(function() {
	// 	$(this).children('.modal').removeClass('is-active');
	// 	$(this).removeClass('is-active');
	// });
}


/*Menu*/
$(document).ready(function() {
	$('.burger').click(function(event) {
		$(this).children('i').toggleClass('icon-close');;
		$('.header-bar').toggleClass('active');
	});
});

/*doctor-page*/
function docApp() {
	$('.doc_card .carousel_calendar-time').click(function() {
		var docTime = $(this).text();
			docDate = $(this).parents('.carousel_calendar-item').find('.carousel_calendar-day').text();

		$('#modalApp .modal_date-day').text(docDate);
		$('#modalApp .modal_date-time').text(docTime);

		$('#modalApp #appointmentData').text(docDate);
		$('#modalApp #appointmentTime').text(docTime);

		$('.overlay').addClass('is-active');
		$('#modalApp').addClass('is-active');

	});
}


/*Radion-icon*/
function radioIcon() {
	$('.radiobtn_btn input').click(function() {
		$(this).parents('.radiobtn').find('.checked').removeClass('checked');
		$(this).parents('.radiobtn_btn').toggleClass('checked');
	});
}

/*Checkbox*/
function checkboxBtn() {
	$('.checkbox_btn input').click(function() {
		$(this).parents('.checkbox_btn').toggleClass('checked');
	});
}

function sorting() {
	$('.sorting_table .sorting_arrow').click(function() {
		$('.sorting_table .sorting_item').removeClass('is-active');
		$('.sorting_table .sorting_arrow').removeClass('is-active');
		$(this).parents('.sorting_item').addClass('is-active');
		$(this).addClass('is-active')
	});
}

function favorites() {
	$('.favorites_heart').click(function() {
		$(this).parent('.favorites').toggleClass('is-active');
	});
}

function sortingView() {
	$('.sorting_view .sorting_arrow').click(function() {
		$('.sorting_view .sorting_item').removeClass('is-active');
		$('.sorting_view .sorting_arrow').removeClass('is-active');
		$(this).parents('.sorting_item').addClass('is-active');
		$(this).addClass('is-active')
	});
}

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

	if ($('.carousel_doc').length) {
		$('.carousel_doc').owlCarousel({
			margin:0,
			nav:true,
			dots: false,
			navText: ['<i class="icon-ios-arrow-left"></i>','<i class="icon-ios-arrow-right"></i>'],
			responsive:{
		        0:{
		            items:1
		        },
		        1024:{
		            items:2
		        }
		    }
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

	if ($('.carousel_calendar').length) {
		$('.carousel_calendar').owlCarousel({
		    margin:0,
		    nav:true,
		    dots: false,
		    navText: ['<i class="icon-ios-arrow-left"></i>','<i class="icon-ios-arrow-right"></i>'],
		    responsive:{
		        0:{
		            items:2
		        },
		        600:{
		            items:3
		        },
		        1000:{
		            items:3
		        }
		    }
		});

		$('.carousel_calendar-arrow').click(function() {
			$(this).parents('.card_block').prev('.carousel_calendar').find('.carousel_calendar-timeline').toggleClass('hidden');
			$(this).children('i').toggleClass('icon-ios-arrow-up');
		});

		$('.carousel_calendar-time').click(function() {
			$(this).parents('.carousel_calendar').find('.carousel_calendar-time').removeClass('selected');
			$(this).toggleClass('selected');

			var appTime = $(this).text();
				appDate = $(this).parents('.carousel_calendar-item').children('.carousel_calendar-day').text();

			$('#appointmentTime').text(appTime);
			$('#appointmentData').text(appDate);
			$('#appointmentBtn').css('display', 'flex');
		});
	}
});

function nameNav() {
	var namePrev = $('.owl-item.active').prev('.owl-item').find('.carousel-name').text();
		nameNext = $('.owl-item.active').next('.owl-item').find('.carousel-name').text();
	
	$('.carousel-partners .owl-nav .owl-prev').html('<span>' + namePrev + '</span><i class="icon-ios-arrow-thin-left"></i>');
	$('.carousel-partners .owl-nav .owl-next').html('<i class="icon-ios-arrow-thin-right"></i><span>' + nameNext + '</span>');
}

$(document).ready(function() {
    var wrapper = $( ".form-upload" ),
        inp = wrapper.find( "input" ),
        btn = wrapper.find( "button" ),
        lbl = wrapper.find( "div" );

    lbl.focus(function(){
        inp.focus()
    });
    // Crutches for the :focus style:
    inp.focus(function(){
        wrapper.addClass( "focus" );
    }).blur(function(){
        wrapper.removeClass( "focus" );
    });

    var file_api = ( window.File && window.FileReader && window.FileList && window.Blob ) ? true : false;

    inp.change(function(){
        var file_name;
        if( file_api && inp[ 0 ].files[ 0 ] )
            file_name = inp[ 0 ].files[ 0 ].name;
        else
            file_name = inp.val().replace( "C:\\fakepath\\", '' );

        if( ! file_name.length )
            return;

        if( lbl.is( ":visible" ) ){
            lbl.text( file_name );
        }else
            lbl.text( file_name );
    }).change();
});