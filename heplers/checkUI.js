import { filterInput, clearAllBtn } from '../script.js';

export const checkUI = () => {
  const lists = document.querySelectorAll('li')

  if (!lists.length) {
    filterInput.classList.add('hide');
    clearAllBtn.classList.add('hide')
  } else {
    filterInput.classList.remove('hide');
    clearAllBtn.classList.remove('hide')
  }
}