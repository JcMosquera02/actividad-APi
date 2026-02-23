function getStatusClass(status) {
    if (status === "Alive") return "badge alive";
    if (status === "Dead") return "badge dead";
    return "badge unknown";
}

function getCard(character) {
    return `
    <article class="card">
        <img src="${character.image}" alt="${character.name}">
        <div class="card-content">
            <h2>${character.name}</h2>
            <span class="${getStatusClass(character.status)}">
                ${character.status}
            </span>
            <p><strong>Especie:</strong> ${character.species}</p>
            <p><strong>Origen:</strong> ${character.origin.name}</p>
            <p><strong>Ubicación:</strong> ${character.location.name}</p>
        </div>
    </article>
    `;
}

function printData(data) {
    const container = document.getElementById("container");
    container.innerHTML = "";

    if (!data.length) {
        container.innerHTML = `<p class="empty">No hay datos disponibles</p>`;
        return;
    }

    data.forEach(character => {
        container.innerHTML += getCard(character);
    });
}

window.printData = printData;