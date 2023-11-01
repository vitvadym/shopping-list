import { itemList } from '../script.js';
import { checkUI } from './checkUI.js';
import { createButton } from './createButton.js';

export const addItemToDOM = (item) => {
    const li = document.createElement('li');

    li.appendChild(document.createTextNode(item));

    const deleteButton = createButton('remove-item btn-link text-red');
    li.appendChild(deleteButton);
    itemList.appendChild(li);
  

  checkUI();
}