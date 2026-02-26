export const renderCharacters = (characters, container) => {
    container.innerHTML = "";

    characters.forEach(character => {
        const card = document.createElement("div");
        card.classList.add("card");

        card.innerHTML = `
            <img src="${character.image}">
            <h3>${character.name}</h3>
            <p>${character.status}</p>
        `;

        container.appendChild(card);
    });
};

export const showLoader = (loader) => {
    loader.classList.remove("hidden");
};

export const hideLoader = (loader) => {
    loader.classList.add("hidden");
};

export const clearCards = (container) => {
    container.innerHTML = "";
};