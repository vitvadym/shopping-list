import { getItemsFromStorage } from './getItemsFromstorage.js';

export const addItemsToStorage = (item) => {
  const products = getItemsFromStorage()

  products.push(item);
  localStorage.setItem('products', JSON.stringify(products))
};