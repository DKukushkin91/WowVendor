export const createElement = (element, fragment) => element.appendChild(fragment);

export const getElement = (item, itemTemplate) => {
	const template = itemTemplate.cloneNode(true);
	const img = template.querySelector('.js-item-img');
	const mark = template.querySelector('.js-item-mark');
	const title = template.querySelector('.js-item-title');
	const raiting = template.querySelector('.js-item-raiting');
	const vote = template.querySelector('.js-item-vote');
	const description = template.querySelector('.js-item-description');
	const oldPrice = template.querySelector('.js-item-old-price');
	const price = template.querySelector('.js-item-price');
	const sale = template.querySelector('.js-item-sale');

	const STARS = 0.05;

	img.src = `/img/${item.img}`;
	mark.textContent = item.mark;
	title.textContent = item.title;
	raiting.style.width = `${item.raiting / STARS}%`;
	vote.textContent = item.vote > 0 ? item.vote.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") : item.vote;
	description.textContent = item.description;
	oldPrice.textContent = `${item.prevPrice > 0 ? `$${item.prevPrice.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}` : oldPrice.style.display = 'none'}`;
	price.textContent = `${item.price > 0 ? `$${item.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}` : item.price}`;
	sale.textContent = `${item.markSale > 0 ? `-${item.markSale}%` : sale.style.display = 'none'}`;

	mark.classList.add(`catalog__item-mark--${item.mark.replace(/\s+/g, '').trim()}`);

	return template;
};

export const appendElement = (item, itemTemplate, wrap) => {
	const fragment = document.createDocumentFragment();
	const element = getElement(item, itemTemplate);

	fragment.appendChild(element);
	createElement(wrap, fragment);
}

export const insertBeforeElement = (item, itemTemplate, wrap) => {
	const fragment = document.createDocumentFragment();
	const element = getElement(item, itemTemplate);

	fragment.appendChild(element);
	wrap.insertBefore(fragment, wrap.children[1]);
}

export const getRandomIntInclusive = (min, max) => {
  let rand = min + Math.random() * (max + 1 - min);
  return Math.floor(rand);
}
