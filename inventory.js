const playerInventory = new Map();
export function initializeInventory() {
    playerInventory.set("Herb", 10);
    playerInventory.set("Water", 5);
    playerInventory.set("Crystal", 3);
}
export function hasIngredients(ingredients) {
    return ingredients.every(ingredient => 
        playerInventory.has(ingredient) && playerInventory.get(ingredient) > 0
    );
}
