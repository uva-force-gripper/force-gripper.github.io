window.HELP_IMPROVE_VIDEOJS = false;

var INTERP_BASE = "./static/interpolation/stacked";
var NUM_INTERP_FRAMES = 240;

var interp_images = [];
function preloadInterpolationImages() {
  for (var i = 0; i < NUM_INTERP_FRAMES; i++) {
    var path = INTERP_BASE + '/' + String(i).padStart(6, '0') + '.jpg';
    interp_images[i] = new Image();
    interp_images[i].src = path;
  }
}

function setInterpolationImage(i) {
  var image = interp_images[i];
  image.ondragstart = function() { return false; };
  image.oncontextmenu = function() { return false; };
  $('#interpolation-image-wrapper').empty().append(image);
}


$(document).ready(function() {
    // Check for click events on the navbar burger icon
    $(".navbar-burger").click(function() {
      // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
      $(".navbar-burger").toggleClass("is-active");
      $(".navbar-menu").toggleClass("is-active");

    });

    var options = {
			slidesToScroll: 1,
			slidesToShow: 3,
			loop: true,
			infinite: true,
			autoplay: false,
			autoplaySpeed: 3000,
    }

    var videoOptions = {
			slidesToScroll: 1,
			slidesToShow: 3,
			loop: true,
			infinite: true,
			autoplay: true,
			autoplaySpeed: 4000,
    }

    var singleOptions = {
        slidesToScroll: 1,
        slidesToShow: 1,
        loop: true,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 3000,
    }

		// Initialize all div with carousel class except specific ones
    var carousels = bulmaCarousel.attach('.carousel:not(#manipulation-carousel):not(#hammer-carousel):not(#knife-carousel):not(#mugtree-carousel):not(#pour-carousel):not(#toaster-carousel)', options);
    
    // Initialize manipulation carousel with multiple show options
    var videoCarousel;
    try {
        videoCarousel = bulmaCarousel.attach('#manipulation-carousel', videoOptions);
    } catch(e) {
        console.log('Video carousel initialization failed:', e);
        // Fallback - try with simpler options
        var simpleVideoOptions = {
            slidesToScroll: 1,
            slidesToShow: 1,
            loop: false,
            infinite: false,
            autoplay: false,
        };
        try {
            videoCarousel = bulmaCarousel.attach('#manipulation-carousel', simpleVideoOptions);
        } catch(e2) {
            console.log('Simple video carousel initialization also failed:', e2);
        }
    }
    
    // Initialize individual task carousels (one GIF at a time)
    var taskCarousels = [];
    var taskIds = ['#hammer-carousel', '#knife-carousel', '#mugtree-carousel', '#pour-carousel', '#toaster-carousel'];
    
    taskIds.forEach(function(taskId) {
        try {
            var taskCarousel = bulmaCarousel.attach(taskId, singleOptions);
            if(taskCarousel && taskCarousel.length > 0) {
                taskCarousels.push(taskCarousel[0]);
            }
        } catch(e) {
            console.log('Task carousel initialization failed for ' + taskId + ':', e);
        }
    });

    // Loop on each carousel initialized
    for(var i = 0; i < carousels.length; i++) {
    	// Add listener to  event
    	carousels[i].on('before:show', state => {
    		console.log(state);
    	});
    }
    
    // Handle video carousel events
    if(videoCarousel && videoCarousel.length > 0) {
        for(var j = 0; j < videoCarousel.length; j++) {
            videoCarousel[j].on('before:show', state => {
                console.log('Video carousel:', state);
            });
        }
    }

    // Access to bulmaCarousel instance of an element
    var element = document.querySelector('#my-element');
    if (element && element.bulmaCarousel) {
    	// bulmaCarousel instance is available as element.bulmaCarousel
    	element.bulmaCarousel.on('before-show', function(state) {
    		console.log(state);
    	});
    }

    /*var player = document.getElementById('interpolation-video');
    player.addEventListener('loadedmetadata', function() {
      $('#interpolation-slider').on('input', function(event) {
        console.log(this.value, player.duration);
        player.currentTime = player.duration / 100 * this.value;
      })
    }, false);*/
    preloadInterpolationImages();

    $('#interpolation-slider').on('input', function(event) {
      setInterpolationImage(this.value);
    });
    setInterpolationImage(0);
    $('#interpolation-slider').prop('max', NUM_INTERP_FRAMES - 1);

    bulmaSlider.attach();

})
