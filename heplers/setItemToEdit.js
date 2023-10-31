import { itemInput, submitBtn } from '../script.js';

export const setItemToEdit = (elem) => {
  localStorage.setItem('isEditing', JSON.stringify(true))
  
  const list = document.querySelectorAll('li');
  list.forEach((item) => item.classList.remove('edit-mode'));

  elem.classList.add('edit-mode');

  submitBtn.innerHTML = '<i class="fa-solid fa-pen"></i> Update item';
  submitBtn.style.backgroundColor = 'green'
  itemInput.value = elem.textContent;
}
