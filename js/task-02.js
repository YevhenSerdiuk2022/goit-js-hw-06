const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const ingredientContainer = document.querySelector('#ingredients');


const makeLiIngredients = ingredient => {

const ingredientName = document.createElement('li');
ingredientName.textContent = ingredient;
  ingredientName.classList.add('ingredient__item');
  return ingredientName;

}

const elements = ingredients.map(makeLiIngredients);

ingredientContainer.append(...elements);