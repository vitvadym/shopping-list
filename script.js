import { createButton } from './heplers/createButton.js';

const itemForm = document.getElementById('item-form');
const itemInput = document.getElementById('item-input');
const itemList = document.getElementById('item-list');

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
  itemInput.value = '';
}

itemForm.addEventListener('submit', addItem)