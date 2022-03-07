export const categorySwiper = () => {
	if(document.querySelector('.js-swiper-category')) {
		const swiperWrap = document.querySelector('.js-swiper-category');

		const swiper = new Swiper(swiperWrap, {
			init: false,
			spaceBetween: 8,
			slidesPerView: 'auto',
			watchOverflow: true,
		})

		swiper.init()
	}
}
