import { itemInput, submitBtn } from '../script.js';
import { addItemToDOM } from './addItemToDom.js';
import { addItemsToStorage } from './addItemsToStorage.js';
import { checkUI } from './checkUI.js';
import { removeItem } from './removeItem.js';
import { removeItemFromLocalStorage } from './removeItemFromLocalStorage.js';

export const onSubmit = (event) => {
  event.preventDefault();
  const isEditing = JSON.parse(localStorage.getItem('isEditing'))

  const newItem = itemInput.value;

  if (!newItem) {
    alert('Input should not be empty')
    return;
  }

  if (isEditing) {
    const editingItem = document.querySelector('.edit-mode');
    console.log(editingItem)

    removeItemFromLocalStorage(editingItem.textContent)
    removeItem(editingItem);
    editingItem.classList.remove('edit-mode');

    localStorage.setItem('isEditing', JSON.stringify(false))

    submitBtn.innerHTML = '<i class="fa-solid fa-plus"></i> Add item';
    submitBtn.style.backgroundColor = '#333';
  }

  addItemToDOM(newItem);
  addItemsToStorage(newItem);
  checkUI();
  itemInput.value = '';
};