function cakes(recipe, available) {
  var ingredientsNeeded = Object.keys(recipe);
  var ingredientsAvailable = Object.keys(available);
  var ingredientsNeededCount = ingredientsNeeded.length;
  var ingredientsValues = Object.values(recipe);
  var availableValues = Object.values(available);
  var counter = 0;
  var currentIngredient;
  var currentIngredientAvailable;
  var ingredientAvailablePosition;
  var recipeIngredientAmount;
  var amountOfCakes = 0;
  var cakesWorth;

  while ( counter < ingredientsNeededCount ) {
    currentIngredient = ingredientsNeeded[counter];
    if(ingredientsAvailable.indexOf(currentIngredient) !== -1) {
      ingredientAvailablePosition = ingredientsAvailable.indexOf(currentIngredient);
      currentIngredientAvailable = availableValues[ingredientAvailablePosition];
      recipeIngredientAmount = ingredientsValues[counter];
      cakesWorth = Math.floor(currentIngredientAvailable / recipeIngredientAmount);
      if( cakesWorth < amountOfCakes || counter === 0 ) {
        amountOfCakes = cakesWorth;
      } 
    }
    counter++;
  }
  return amountOfCakes;
}

var recipe, available;
recipe = {flour: 500, sugar: 200, eggs: 1};
available = {flour: 1200, sugar: 1200, eggs: 5, milk: 200};

cakes(recipe, available);

function cakes(recipe, available) {
  return Object.keys(recipe).reduce(function(val, ingredient) {
    return Math.min(Math.floor(available[ingredient] / recipe[ingredient] || 0), val)
  }, Infinity)  
}