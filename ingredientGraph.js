// Graph structure for ingredient dependencies
export const ingredientGraph = new Map();

// Add an ingredient dependency
export function addDependency(ingredient, dependentIngredient) {
    if (!ingredientGraph.has(ingredient)) {
        ingredientGraph.set(ingredient, []);
    }
    ingredientGraph.get(ingredient).push(dependentIngredient);
}

// Get dependencies for a specific ingredient
export function getDependencies(ingredient) {
    return ingredientGraph.get(ingredient) || [];
}
