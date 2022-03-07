import { addItem } from "./modules/add-item";
import { categorySwiper } from "./modules/category-swiper";
import { itemsList } from "./modules/items-list";
import { openContent } from "./modules/open-content";

document.addEventListener('DOMContentLoaded', () => {
  addItem();
	categorySwiper();
	itemsList();
	openContent();
});
