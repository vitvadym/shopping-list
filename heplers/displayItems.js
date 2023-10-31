import { getItemsFromStorage } from './getItemsFromstorage.js';
import { addItemToDOM } from './addItemToDom.js';

export const displayItems = () => {
  const storage = getItemsFromStorage();

  storage.forEach((item) => {
    addItemToDOM(item)
  })

}