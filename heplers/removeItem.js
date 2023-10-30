import { checkUI } from './checkUI.js'; 

export const removeItem = (event) => {
  const isContainClassRemove = event.target.parentElement.classList.contains('remove-item');

  if (isContainClassRemove) {
    const li = event.target.parentElement.parentElement;
    li.remove();

    checkUI();
  }
}