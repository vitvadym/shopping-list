import { addItemToDOM } from './heplers/addItemToDom.js';
import { addItemsToStorage } from './heplers/addItemsToStorage.js';
import { checkUI } from './heplers/checkUI.js';
import { removeItem } from './heplers/removeItem.js';
import { removeItemFromLocalStorage } from './heplers/removeItemFromLocalStorage.js';
import { removeAllItems } from './heplers/removeAllItems.js';
import { onClickItem } from './heplers/onClickItem.js';
import { filterItems } from './heplers/filterItems.js';
import { getItemsFromStorage } from './heplers/getItemsFromstorage.js';
import { isItemExists } from './heplers/isItemExists.js';

export const itemForm = document.getElementById('item-form');
export const submitBtn = document.querySelector('.btn')
export const itemInput = document.getElementById('item-input');
export const itemList = document.getElementById('item-list');
export const filterInput = document.getElementById('filter')
export const clearAllBtn = document.getElementById('clear');
let isEditing = false;

export const onSubmit = (event) => {
  event.preventDefault();
  const newItem = itemInput.value;
  
  if (!newItem) {
    alert('Input should not be empty')
    return;
  }
 
  if (isEditing) {
    const editingItem = document.querySelector('.edit-mode');

    removeItemFromLocalStorage(editingItem.textContent)
    removeItem(editingItem);
    editingItem.classList.remove('edit-mode');

    submitBtn.innerHTML = '<i class="fa-solid fa-plus"></i> Add item';
    submitBtn.style.backgroundColor = '#333';
    isEditing = false;
  } else {
    if(isItemExists(newItem)) {
      return;
    }
  }

  addItemToDOM(newItem);
  addItemsToStorage(newItem);
  checkUI();
  itemInput.value = '';
};

  export const setItemToEdit = (elem) => {
  isEditing = true;
  
  const list = document.querySelectorAll('li');
  list.forEach((item) => item.classList.remove('edit-mode'));

  elem.classList.add('edit-mode');

  submitBtn.innerHTML = '<i class="fa-solid fa-pen"></i> Update item';
  submitBtn.style.backgroundColor = 'green'
  itemInput.value = elem.textContent;
}

  export const displayItems = () => {
  const storage = getItemsFromStorage();

  storage.forEach((item) => {
    addItemToDOM(item)
  })

  checkUI();
}


itemForm.addEventListener('submit', onSubmit);
itemList.addEventListener('click', onClickItem);
clearAllBtn.addEventListener('click', removeAllItems);
filterInput.addEventListener('input', filterItems);
document.addEventListener('DOMContentLoaded', displayItems);
