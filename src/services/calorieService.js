export function getColor(calories){
    if(calories<400){
        return 'badge-green';
    }else if (calories >= 400 && calories <=800){
        return 'badge-orange';
    }else{
        return 'badge-red';
    }
}

export function calculateTotalCalories(favoriteRecipes){
    return favoriteRecipes.reduce((total, recipe) => total + recipe.caloriesParServind,0 );
}