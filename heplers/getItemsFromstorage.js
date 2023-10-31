export const getItemsFromStorage = () => {
  let products;

  if (!localStorage.getItem('products')) {
    products = [];
  } else {
    products = JSON.parse(localStorage.getItem('products'));
  }

  return products;
}