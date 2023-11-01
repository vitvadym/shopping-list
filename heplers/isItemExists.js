import { getItemsFromStorage } from './getItemsFromstorage.js'

export const isItemExists = (item) => {
  const products = getItemsFromStorage();
  return products.includes(item);
};
