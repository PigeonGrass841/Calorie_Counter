// Cheng Han Hsieh, Web Development Section 86 Period 7 and 8, 11/16/2022, Calorie Counter
// Initalizes the variables which represent the total number of grams or calories in the:
// (*mProteins, mCarbohydrates, and mFats are not shown to the user and are used to calculate mCalories)
// a: Appetizer
// e: Entrée
// d: Dessert
// m: Meal
function initialize() {
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

    display("aProteins", aProteins);
    display("aCarbohydrates", aCarbohydrates);
    display("aFats", aFats);
    display("aCalories", aCalories);

    display("eProteins", eProteins);
    display("eCarbohydrates", eCarbohydrates);
    display("eFats", eFats);
    display("eCalories", eCalories);

    display("dProteins", dProteins);
    display("dCarbohydrates", dCarbohydrates);
    display("dFats", dFats);
    display("dCalories", dCalories);

    display("mCalories", mCalories);
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
function calcCalories(proteins, carbohydrates, fats) {
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

// Increases the total number of CARBOHYDRATES for the APPETIZER by 1
var aCarbohydratesPlus = document.getElementById("aCarbohydratesPlus");
aCarbohydratesPlus.onclick = function() {
    aCarbohydrates = increment(aCarbohydrates);
    mCarbohydrates = calcGrams(aCarbohydrates, eCarbohydrates, dCarbohydrates);
    aCalories = calcCalories(aProteins, aCarbohydrates, aFats);
    mCalories = calcCalories(mProteins, mCarbohydrates, mFats);
    display("aCarbohydrates", aCarbohydrates);
    display("aCalories", aCalories);
    display("mCalories", mCalories);
}

// Decreases the total number of CARBOHYDRATES for the APPETIZER by 1
var aCarbohydratesMinus = document.getElementById("aCarbohydratesMinus");
aCarbohydratesMinus.onclick = function() {
    aCarbohydrates = decrement(aCarbohydrates);
    mCarbohydrates = calcGrams(aCarbohydrates, eCarbohydrates, dCarbohydrates);
    aCalories = calcCalories(aProteins, aCarbohydrates, aFats);
    mCalories = calcCalories(mProteins, mCarbohydrates, mFats);
    display("aCarbohydrates", aCarbohydrates);
    display("aCalories", aCalories);
    display("mCalories", mCalories);
}

// Increases the total number of FATS for the APPETIZER by 1
var aFatsPlus = document.getElementById("aFatsPlus");
aFatsPlus.onclick = function() {
    aFats = increment(aFats);
    mFats = calcGrams(aFats, eFats, dFats);
    aCalories = calcCalories(aProteins, aCarbohydrates, aFats);
    mCalories = calcCalories(mProteins, mCarbohydrates, mFats);
    display("aFats", aFats);
    display("aCalories", aCalories);
    display("mCalories", mCalories);
}

// Decreases the total number of FATS for the APPETIZER by 1
var aFatsMinus = document.getElementById("aFatsMinus");
aFatsMinus.onclick = function() {
    aFats = decrement(aFats);
    mFats = calcGrams(aFats, eFats, dFats);
    aCalories = calcCalories(aProteins, aCarbohydrates, aFats);
    mCalories = calcCalories(mProteins, mCarbohydrates, mFats);
    display("aFats", aFats);
    display("aCalories", aCalories);
    display("mCalories", mCalories);
}

// Increases the total number of PROTEINS for the ENTRÉE by 1
var eProteinsPlus = document.getElementById("eProteinsPlus");
eProteinsPlus.onclick = function() {
    eProteins = increment(eProteins);
    mProteins = calcGrams(aProteins, eProteins, dProteins);
    eCalories = calcCalories(eProteins, eCarbohydrates, eFats);
    mCalories = calcCalories(mProteins, mCarbohydrates, mFats);
    display("eProteins", eProteins);
    display("eCalories", eCalories);
    display("mCalories", mCalories);
}

// Decreases the total number of PROTEINS for the ENTRÉE by 1
var eProteinsMinus = document.getElementById("eProteinsMinus");
eProteinsMinus.onclick = function() {
    eProteins = decrement(eProteins);
    mProteins = calcGrams(aProteins, eProteins, dProteins);
    eCalories = calcCalories(eProteins, eCarbohydrates, eFats);
    mCalories = calcCalories(mProteins, mCarbohydrates, mFats);
    display("eProteins", eProteins);
    display("eCalories", eCalories);
    display("mCalories", mCalories);
}

// Increases the total number of CARBOHYDRATES for the ENTRÉE by 1
var eCarbohydratesPlus = document.getElementById("eCarbohydratesPlus");
eCarbohydratesPlus.onclick = function() {
    eCarbohydrates = increment(eCarbohydrates);
    mCarbohydrates = calcGrams(aCarbohydrates, eCarbohydrates, dCarbohydrates);
    eCalories = calcCalories(eProteins, eCarbohydrates, eFats);
    mCalories = calcCalories(mProteins, mCarbohydrates, mFats);
    display("eCarbohydrates", eCarbohydrates);
    display("eCalories", eCalories);
    display("mCalories", mCalories);
}

// Decreases the total number of CARBOHYDRATES for the ENTRÉE by 1
var eCarbohydratesMinus = document.getElementById("eCarbohydratesMinus");
eCarbohydratesMinus.onclick = function() {
    eCarbohydrates = decrement(eCarbohydrates);
    mCarbohydrates = calcGrams(aCarbohydrates, eCarbohydrates, dCarbohydrates);
    eCalories = calcCalories(eProteins, eCarbohydrates, eFats);
    mCalories = calcCalories(mProteins, mCarbohydrates, mFats);
    display("eCarbohydrates", eCarbohydrates);
    display("eCalories", eCalories);
    display("mCalories", mCalories);
}

// Increases the total number of FATS for the ENTRÉE by 1
var eFatsPlus = document.getElementById("eFatsPlus");
eFatsPlus.onclick = function() {
    eFats = increment(eFats);
    mFats = calcGrams(aFats, eFats, dFats);
    eCalories = calcCalories(eProteins, eCarbohydrates, eFats);
    mCalories = calcCalories(mProteins, mCarbohydrates, mFats);
    display("eFats", eFats);
    display("eCalories", eCalories);
    display("mCalories", mCalories);
}

// Decreases the total number of FATS for the ENTRÉE by 1
var eFatsMinus = document.getElementById("eFatsMinus");
eFatsMinus.onclick = function() {
    eFats = decrement(eFats);
    mFats = calcGrams(aFats, eFats, dFats);
    eCalories = calcCalories(eProteins, eCarbohydrates, eFats);
    mCalories = calcCalories(mProteins, mCarbohydrates, mFats);
    display("eFats", eFats);
    display("eCalories", eCalories);
    display("mCalories", mCalories);
}

// Increases the total number of PROTEINS for the DESSERTS by 1
var dProteinsPlus = document.getElementById("dProteinsPlus");
dProteinsPlus.onclick = function() {
    dProteins = increment(dProteins);
    mProteins = calcGrams(aProteins, eProteins, dProteins);
    dCalories = calcCalories(dProteins, dCarbohydrates, dFats);
    mCalories = calcCalories(mProteins, mCarbohydrates, mFats);
    display("dProteins", dProteins);
    display("dCalories", dCalories);
    display("mCalories", mCalories);
}

// Decreases the total number of PROTEINS for the DESSERTS by 1
var dProteinsMinus = document.getElementById("dProteinsMinus");
dProteinsMinus.onclick = function() {
    dProteins = decrement(dProteins);
    mProteins = calcGrams(aProteins, eProteins, dProteins);
    dCalories = calcCalories(dProteins, dCarbohydrates, dFats);
    mCalories = calcCalories(mProteins, mCarbohydrates, mFats);
    display("dProteins", dProteins);
    display("dCalories", dCalories);
    display("mCalories", mCalories);
}

// Increases the total number of CARBOHYDRATES for the DESSERTS by 1
var dCarbohydratesPlus = document.getElementById("dCarbohydratesPlus");
dCarbohydratesPlus.onclick = function() {
    dCarbohydrates = increment(dCarbohydrates);
    mCarbohydrates = calcGrams(aCarbohydrates, eCarbohydrates, dCarbohydrates);
    dCalories = calcCalories(dProteins, dCarbohydrates, dFats);
    mCalories = calcCalories(mProteins, mCarbohydrates, mFats);
    display("dCarbohydrates", dCarbohydrates);
    display("dCalories", dCalories);
    display("mCalories", mCalories);
}

// Decreases the total number of CARBOHYDRATES for the DESSERTS by 1
var dCarbohydratesMinus = document.getElementById("dCarbohydratesMinus");
dCarbohydratesMinus.onclick = function() {
    dCarbohydrates = decrement(dCarbohydrates);
    mCarbohydrates = calcGrams(aCarbohydrates, eCarbohydrates, dCarbohydrates);
    dCalories = calcCalories(dProteins, dCarbohydrates, dFats);
    mCalories = calcCalories(mProteins, mCarbohydrates, mFats);
    display("dCarbohydrates", dCarbohydrates);
    display("dCalories", dCalories);
    display("mCalories", mCalories);
}

// Increases the total number of FATS for the DESSERTS by 1
var dFatsPlus = document.getElementById("dFatsPlus");
dFatsPlus.onclick = function() {
    dFats = increment(dFats);
    mFats = calcGrams(aFats, eFats, dFats);
    dCalories = calcCalories(dProteins, dCarbohydrates, dFats);
    mCalories = calcCalories(mProteins, mCarbohydrates, mFats);
    display("dFats", dFats);
    display("dCalories", dCalories);
    display("mCalories", mCalories);
}

// Decreases the total number of FATS for the DESSERTS by 1
var dFatsMinus = document.getElementById("dFatsMinus");
dFatsMinus.onclick = function() {
    dFats = decrement(dFats);
    mFats = calcGrams(aFats, eFats, dFats);
    dCalories = calcCalories(dProteins, dCarbohydrates, dFats);
    mCalories = calcCalories(mProteins, mCarbohydrates, mFats);
    display("dFats", dFats);
    display("dCalories", dCalories);
    display("mCalories", mCalories);
}
