import { checkUI } from './checkUI.js';

export const removeAllItems = () => {
  const li = document.querySelectorAll('li');
  li.forEach((item) => item.remove());

  checkUI();
}