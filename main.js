// variables
var cookButton = document.querySelector('.cook-button');
var rightBox = document.querySelector('.right-box')
var sideSelection = document.querySelector('#side');
var mainDishSelection = document.querySelector('#mainDish');
var dessertSelection = document.querySelector('#dessert');
var selectionDisplay = document.querySelector('.selection-display');
var selectionName = document.querySelector('.selection-name');
var cookpot = document.querySelector('.cookpot');
var addARecipeButton = document.querySelector('.add-recipe');
var addNewRecipe = document.querySelector('.addNew');
var typeInput = document.querySelector('#type');
var mealNameInput = document.querySelector('#name');
var addNewButton = document.querySelector('#add-new');

// eventlisteners
cookButton.addEventListener('click', displaySelection);
addARecipeButton.addEventListener('click', addRecipe);
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
