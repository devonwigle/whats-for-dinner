// variables
var rightBox = document.querySelector('.right-box')
var cookpot = document.querySelector('.cookpot');
//Selections radio buttons
var sideSelection = document.querySelector('#side');
var mainDishSelection = document.querySelector('#mainDish');
var dessertSelection = document.querySelector('#dessert');
//sections
var selectionDisplay = document.querySelector('.selection-display');
var selectionName = document.querySelector('.selection-name');
var addNewRecipe = document.querySelector('.addNewRecipe');
var recipeForm = document.querySelector('.recipe-form')
// add new recipe inputs
var typeInput = document.querySelector('#type');
var mealNameInput = document.querySelector('#name');
// buttons
var cookButton = document.querySelector('.cook-button');
var addARecipeButton = document.querySelector('.add-recipe');
var addNewButton = document.querySelector('#add-new');

// eventlisteners
cookButton.addEventListener('click', displaySelection);
addARecipeButton.addEventListener('click', addRecipe);
addNewButton.addEventListener('click', pushRecipe)
// event handlers and functions

function chooseRecipe() {
  if (sideSelection.checked) {
    return sides[getRandomIndex(sides)]
  } else if (mainDishSelection.checked) {
    return mains[getRandomIndex(mains)]
  } else if (dessertSelection.checked) {
    return desserts[getRandomIndex(desserts)]
  }
};

function displaySelection() {
  event.preventDefault();
  selectionName.innerText = '';
  selectionName.innerText += `${chooseRecipe()}`
  show(selectionDisplay);
  hide(cookpot);
};

function addRecipe() {
  show(addNewRecipe)
}

function pushRecipe() {
  if (typeInput.value == side || sides) {
    sides.push(mealNameInput.value)
  } else if (typeInput.value == main || mains) {
    mains.push(mealNameInput.value)
  } else if (typeInput.value == dessert || desserts) {
    desserts.push(mealNameInput.value)
  }
}

function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
};

function show(element) {
  element.classList.remove('hidden')
};

function hide(element) {
  element.classList.add('hidden')
};
//arrays
var sides = [
  'Miso Glazed Carrots',
  'Coleslaw',
  'Garden Salad',
  'Crispy Potatoes',
  'Sweet Potato Tots',
  'Coconut Rice',
  'Caeser Salad',
  'Shrimp Summer Rolls',
  'Garlic Butter Mushrooms',
  'Hush Puppies',
];

var mains = [
  'paghetti and Meatballs',
  'Pineapple Chicken',
  'Shakshuka',
  'Thai Yellow Curry',
  'Bibimbap',
  'Chicken Parmesan',
  'Butternut Squash Soup',
  'BBQ Chicken Burgers',
  'Ramen',
  'Empanadas',
  'Chicken Fried Rice',
  'Sheet Pan Fajitas',
  'Margarita Pizza',
];

var desserts = [
  'Apple Pie',
  'Lemon Meringue Pie',
  'Black Forest Cake',
  'Banana Bread',
  'Peach Cobbler',
  'Cheesecake',
  'Funfetti Cake',
  'Baklava',
  'Flan',
  'Macarons',
  'Macaroons',
  'Chocolate Cupcakes',
  'Pavlova',
  'Pumpkin Pie',
  'Key Lime Pie',
  'Tart Tatin',
  'Croissants',
  'Eclairs',
];
