let container = document.getElementById("container");

const getCharacters = async () => {
  try {
    let response = await fetch("https://rickandmortyapi.com/api/character");
    let data = await response.json();
    let characters = data.results;

    characters.forEach((character) => {
      const div = document.createElement("div");
      div.innerHTML = `
        <h1>${character.name}</h1>
        <p>${character.status}</p>
        <p>${character.gender}</p>
        <img src="${character.image}">
        <hr/>
      `;
      container.append(div);
    });
  } catch (error) {
    let div = document.createElement("div");
    div.innerHTML = `
      <h1>Ha ocurrido un error, por favor intenta luego!</h1>
    `;
    container.append(div);
  }
};

getCharacters();
