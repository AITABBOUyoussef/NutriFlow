import { getAllRecipes } from "./api/recipeProvider.js";
import { getBadgeColor, calculateTotalCalories } from './services/calorieService.js'; // Sallahna s-smya hna
import { showLoader, hideLoader }  from "./ui/loader.js";
import { renderRecipes } from './ui/render.js';

async function init() {
    try {
        showLoader();
        const recipes = await getAllRecipes();
        renderRecipes(recipes); // L-affichage k-i-tra hna
    } catch (error) {
        console.error("probleme in init: ", error);
    } finally {
        hideLoader();
    }
    // Hiyyedna renderRecipes(recipes) mn hna hit error
}   

init();