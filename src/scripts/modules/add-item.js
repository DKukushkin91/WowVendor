import { items } from "../mocks/mocks";
import { appendElement, getRandomIntInclusive, insertBeforeElement } from "../utils/utils";

export const addItem = () => {
  if(document.querySelector('.js-catalog-btn')) {
		const button = document.querySelector('.js-catalog-btn');
		const itemTemplate = document.querySelector('.js-template-item')
			.content
			.querySelector('.catalog__item');
		const list = document.querySelector('.js-item-list');

		const addItemHandler = () => {
			insertBeforeElement(items[getRandomIntInclusive(0, items.length)], itemTemplate, list);
		}

		button.addEventListener('click', addItemHandler);
	}
}
