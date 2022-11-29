// Initalizes the variables which represent the total number of grams or calories in the:
// (*mProteins, mCarbohydrates, and mFats are not shown to the user and are used to calculate mCalories)
// a: Appetizer
// e: Entrée
// d: Dessert
// m: Meal
initialize {
    aProteins = 0;
    eProteins = 0;
    dProteins = 0;
    mProteins = 0;
    
    aCarbohydrates = 0;
    eCarbohydrates = 0;
    dCarbohydrates = 0;
    mCarbohydrates = 0;
    
    aFats = 0;
    eFats = 0;
    dFats = 0;
    mFats = 0;
    
    aCalories = 0;
    eCalories = 0;
    dCalories = 0;
    mCalories = 0;
}

// Increases the total number of GRAMS for the food by 1
function increment(grams) {
    grams++;
    return grams;
}

// Decreases the total number of GRAMS for the food by 1
function decrement(grams) {
    if (grams > 0) {
        grams--;
    }
    return grams;
}

// Calculates the total number of GRAMS for the food
function calcGrams(appetizer, entrée, dessert) {
    var grams = appetizer + entrée + dessert;
    return grams;
}

// Calculates the total number of CALORIES for the food
function calcCalories(calories, proteins, carbohydrates, fats) {
    var calories = (proteins * 4) + (carbohydrates * 4) + (fats * 9);
    return calories;
}

// Displays the total number of GRAMS or CALORIES for the food
function display(id, number) {
    var placeholder = document.getElementById(id);
    placeholder.innerHTML = number;
}

// Increases the total number of PROTEINS for the APPETIZER by 1
var aProteinsPlus = document.getElementById("aProteinsPlus");
aProteinsPlus.onclick = function() {
    aProteins = increment(aProteins);
    mProteins = calcGrams(aProteins, eProteins, dProteins);
    aCalories = calcCalories(aProteins, aCarbohydrates, aFats);
    mCalories = calcCalories(mProteins, mCarbohydrates, mFats);
    display("aProteins", aProteins);
    display("aCalories", aCalories);
    display("mCalories", mCalories);
}

// Decreases the total number of PROTEINS for the APPETIZER by 1
var aProteinsMinus = document.getElementById("aProteinsMinus");
aProteinsMinus.onclick = function() {
    aProteins = decrement(aProteins);
    mProteins = calcGrams(aProteins, eProteins, dProteins);
    aCalories = calcCalories(aProteins, aCarbohydrates, aFats);
    mCalories = calcCalories(mProteins, mCarbohydrates, mFats);
    display("aProteins", aProteins);
    display("aCalories", aCalories);
    display("mCalories", mCalories);
}
