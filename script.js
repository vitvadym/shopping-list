import { createButton } from './heplers/createButton.js';
import { removeItem } from './heplers/removeItem.js';
import { removeAllItems } from './heplers/removeAllItems.js';
import { checkUI } from './heplers/checkUI.js';
import { filterItems } from './heplers/filterItems.js';

const itemForm = document.getElementById('item-form');
const itemInput = document.getElementById('item-input');
const itemList = document.getElementById('item-list');
export const filterInput = document.getElementById('filter')
export const clearAllBtn = document.getElementById('clear');
// const lists = document.querySelectorAll('li')

const addItem = (event) => {
  event.preventDefault();

  const newItem = itemInput.value;

  if (!newItem) {
    alert('Input should not be empty')
    return;
  }

  const li = document.createElement('li');
  li.appendChild(document.createTextNode(newItem));

  const deleteButton = createButton('remove-item btn-link text-red');
  li.appendChild(deleteButton);
  itemList.appendChild(li);

  checkUI();
  itemInput.value = '';
};

itemForm.addEventListener('submit', addItem);
itemList.addEventListener('click', removeItem);
clearAllBtn.addEventListener('click', removeAllItems);
filterInput.addEventListener('input' , filterItems);

checkUI();