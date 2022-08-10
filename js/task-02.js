const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientItem = ingredients.map(ingredient => {
  const item = document.createElement('li');
  item.classList.add('item');
  item.textContent = ingredient;
  return item;
});

const ingredientsList = document.querySelector('#ingredients');

ingredientsList.append(...ingredientItem);