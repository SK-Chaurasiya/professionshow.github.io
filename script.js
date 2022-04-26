// ===========================================================
//                sticky nav bar
// ===========================================================

$(document).ready(function () {
	$(window).scroll(function () {
		// sticky navbar on scroll script
		if (this.scrollY > 100) {
			$('.navbar').addClass('sticky');
		} else {
			$('.navbar').removeClass('sticky');
		}

		// scroll-up button show/hide script
		if (this.scrollY > 500) {
			$('.scroll-up-btn').addClass('show');
		} else {
			$('.scroll-up-btn').removeClass('show');
		}
	});

	// ===================================
	//          slide-up script
	// ===================================

	$('.scroll-up-btn').click(function () {
		$('html').animate({
			scrollTop: 0
		});
		// removing smooth scroll on slide-up button click
		$('html').css('scrollBehavior', 'auto');
	});

	$('.navbar .menu li a').click(function () {
		// applying again smooth scroll on menu items click
		$('html').css('scrollBehavior', 'smooth');
	});

	// =========================================
	//         toggle menu/navbar script
	// =========================================

	$('.menu-btn').click(function () {
		$('.navbar .menu').toggleClass('active');
		$('.menu-btn i').toggleClass('active');
	});

	// ============================================
	//        typing text animation script
	// ============================================

	var typed = new Typed('.typing', {
		strings: ['YouTuber', 'Web Developer', 'Fashion Design', 'Makeup Artist', 'Blogger', "Fashion Modele", 'UI design'],
		typeSpeed: 150,
		backSpeed: 200,
		loop: true
	});

	var typed = new Typed('.typing-2', {
		strings: ['YouTuber', 'Web Developer', 'Fashion Design', 'Makeup Artist', 'Blogger', "Fashion Modele", 'UI design'],
		typeSpeed: 150,
		backSpeed: 200,
		loop: true
	});

	// =============================================
	//             owl carousel script
	// =============================================

	$('.carousel').owlCarousel({
		margin: 20,
		loop: true,
		autoplay: true,
		autoplayTimeOut: 2000,
		autoplayHoverPause: true,
		responsive: {
			0: {
				items: 1,
				nav: false
			},
			600: {
				items: 2,
				nav: false
			},
			1000: {
				items: 3,
				nav: false
			}
		}
	});
});

// =============================================== //
// 					Read More content              //
// =============================================== //
const readMoreBtn = document.querySelector('.readMoreBtn');
const text = document.querySelector('.toggle-text');

readMoreBtn.addEventListener('click', (e) => {
	text.classList.toggle('show-more');
	if (readMoreBtn.innerText === 'Read less') {
		readMoreBtn.innerText = 'Read More';
	} else {
		readMoreBtn.innerText = 'Read less';
	}
});