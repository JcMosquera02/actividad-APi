const API_URL = "https://rickandmortyapi.com/api/character";

async function fetchData() {
    const response = await fetch(API_URL);
    const data = await response.json();
    return data.results;
}

async function showData() {
    const data = await fetchData();
    window.printData(data);
}

document.getElementById("showBtn")
    .addEventListener("click", showData);