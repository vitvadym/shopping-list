export const filterItems = (event) => {
  const query = event.target.value.toLowerCase();
  const lists = document.querySelectorAll('li')

  lists.forEach((item) => {
    const inputText = item.textContent.toLowerCase();
    console.log(item);

    if (inputText.includes(query)) {
      item.style.display = 'flex'
    } else {
      item.style.display = 'none'
    }
  });
}