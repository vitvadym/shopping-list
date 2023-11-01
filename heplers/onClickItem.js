import { checkUI } from './checkUI.js';
import { removeItem } from './removeItem.js';
import { setItemToEdit } from '../script.js';

export const onClickItem = (event) => {
  const elem = event.target.parentElement.parentElement;
  const isHasClassRemove = event.target.parentElement.classList.contains('remove-item')

  if (isHasClassRemove) {
    removeItem(elem);
  } else {
    setItemToEdit(event.target)
  }

  checkUI();
};