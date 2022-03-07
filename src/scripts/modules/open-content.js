export const openContent = () => {
	if(document.querySelector('.js-faq-btn')) {
		const buttons = document.querySelectorAll('.js-faq-btn');

		const openContentHandler = (evt) => {
			const content = evt.currentTarget.parentElement.parentElement.querySelector('.js-faq-content');

			content.classList.toggle('faq__content--active');

			if(content.classList.contains('faq__content--active')) {
				evt.currentTarget.querySelector('use').setAttribute('href', '/img/sprite.svg#line-circle');
			} else {
				evt.currentTarget.querySelector('use').setAttribute('href', '/img/sprite.svg#cross-circle');
			}
		}

		buttons.forEach(el => el.addEventListener('click', openContentHandler))
	}
}
