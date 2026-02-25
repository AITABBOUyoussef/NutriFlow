// main.js - Sallah l-ligne 2 o hiyyed l-ligne l-akhir
import { getAllRecipes } from "./api/recipeProvider.js";
import { getBadgeColor, calculateTotalCalories } from './services/calorieService.js'; // Smiya s-shiha hiya getBadgeColor
import { showLoader, hideLoader }  from "./ui/loader.js";
import { renderRecipes } from './ui/render.js';

async function init() {
    try {
        showLoader();
        const recipes = await getAllRecipes();
        renderRecipes(recipes); 
    } catch (error) {
        console.error("probleme in init: ", error);
    } finally {
        hideLoader();
    }
    // Hiyyed renderRecipes(recipes) mn hna hitrecipes machi "defined" hna
}   
init();