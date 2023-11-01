import { checkUI } from './checkUI.js';
import { getItemsFromStorage } from './getItemsFromstorage.js';
import { isItemExists } from './isItemExists.js';

export const addItemsToStorage = (item) => {
  const products = getItemsFromStorage();
  const isItemInList = isItemExists(item)
  
  if(!isItemInList) {
    products.push(item);
    localStorage.setItem('products', JSON.stringify(products))
  } 

  checkUI()
};