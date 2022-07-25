const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const refs = {
    ingredientsList: document.getElementById('ingredients')
}

for (const ingredient of ingredients) {
  const newElement = document.createElement("li");
  newElement.textContent = `${ingredient}`;
  newElement.classList.add('item');
  refs.ingredientsList.appendChild(newElement);
}

