import { getCharacters } from "./api.js";
import { renderCharacters, showLoader, hideLoader, clearCards } from "./dom.js";

document.addEventListener("DOMContentLoaded", () => {

    const btnCargar = document.getElementById("btnCargar");
    const btnLimpiar = document.getElementById("btnLimpiar");
    const container = document.getElementById("cards");
    const loader = document.getElementById("loader");

    let characters = [];

    const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

    btnCargar.addEventListener("click", async () => {
        try {
            showLoader(loader);

            await delay(3000);

            characters = await getCharacters();

            renderCharacters(characters, container);

        } catch (error) {
            console.error(error);
        } finally {
            hideLoader(loader);
        }
    });

    btnLimpiar.addEventListener("click", () => {
        characters = [];
        clearCards(container);
    });

});