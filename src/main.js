import { getAllRecipes } from "./api/recipeProvider.js";
async function init(params) {
    // console.log("NutriFlow lancée !");

    const recipes = await getAllRecipes();
    console.table(recipes)
    
}   
init();

import { getBadgeColor, calculateTotalCalories } from './services/calorieService.js';


console.log("Couleur pour 350 kcal :", getBadgeColor(350)); // Ghadi t-rj3: badge-green
console.log("Couleur pour 900 kcal :", getBadgeColor(900)); // Ghadi t-rj3: badge-red

const mesFavoris = [{ caloriesPerServing: 200 }, { caloriesPerServing: 500 }];
console.log("Total calories :", calculateTotalCalories(mesFavoris)); // Ghadi t-rj3: 700