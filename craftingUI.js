import { craftPotion } from '../main.js';

Hooks.on('renderActorSheet', (app, html, data) => {
    const button = $(`<button class="craft-potion">Craft Potion</button>`);
    html.find('.inventory-list').append(button);

    button.click(() => {
        const potionName = prompt("Enter potion name to craft:");
        if (potionName) {
            craftPotion(data.actor.id, potionName);
        }
    });
});
