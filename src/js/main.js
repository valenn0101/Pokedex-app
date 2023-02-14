const pokemonList = document.querySelector(".cartas-de-pokemones");
const previousPage = document.querySelector("#pagina-anterior");
const nextPage = document.querySelector("#pagina-siguiente");
const pokemonTypes = document.querySelectorAll(".btn-sidebar");

function showPokemon(pokemonesJSON) {
  const div = document.createElement("div");

  let types = pokemonesJSON.types.map(
    (type) => `<p class="${type.type.name} tipo">${type.type.name}</p>`
  );
  types = types.join("");

  let pokemonesId = pokemonesJSON.id.toString();
  if (pokemonesId.length === 1) {
    pokemonesId = "00" + pokemonesId;
  } else if (pokemonesId.length === 2) {
    pokemonesId = "0" + pokemonesId;
  }

  div.classList.add("card");
  div.innerHTML = `
  <div class="pokemon">
  <p class="pokemon-id-fondo">#${pokemonesId}</p>
  <div class="pokemon-imagen">
    <img src="${pokemonesJSON.sprites.other["official-artwork"].front_default}" alt="${pokemonesJSON.name}">
  </div>
  <div class="pokemon-info">
    <div class="nombre-pokemon">
      <p class="pokemon-id">#${pokemonesId}</p>
      <h2 class="nombre-pokemon" id="nombre-pokemon">${pokemonesJSON.name}</h2>
    </div>
    <div class="pokemon-tipos">
    ${types}
    </div>
    <div class="informacion">
      <button>Information</button>
    </div>
  </div>
</div>
  `;
  pokemonList.append(div);
}

pokemonTypes.forEach((tipo) => {
  tipo.addEventListener("click", (e) => {
    const selectedType = e.target.id;
    const pokemon = document.querySelectorAll(".card");

    pokemon.forEach((pokemon) => {
      const tipoPokemon = pokemon.querySelector(`.${selectedType}`);
      if (tipoPokemon) {
        pokemon.style.display = "flex";
      } else {
        pokemon.style.display = "none";
      }
    });
  });
});

document.querySelector("#ver-todos").addEventListener("click", () => {
  const pokemon = document.querySelectorAll(".card");
  pokemon.forEach((pokemon) => {
  pokemon.style.display = "flex";
  });
  });

let pageNumber = 0;
let searchRange = []

previousPage.addEventListener("click", function(){
pageNumber--;
if(pageNumber < 0){
pageNumber = 0;
}
switchPage();
});

nextPage.addEventListener("click", function(){
pageNumber++;
switchPage();
});

const generaciones = [  {tittle: 'First Generation', start: 1, end: 151},  {tittle: 'Second Generation', start: 152, end: 251},  {tittle: 'Third Generation', tittle: 252, end: 386},  {tittle: 'Fourth Generation', start: 387, end: 494}, {tittle: "Fifth Generation", start: 495, end: 649}, {tittle: "Sixth  Generation", start: 650, end: 721}, {tittle: "Seventh Generation", start: 722, end: 809}, {tittle: "Eight Generation", start: 810, end: 905}, {tittle: "Ninth Generation", start: 906, end: 1008}];

function switchPage() {
  const generationName = document.querySelector(".numero-de-generacion")
  const currentGeneration = generaciones[pageNumber];
  generationName.innerHTML = currentGeneration.tittle;
  previousPage.disabled = pageNumber === 0;
  nextPage.disabled = pageNumber === generaciones.length - 1;
  searchRange = [currentGeneration.start, currentGeneration.end];
  getPokemon(searchRange);
}
  switchPage();
