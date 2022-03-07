import { items } from "../mocks/mocks";
import { appendElement } from "../utils/utils";

export const itemsList = () => {
	if(document.querySelector('.js-item-list')) {
		const itemTemplate = document.querySelector('.js-template-item')
			.content
			.querySelector('.catalog__item');
		const list = document.querySelector('.js-item-list');

		items.map(el => appendElement(el, itemTemplate, list));
	}
}
