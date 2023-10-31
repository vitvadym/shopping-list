import { removeItem } from './heplers/removeItem.js';
import { removeAllItems } from './heplers/removeAllItems.js';
import { checkUI } from './heplers/checkUI.js';
import { filterItems } from './heplers/filterItems.js';
import { addItemToDOM } from './heplers/addItemToDom.js';
import { addItemsToStorage } from './heplers/addItemsToStorage.js';
import { displayItems } from './heplers/displayItems.js';

const itemForm = document.getElementById('item-form');
const itemInput = document.getElementById('item-input');
export const itemList = document.getElementById('item-list');
export const filterInput = document.getElementById('filter')
export const clearAllBtn = document.getElementById('clear');

const addItem = (event) => {
  event.preventDefault();

  const newItem = itemInput.value;

  if (!newItem) {
    alert('Input should not be empty')
    return;
  }

  addItemToDOM(newItem);
  addItemsToStorage(newItem);
  checkUI();
  itemInput.value = '';
};


itemForm.addEventListener('submit', addItem);
itemList.addEventListener('click', removeItem);
clearAllBtn.addEventListener('click', removeAllItems);
filterInput.addEventListener('input', filterItems);
document.addEventListener('DOMContentLoaded', displayItems)

checkUI();
