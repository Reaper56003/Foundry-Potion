// List of potion recipes, each with a name and a list of required ingredients.
export const potionRecipes = [
    { name: "Healing Potion", ingredients: ["Herb", "Water", "Crystal"] },
    { name: "Mana Potion", ingredients: ["Herb", "Water", "Essence"] },
    { name: "Stamina Potion", ingredients: ["Leaf", "Root", "Essence"] }
];

// Example function to find a recipe by name
export function findRecipeByName(potionName) {
    return potionRecipes.find(recipe => recipe.name === potionName);
}
