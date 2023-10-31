import { checkUI } from './checkUI.js'; 
import { removeItemFromLocalStorage } from './removeItemFromLocalStorage.js';

export const removeItem = (elem) => {
  elem.remove()

  removeItemFromLocalStorage(elem.textContent)
  checkUI()
};