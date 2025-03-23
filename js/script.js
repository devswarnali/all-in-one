// slider bottom fixed

$('.js-exciting-exp-slider').slick({
    dots: false,
    arrows: true,
    // autoplay: true,
    // autoplaySpeed: 4000,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
});



$('.latest-news-slide').slick({
    dots: true,
    arrows: false,
    // autoplay: true,
    autoplaySpeed: 4000,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          arrows: false,
        }
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          arrows: false,
        }
      },
  
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
        }
      },
    ]
  });


  // logo auto splide
if ($(".slide").length) {
	new Splide('.slide', {
		type: 'loop',
		drag: 'free',
		focus: 'center',
		//   perPage: 7,
		pagination: false,
		arrows: false,
		direction: 'ltr', // rtl
		autoWidth: true,
		autoScroll: {
			speed: 1.2,

		},
		//   breakpoints: {
		//     //1200: { arrows: false },
		//     991: { perPage: 5 },
		//     479: { destroy: true, perPage: 2 },
		//   },
	}).mount(window.splide.Extensions);
}


// writeing effect

const words = ["Fast, Fresh, Instant", "Delivered to your mouth", "Delivery first, Satisfaction all time",];
let i = 0;
let timer;

function typingEffect() {
	let word = words[i].split("");
	var loopTyping = function () {
		if (word.length > 0) {
			document.getElementById('word-braking').innerHTML += word.shift();
		} else {
			deletingEffect();
			return false;
		};
		timer = setTimeout(loopTyping, 150);
	};
	loopTyping();
};

function deletingEffect() {
	let word = words[i].split("");
	var loopDeleting = function () {
		if (word.length > 0) {
			word.pop();
			document.getElementById('word-braking').innerHTML = word.join("");
		} else {
			if (words.length > (i + 1)) {
				i++;
			} else {
				i = 0;
			};
			typingEffect();
			return false;
		};
		timer = setTimeout(loopDeleting, 100);
	};
	loopDeleting();
};

if ($(".writeing-effect").length) {
	typingEffect();
}




// go to the top

var btn = $('#button');

$(window).scroll(function() {
  if ($(window).scrollTop() > 300) {
    btn.addClass('show');
  } else {
    btn.removeClass('show');
  }
});

btn.on('click', function(e) {
  e.preventDefault();
  $('html, body').animate({scrollTop:0}, '300');
});

$('.js-exciting-exp-slider').slick({
  slidesToShow: 4,
  slidesToScroll: 1,
})


// counter

var counted = 0;
$(window).scroll(function() {

  var oTop = $('#counter').offset().top - window.innerHeight;
  if (counted == 0 && $(window).scrollTop() > oTop) {
    $('.count').each(function() {
      var $this = $(this),
        countTo = $this.attr('data-count');
      $({
        countNum: $this.text()
      }).animate({
          countNum: countTo
        },

        {

          duration: 2000,
          easing: 'swing',
          step: function() {
            $this.text(Math.floor(this.countNum));
          },
          complete: function() {
            $this.text(this.countNum);
            //alert('finished');
          }

        });
    });
    counted = 1;
  }

});


// Sticky Nav
    
$(window).scroll(function() {     
  var scroll = $(window).scrollTop();     
  if (scroll > 100) { 
      $(".page-header").addClass("fixed"); 
  } 
  else {
  $(".page-header").removeClass("fixed"); 
  }
})

// add class

$('.navbar-toggler').on('click', function(){
$('body').toggleClass('o-hidden');
})