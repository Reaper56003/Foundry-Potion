import { potionRecipes } from './data/recipes.js';
import { initializeInventory, hasIngredients } from './data/inventory.js';
import { addDependency } from './data/dependencies.js';
import { TreeNode } from './structures/TreeNode.js';
import { ingredientGraph } from './structures/ingredientGraph.js';
import './ui/craftingUI.js';

Hooks.once('init', () => {
    initializeInventory();
    console.log("Potion Crafting System Loaded");
});

export function craftPotion(playerId, potionName) {
    const recipe = potionRecipes.find(r => r.name === potionName);
    if (!recipe || !hasIngredients(recipe.ingredients)) {
        console.log("Cannot craft potion: missing ingredients.");
        return;
    }
    
    // Process and craft using dependencies, inventory, and UI
    console.log(`Crafting ${potionName} for player ${playerId}`);
}
