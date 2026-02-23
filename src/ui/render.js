import { getBadgeColor } from '../services/calorieService.js';

/**
 * US1 : Afficher la grille des recettes.
 * @param {Array} recipes - Le tableau des recettes venant de l'API.
 */
export function renderRecipes(recipes) {
    const grid = document.getElementById('recipe-grid');
    
    // N-khwiw l-grid qbel ma n-zido l-khidma (bach ma y-t-3awduch)
    grid.innerHTML = "";

    recipes.forEach(recipe => {
        // N-jib s-smya dyal l-class dyal l-badge (US4)
        const badgeClass = getBadgeColor(recipe.caloriesPerServing);

        // N-sawbo l-HTML dyal l-card (kif f s-sketch dyalk)
        const cardHTML = `
            <article class="recipe-card" data-id="${recipe.id}">
                <div class="card-image">
                    <img src="${recipe.image}" alt="${recipe.name}">
                    <span class="nutri-badge ${badgeClass}">${recipe.caloriesPerServing} kcal</span>
                </div>
                <div class="card-info">
                    <h3>${recipe.name}</h3>
                    <div class="card-meta">
                        <span>⭐ ${recipe.rating}</span>
                        <span>${recipe.cuisine}</span>
                    </div>
                    <button class="btn-favorite">❤️</button>
                </div>
            </article>
        `;

        grid.innerHTML += cardHTML;
    });
}