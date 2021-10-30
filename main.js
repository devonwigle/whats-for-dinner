// variables
var cookButton = document.querySelector('.cook-button');

var sideSelection = document.querySelector('#side');
var mainDishSelection = document.querySelector('#mainDish');
var dessertSelection = document.querySelector('#entireMeal');

// eventlisteners
cookButton.addEventListener('click', chooseRecipe);
// event handlers and functions

function chooseRecipe() {
  if (sideSelection.checked) {
    return getRandomIndex(sides)
  } else if (mainDishSelection.checked) {
    return getRandomIndex(mains)
  } else if (dessertSelection.checked) {
    return getRandomIndex(desserts)
  }
};

function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
};
//arrays
var sides = [
  'Miso Glazed Carrots'
  'Coleslaw'
  'Garden Salad'
  'Crispy Potatoes'
  'Sweet Potato Tots'
  'Coconut Rice'
  'Caeser Salad'
  'Shrimp Summer Rolls'
  'Garlic Butter Mushrooms'
  'Hush Puppies'
];

var mains = [
  'paghetti and Meatballs'
  'Pineapple Chicken'
  'Shakshuka'
  'Thai Yellow Curry'
  'Bibimbap'
  'Chicken Parmesan'
  'Butternut Squash Soup'
  'BBQ Chicken Burgers'
  'Ramen'
  'Empanadas'
  'Chicken Fried Rice'
  'Sheet Pan Fajitas'
  'Margarita Pizza'
];

var desserts = [
  'Apple Pie'
  'Lemon Meringue Pie'
  'Black Forest Cake'
  'Banana Bread'
  'Peach Cobbler'
  'Cheesecake'
  'Funfetti Cake'
  'Baklava'
  'Flan'
  'Macarons'
  'Macaroons'
  'Chocolate Cupcakes'
  'Pavlova'
  'Pumpkin Pie'
  'Key Lime Pie'
  'Tart Tatin'
  'Croissants'
  'Eclairs'
];
