import {
  clearAllBtn,
  filterInput,
  itemForm,
  itemList,
} from '../script.js';

import { displayItems } from './displayItems.js';
import { filterItems } from './filterItems.js';
import { removeAllItems } from './removeAllItems.js';
import { checkUI } from './checkUI.js';
import { onClickItem } from './onClickItem.js';
import { onSubmit } from './onSubmit.js';

export const initApp = () => {
itemForm.addEventListener('submit', onSubmit);
itemList.addEventListener('click', onClickItem);
clearAllBtn.addEventListener('click', removeAllItems);
filterInput.addEventListener('input', filterItems);
document.addEventListener('DOMContentLoaded', displayItems);

checkUI();
}