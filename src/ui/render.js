import { getBadgeColor } from '../services/calorieService.js';
 

export function renderRecipes(recipes) {
    const grid = document.getElementById('recipe-grid');
    grid.innerHTML = "";

    recipes.forEach(recipe => {
        const badgeClass = getBadgeColor(recipe.caloriesPerServing);

        const cardHTML = `
            <article class="recipe-card" data-id="${recipe.id}">
                <div class="card-image-container">
                    <img src="${recipe.image}" alt="${recipe.name}">
                    <button class="btn-favorite-icon"><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 48 48"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M15 8C8.925 8 4 12.925 4 19c0 11 13 21 20 23.326C31 40 44 30 44 19c0-6.075-4.925-11-11-11c-3.72 0-7.01 1.847-9 4.674A10.99 10.99 0 0 0 15 8"/></svg></button>
                    <span class="calorie-tag ${badgeClass}">⚡ ${recipe.caloriesPerServing} kcal</span>
                </div>
                <div class="card-content">
                    <h3>${recipe.name}</h3>
                    <div class="card-footer">
                        <span class="rating">⭐ ${recipe.rating} <small>(${recipe.reviewCount || 0})</small></span>
                    </div>
                     <button class="see" data-id="see">See More</button>
                </div>
            </article>
        `;
    //      const detial = grid.querySelector('.delete-btn');
    //     detial.addEventListener('click', () => {
    //     Recipesdetail(recipes.id);
    // });
        grid.innerHTML += cardHTML;
    });
}

// export function Recipesdetail(recipes) {
//     const grid = document.getElementById('recipe-grid');
//     grid.innerHTML = "";

//     recipes.forEach(recipe => {
       

//         const cardHTML = `
//             <article class="recipe-card" data-id="${recipe.id}">
               
//                 <div class="card-content">
//                     <h3>${recipe.name}</h3>
//                     <div class="card-footer">
//                         <span class="rating">⭐ ${recipe.rating} <small>(${recipe.reviewCount || 0})</small></span>
//                     </div>
//                      <button class="see">See More</button>
//                 </div>
//             </article>
//         `;
         
//         grid.innerHTML += cardHTML;
//     });
// }