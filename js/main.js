$(document).ready(function(){
  $('#nav-icon').click(function(){
    $(this).toggleClass('open');
    $(".nav-menu").toggleClass('nav-active');
  });
  var owl = $('.owl-carousel');
  owl.owlCarousel({
    items:1,
    loop:true,
    dots:false,
    autoplay:true,
    autoplayTimeout:6000,
    autoplayHoverPause:false
  });

});




var bar = new ProgressBar.Line(container, {
  strokeWidth: 4,
  easing: 'easeInOut',
  duration: 1400,
  color: 'rgb(65, 185, 87)',
  trailColor: '#eee',
  trailWidth: 1,
  svgStyle: {width: '100%', height: '100%'},
  text: {
    style: {
      // Text color.
      // Default: same as stroke color (options.color)
      color: '#999',
      position: 'absolute',
      left: '80%',
      top: '-20px',
      padding: 0,
      margin: 0,
      transform: null
    },
    autoStyleContainer: false
  },
  from: {color: 'rgb(65, 185, 87)'},
  to: {color: '#ED6A5A'},
  step: (state, bar) => {
    bar.setText(Math.round(bar.value() * 100) + ' %');
  }
});







  var bar2 = new ProgressBar.Line(container2, {
    strokeWidth: 4,
    easing: 'easeInOut',
    duration: 1400,
    color: 'rgb(65, 185, 87)',
    trailColor: '#eee',
    trailWidth: 1,
    svgStyle: {width: '80%', height: '100%'},
    text: {
      style: {
        // Text color.
        // Default: same as stroke color (options.color)
        color: '#999',
        position: 'absolute',
        left: '70%',
        top: '-20px',
        padding: 0,
        margin: 0,
        transform: null
      },
      autoStyleContainer: false
    },
    from: {color: 'rgb(65, 185, 87)'},
    to: {color: '#ED6A5A'},
    step: (state, bar2) => {
      bar2.setText(Math.round(bar2.value() * 80) + ' %');
    }
  });


  var bar3 = new ProgressBar.Line(container3, {
    strokeWidth: 4,
    easing: 'easeInOut',
    duration: 1400,
    color: 'rgb(65, 185, 87)',
    trailColor: '#eee',
    trailWidth: 1,
    svgStyle: {width: '90%', height: '100%'},
    text: {
      style: {
        // Text color.
        // Default: same as stroke color (options.color)
        color: '#999',
        position: 'absolute',
        left: '80%',
        top: '-20px',
        padding: 0,
        margin: 0,
        transform: null
      },
      autoStyleContainer: false
    },
    from: {color: 'rgb(65, 185, 87)'},
    to: {color: '#ED6A5A'},
    step: (state, bar3) => {
      bar3.setText(Math.round(bar3.value() * 90) + ' %');
    }
  });


  var bar4 = new ProgressBar.Line(container4, {
    strokeWidth: 4,
    easing: 'easeInOut',
    duration: 1400,
    color: 'rgb(65, 185, 87)',
    trailColor: '#eee',
    trailWidth: 1,
    svgStyle: {width: '70%', height: '100%'},
    text: {
      style: {
        // Text color.
        // Default: same as stroke color (options.color)
        color: '#999',
        position: 'absolute',
        top: '-20px',
        left: '60%',
        padding: 0,
        margin: 0,
        transform: null
      },
      autoStyleContainer: false
    },
    from: {color: 'rgb(65, 185, 87)'},
    to: {color: '#ED6A5A'},
    step: (state, bar4) => {
      bar4.setText(Math.round(bar4.value() * 70) + ' %');
    }
  });

    $(function () {
        var jqBar = $('#container');

        $(window).scroll(function() {
          var scrollEvent = ($(window).scrollTop() >
          (jqBar.position().top - $(window).height()));
          if (scrollEvent ) {
              bar.animate(1.0);
              bar2.animate(1.0);
              bar3.animate(1.0);
              bar4.animate(1.0);
          }
        });
    });
    jQuery(document).ready(function($){
    	//open/close lateral filter
    	$('.cd-filter-trigger').on('click', function(){
    		triggerFilter(true);
    	});
    	$('.cd-filter .cd-close').on('click', function(){
    		triggerFilter(false);
    	});

    	function triggerFilter($bool) {
    		var elementsToTrigger = $([$('.cd-filter-trigger'), $('.cd-filter'), $('.cd-tab-filter'), $('.cd-gallery')]);
    		elementsToTrigger.each(function(){
    			$(this).toggleClass('filter-is-visible', $bool);
    		});
    	}

    	//mobile version - detect click event on filters tab
    	var filter_tab_placeholder = $('.cd-tab-filter .placeholder a'),
    		filter_tab_placeholder_default_value = 'Select',
    		filter_tab_placeholder_text = filter_tab_placeholder.text();

    	$('.cd-tab-filter li').on('click', function(event){
    		//detect which tab filter item was selected
    		var selected_filter = $(event.target).data('type');

    		//check if user has clicked the placeholder item
    		if( $(event.target).is(filter_tab_placeholder) ) {
    			(filter_tab_placeholder_default_value == filter_tab_placeholder.text()) ? filter_tab_placeholder.text(filter_tab_placeholder_text) : filter_tab_placeholder.text(filter_tab_placeholder_default_value) ;
    			$('.cd-tab-filter').toggleClass('is-open');

    		//check if user has clicked a filter already selected
    		} else if( filter_tab_placeholder.data('type') == selected_filter ) {
    			filter_tab_placeholder.text($(event.target).text());
    			$('.cd-tab-filter').removeClass('is-open');

    		} else {
    			//close the dropdown and change placeholder text/data-type value
    			$('.cd-tab-filter').removeClass('is-open');
    			filter_tab_placeholder.text($(event.target).text()).data('type', selected_filter);
    			filter_tab_placeholder_text = $(event.target).text();

    			//add class selected to the selected filter item
    			$('.cd-tab-filter .selected').removeClass('selected');
    			$(event.target).addClass('selected');
    		}
    	});

    	//close filter dropdown inside lateral .cd-filter
    	$('.cd-filter-block h4').on('click', function(){
    		$(this).toggleClass('closed').siblings('.cd-filter-content').slideToggle(300);
    	})

    	//fix lateral filter and gallery on scrolling
    	$(window).on('scroll', function(){
    		(!window.requestAnimationFrame) ? fixGallery() : window.requestAnimationFrame(fixGallery);
    	});

    	function fixGallery() {
    		var offsetTop = $('.cd-main-content').offset().top,
    			scrollTop = $(window).scrollTop();
    		( scrollTop >= offsetTop ) ? $('.cd-main-content').addClass('is-fixed') : $('.cd-main-content').removeClass('is-fixed');
    	}

    	/************************************
    		MitItUp filter settings
    		More details:
    		https://mixitup.kunkalabs.com/
    		or:
    		http://codepen.io/patrickkunka/
    	*************************************/

    	buttonFilter.init();
    	$('.cd-gallery ul').mixItUp({
    	    controls: {
    	    	enable: false
    	    },
    	    callbacks: {
    	    	onMixStart: function(){
    	    		$('.cd-fail-message').fadeOut(200);
    	    	},
    	      	onMixFail: function(){
    	      		$('.cd-fail-message').fadeIn(200);
    	    	}
    	    }
    	});

    	//search filtering
    	//credits http://codepen.io/edprats/pen/pzAdg
    	var inputText;
    	var $matching = $();

    	var delay = (function(){
    		var timer = 0;
    		return function(callback, ms){
    			clearTimeout (timer);
    		    timer = setTimeout(callback, ms);
    		};
    	})();

    	$(".cd-filter-content input[type='search']").keyup(function(){
    	  	// Delay function invoked to make sure user stopped typing
    	  	delay(function(){
    	    	inputText = $(".cd-filter-content input[type='search']").val().toLowerCase();
    	   		// Check to see if input field is empty
    	    	if ((inputText.length) > 0) {
    	      		$('.mix').each(function() {
    		        	var $this = $(this);

    		        	// add item to be filtered out if input text matches items inside the title
    		        	if($this.attr('class').toLowerCase().match(inputText)) {
    		          		$matching = $matching.add(this);
    		        	} else {
    		          		// removes any previously matched item
    		          		$matching = $matching.not(this);
    		        	}
    	      		});
    	      		$('.cd-gallery ul').mixItUp('filter', $matching);
    	    	} else {
    	      		// resets the filter to show all item if input is empty
    	      		$('.cd-gallery ul').mixItUp('filter', 'all');
    	    	}
    	  	}, 200 );
    	});
    });

    /*****************************************************
    	MixItUp - Define a single object literal
    	to contain all filter custom functionality
    *****************************************************/
    var buttonFilter = {
      	// Declare any variables we will need as properties of the object
      	$filters: null,
      	groups: [],
      	outputArray: [],
      	outputString: '',

      	// The "init" method will run on document ready and cache any jQuery objects we will need.
      	init: function(){
        	var self = this; // As a best practice, in each method we will asign "this" to the variable "self" so that it remains scope-agnostic. We will use it to refer to the parent "buttonFilter" object so that we can share methods and properties between all parts of the object.

        	self.$filters = $('.cd-main-content');
        	self.$container = $('.cd-gallery ul');

    	    self.$filters.find('.cd-filters').each(function(){
    	      	var $this = $(this);

    		    self.groups.push({
    		        $inputs: $this.find('.filter'),
    		        active: '',
    		        tracker: false
    		    });
    	    });

    	    self.bindHandlers();
      	},

      	// The "bindHandlers" method will listen for whenever a button is clicked.
      	bindHandlers: function(){
        	var self = this;

        	self.$filters.on('click', 'a', function(e){
    	      	self.parseFilters();
        	});
    	    self.$filters.on('change', function(){
    	      self.parseFilters();
    	    });
      	},

      	parseFilters: function(){
    	    var self = this;

    	    // loop through each filter group and grap the active filter from each one.
    	    for(var i = 0, group; group = self.groups[i]; i++){
    	    	group.active = [];
    	    	group.$inputs.each(function(){
    	    		var $this = $(this);
    	    		if($this.is('input[type="radio"]') || $this.is('input[type="checkbox"]')) {
    	    			if($this.is(':checked') ) {
    	    				group.active.push($this.attr('data-filter'));
    	    			}
    	    		} else if($this.is('select')){
    	    			group.active.push($this.val());
    	    		} else if( $this.find('.selected').length > 0 ) {
    	    			group.active.push($this.attr('data-filter'));
    	    		}
    	    	});
    	    }
    	    self.concatenate();
      	},

      	concatenate: function(){
        	var self = this;

        	self.outputString = ''; // Reset output string

    	    for(var i = 0, group; group = self.groups[i]; i++){
    	      	self.outputString += group.active;
    	    }

    	    // If the output string is empty, show all rather than none:
    	    !self.outputString.length && (self.outputString = 'all');

        	// Send the output string to MixItUp via the 'filter' method:
    		if(self.$container.mixItUp('isLoaded')){
    	    	self.$container.mixItUp('filter', self.outputString);
    		}
      	}
    };

    // Cache selectors
$(document).ready(function () {
    $(document).on("scroll", onScroll);

    //smoothscroll
    $('a[href^="#"]').on('click', function (e) {
        e.preventDefault();
        $(document).off("scroll");

        $('a').each(function () {
            $(this).removeClass('active');
        })
        $(this).addClass('active');

        var target = this.hash,
            menu = target;
        $target = $(target);
        $('html, body').stop().animate({
            'scrollTop': $target.offset().top+2
        }, 500, 'swing', function () {
            window.location.hash = target;
            $(document).on("scroll", onScroll);
        });
    });
});

function onScroll(event){
    var scrollPos = $(document).scrollTop();
    $('#menu-center a').each(function () {
        var currLink = $(this);
        var refElement = $(currLink.attr("href"));
        if (refElement.position().top <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {
            $('#menu-center ul li a').removeClass("nav_active");
            currLink.addClass("nav_active");
        }
        else{
            currLink.removeClass("nav_active");
        }
    });
}
