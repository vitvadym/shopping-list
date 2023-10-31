import { getItemsFromStorage } from './getItemsFromstorage.js';


export const removeItemFromLocalStorage = (item) => {
  let storage = getItemsFromStorage();

  const filteredItems = storage.filter((i) => i !== item);
  localStorage.setItem('products', JSON.stringify(filteredItems))
}
