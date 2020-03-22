
MicroModal.init();

  Splitting(); 

ScrollOut({
  cssProps: {
    visibleY: true,
    viewportY: true
  },
  targets: ".scrollable-pane",
});

ScrollOut({
	targets: ".sticky-header",
	offset: 200
  });
  ScrollOut({
	targets: ".features-list .media",
  });

  ScrollOut({
	targets: ".reveal-text",
  });
  ScrollOut({
	targets: ".fade-in-left",
  });
  ScrollOut({
	targets: ".fade-in-right",
  });
  ScrollOut({
	targets: ".fade-in",
  });
  ScrollOut({
	targets: ".target-this",
  });
  
var mySwiper = new Swiper('.swiper-container.hero-banner', {
  speed: 400,
  spaceBetween: 50,
  effect: 'fade',
  autoplay: {
    delay: 1500,
    disableOnInteraction: false,
  },
  pagination: {
    clickable: true,
    el: '.swiper-pagination-hero-banner',
    type: 'bullets',
  },
});



(function() {
	$('select').each(function() {
		$(this).hide();
		makeElement($(this));
	});

	function makeElement(select) {
		var
		$div = $('<div />', {class:'ui-select'}).insertAfter(select),
		$nav = $('<span />').click(function() {
			$(this).parent().toggleClass('open');
		}).appendTo($div),
		$el = $('<ul />').appendTo($div);
		select.find('option').map(function(i) {
			
			var li = $('<li />').append($(this).text());
				li.click(onSelect.bind($div, li, $(this).val(), select, $nav));
			if($(this).attr('selected')) {
				li.addClass('selected');
			}
			var delay = i * 100 + 'ms';
			li.css({
				'-webkit-transition-delay': delay,
		        '-moz-transition-delay': delay,
		        '-o-transition-delay': delay,
		        'transition-delay': delay
			});
			$el.append(li);
		});
		var selected = $el.find('li.selected');
			selected = selected.length ? selected.html() : $el.find('li:first-child').addClass('selected').html();
		$nav.html(selected);
		// addAnimateDelay($el);
	}

	function onSelect(li, value, select, $nav) {
		this.removeClass('open');
		li.addClass('selected').siblings().removeClass('selected');
		select.val(value).trigger('change');
		$nav.html(li.html());
	}
})();

$('.click-me').click(function () {
	$('.drop-menu').toggleClass('open');
	
})

$('.drop-menu li').each(function() {
var delay = $(this).index() * 100 + 'ms';

$(this).css({
	'-webkit-transition-delay': delay,
	'-moz-transition-delay': delay,
	'-o-transition-delay': delay,
	'transition-delay': delay
});                  
});

  
  var galleryThumbs = new Swiper('.gallery-thumbs', {
	effect: 'coverflow',
	grabCursor: true,
	centeredSlides: true,
	slidesPerView: '3',
	// coverflowEffect: {
	//   rotate: 50,
	//   stretch: 0,
	//   depth: 100,
	//   modifier: 1,
	//   slideShadows : true,
	// },
	
	coverflowEffect: {
        rotate: 0,
        stretch: 0,
        depth: 50,
        modifier: 6,
        slideShadows : false,
	  },
	  
  });
  
  
var galleryTop = new Swiper('.swiper-container.testimonial', {
	speed: 400,
	spaceBetween: 50,
	mousewheelControl: false,
	simulateTouch:false

	// autoplay: {
	//   delay: 3000,
	//   disableOnInteraction: false,
	// },
	direction: 'vertical',
	pagination: {
	  clickable: true,
	  el: '.swiper-pagination',
	  type: 'bullets',
	},
	thumbs: {
		swiper: galleryThumbs
	  }
  });
  

  var galleryThumbss = new Swiper('.gallery-thumbs-search-single', {
	spaceBetween: 15,
	slidesPerView: 4,
	freeMode: true,
	watchSlidesVisibility: true,
	watchSlidesProgress: true,
  });
  var galleryTops = new Swiper('.search-single', {
	
	navigation: {
	  nextEl: '.swiper-button-next',
	  prevEl: '.swiper-button-prev',
	},
	thumbs: {
	  swiper: galleryThumbss
	}
  });
  
  $('.drop').click(function () {
	$(this).toggleClass('open').siblings().removeClass('open');
})

$('.drop-menu li').each(function() {
var delay = $(this).index() * 100 + 'ms';

$(this).css({
	'-webkit-transition-delay': delay,
	'-moz-transition-delay': delay,
	'-o-transition-delay': delay,
	'transition-delay': delay
});                  
});

$('.accordian .accordian-title').click(function() {
	$(this).parent('li').toggleClass('active');
	$(this).parents('li').find('.ac-detail-item').slideToggle();
});