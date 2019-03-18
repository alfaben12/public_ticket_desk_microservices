/*
Template:  		Quickai HTML5 Template
Written by: 	Harnish Design - (http://www.harnishdesign.net)
*/

(function ($) {
	"use strict";

/*---------------------------------------------------
    Primary Menu
    ----------------------------------------------------- */

// Dropdown show on hover
$('.primary-menu ul.navbar-nav li.dropdown').on("mouseover", function() {
	if ($(window).width() > 991) {
		$(this).find('> .dropdown-menu').stop().slideDown('fast');
		$(this).bind('mouseleave', function() {
			$(this).find('> .dropdown-menu').stop().css('display', 'none'); 
		});
	}
});

// When dropdown going off to the out of the screen.
$('.primary-menu .dropdown-menu').each(function() {
	var menu = $('#header .header-row').offset();
	var dropdown = $(this).parent().offset();

	var i = (dropdown.left + $(this).outerWidth()) - (menu.left + $('#header .header-row').outerWidth());

	if (i > 0) {
		$(this).css('margin-left', '-' + (i + 5) + 'px');
	}
});
$(function () {
	$(".dropdown li").on('mouseenter mouseleave', function (e) {
		if ($(window).width() > 991) {
			var elm = $('.dropdown-menu', this);
			var off = elm.offset();
			var l = off.left;
			var w = elm.width();
			var docW = $(window).width();

			var isEntirelyVisible = (l + w <= docW);
			if (!isEntirelyVisible) {
				$(elm).addClass('dropdown-menu-right');
			} else {
				$(elm).removeClass('dropdown-menu-right');
			}
		}
	});
});

// Mobile Collapse Nav
$('.primary-menu .dropdown-toggle[href="#"], .primary-menu .dropdown-toggle[href!="#"] .arrow').on('click', function(e) {
	if ($(window).width() < 991) {
		e.preventDefault();
		var $parentli = $(this).closest('li');
		$parentli.siblings('li').find('.dropdown-menu:visible').slideUp();
		$parentli.find('> .dropdown-menu').stop().slideToggle();
		$parentli.siblings('li').find('a .arrow.open.html').toggleClass('open');
		$parentli.find('> a .arrow').toggleClass('open');
	}
});

// DropDown Arrow
$('.primary-menu').find('a.dropdown-toggle.html').append($('<i />').addClass('arrow'));

// Mobile Menu Button Icon
$('.navbar-toggler').on('click', function() {
	$(this).toggleClass('open');
});


/*--------------------------------------
    Booking (Flights, Train, Bus, Hotels, )
    ---------------------------------------- */

    /* Flights Travellers and Class */
    $('#TravellersClass').on('click', function() {
    	$('.travellers-dropdown').slideToggle('fast');
    	/* Change value of Travellers and Class */
    	$('.qty-spinner, .flight-class').on('change', function() {
    		var ids = ['adult', 'children', 'infants'];
    		var totalCount = ids.reduce(function (prev, id) {
    			return parseInt($('#' + id + '-travellers').val()) + prev}, 0);
    		var fc = $('input[name="flight-class"]:checked  + label').text();
    		$('#TravellersClass').val(totalCount + ' - ' + fc);
    	}).trigger('change');
    });

    /* Flights Travellers and Class */
    $('#AgentTravel').on('click', function() {
    	$('.agent-dropdown').slideToggle('fast');
    	/* Change value of Travellers and Class */
    	$('.agent-travel').on('change', function() {
    		var fc = $('input[name="agent-travel"]:checked  + label').text();
    		$('#AgentTravel').val(fc);
    	}).trigger('change');
    });

    /* Hide dropdown when clicking outside */
    $(document).on('click', function(event) {
    	if (!$(event.target).closest(".travellers-class").length) {
    		$(".travellers-dropdown").hide();
    	}

    	/* Hide dropdown when clicking on Done Button */
    	$('.submit-done').on('click', function() {
    		$('.travellers-dropdown').fadeOut(function() {
    			$(this).hide();
    		});
    	});
    });

    /* Hide dropdown when clicking outside */
    $(document).on('click', function(event) {
    	if (!$(event.target).closest(".agent-travels").length) {
    		$(".agent-dropdown").hide();
    	}

    	/* Hide dropdown when clicking on Done Button */
    	$('.submit-done-agent').on('click', function() {
    		$('.agent-dropdown').fadeOut(function() {
    			$(this).hide();
    		});
    	});
    });

/*----------------------------
    Slideshow (Owl Carousel)
    ------------------------------ */
    $('.slideshow').owlCarousel({
    	items:1,
    	autoplay:true,
    	autoplayTimeout:4500,
    	animateOut: 'fadeOut',
    	animateIn: 'fadeIn',
    	lazyLoad:true,
    	loop:true,
    	nav:true,
    	navText:['<i class="fa fa-chevron-left"></i>', '<i class="fa fa-chevron-right"></i>'],
    });

/*---------------------------------------------------
   Carousel (Owl Carousel)
   ----------------------------------------------------- */
   $('.brands').owlCarousel({
   	margin:10,
   	autoplay:true,
   	autoplayTimeout:4500,
   	lazyLoad:true,
	//nav:true,
	//navText:['<i class="fa fa-chevron-left"></i>', '<i class="fa fa-chevron-right"></i>'],
	responsive:{
		0:{items:2,},
		576:{items:3,},
		768:{items:4,},
		992:{items:6,}
	}
});

   $('.banner').owlCarousel({
   	margin:30,
   	autoplay:true,
   	autoplayTimeout:4500,
   	lazyLoad:true,
   	nav:true,
   	navText:['<i class="fa fa-chevron-left"></i>', '<i class="fa fa-chevron-right"></i>'],
   	responsive:{
   		0:{items:1,},
   		576:{items:2,},
   		768:{items:2,},
   		992:{items:3,}
   	}
   });

/*---------------------------------------------------
   tooltips
   ----------------------------------------------------- */
   $('[data-toggle=\'tooltip\']').tooltip({container: 'body'});

/*---------------------------------------------------
   Scroll to top
   ----------------------------------------------------- */
   $(function () {
   	$(window).on('scroll', function(){
   		if ($(this).scrollTop() > 150) {
   			$('#back-to-top').fadeIn();
   		} else {
   			$('#back-to-top').fadeOut();
   		}
   	});
   });
   $('#back-to-top').on("click", function() {
   	$('html, body').animate({scrollTop:0}, 'slow');
   	return false;
   });

})(jQuery);