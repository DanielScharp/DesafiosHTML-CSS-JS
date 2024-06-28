var swiper = new Swiper( '.swiper-container.two', {
		pagination: '.swiper-pagination',
		paginationClickable: true,
		effect: 'coverflow',
		loop: true,
		centeredSlides: true,
		slidesPerView: 'auto',
		coverflow: {
			rotate: 0,
			stretch: 100,
			depth: 15,
			modifier: 10,
			slideShadows : true,
		}
} );