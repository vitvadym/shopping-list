import { createButton } from './heplers/createButton.js';

const itemForm = document.getElementById('item-form');
const itemInput = document.getElementById('item-input');
const itemList = document.getElementById('item-list');
const clearAllBtn = document.getElementById('clear');

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

const removeItem = (event) => {
  console.log(event.target.parentElement);
  const isContainClassRemove = event.target.parentElement.classList.contains('remove-item');

  if (isContainClassRemove) {
    const li = event.target.parentElement.parentElement;
    li.remove();
  }
}

const removeAllItems = () => {
  const li = document.querySelectorAll('li');
  li.forEach((item) => item.remove());
}

itemForm.addEventListener('submit', addItem);
itemList.addEventListener('click', removeItem);
clearAllBtn.addEventListener('click', removeAllItems)