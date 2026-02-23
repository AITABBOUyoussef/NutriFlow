import { getAllRecipes } from "./api/recipeProvider.js";
import { getColor, calculateTotalCalories } from './services/calorieService.js';
import { showLoader, hideLoader }  from "./ui/loader.js";
async function init() {
    //  console.log("NutriFlow lancée ");
try {
    showLoader();

    const recipes = await getAllRecipes();
    // console.table(recipes)
    renderRecipes(recipes)
}catch (error){
    console.error("probleme in init: ", error);
}finally{
    hideLoader();
}

}   
init();


// console.log("Couleur pour 350 kcal :", getColor(350)); 
// console.log("Couleur pour 900 kcal :", getColor(900)); 

// const mesFavoris = [{ caloriesPerServing: 200 }, { caloriesPerServing: 500 }];
// console.log("Total calories :", calculateTotalCalories(mesFavoris));