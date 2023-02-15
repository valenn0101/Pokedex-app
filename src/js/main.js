const pokemonList = document.querySelector(".pokemon-cards");
const previousPage = document.querySelector("#previous-page");
const nextPage = document.querySelector("#next-page");
const pokemonTypes = document.querySelectorAll(".btn-sidebar");

function showPokemon(pokemonesJSON) {
  const div = document.createElement("div");

  let types = pokemonesJSON.types.map(
    (type) => `<p class="${type.type.name} type">${type.type.name}</p>`
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
    <div class="pokemon-name">
      <p class="pokemon-id">#${pokemonesId}</p>
      <h2 class="pokemon-name" id="pokemon-name">${pokemonesJSON.name}</h2>
    </div>
    <div class="pokemon-types">
    ${types}
    </div>
    <div class="information">
      <button class="modal-btn">Information</button>
    </div>
  </div>
</div>
  `;
  const modalBtn = div.querySelector(".modal-btn");
  const modal = document.getElementById("myModal");
  const modalTitle = document.getElementById("modal-title");
  const modalBody = document.querySelector(".modal-body");
  const closeModalBtn = document.querySelector(".close");

  modalBtn.addEventListener("click", () => {
    modalTitle.textContent = pokemonesJSON.name;
    modalBody.innerHTML = `
      <div class="pokemon-img">
        <img src="${
          pokemonesJSON.sprites.other["official-artwork"].front_default
        }" alt="${pokemonesJSON.name}">
      </div>
      <div class="pokemon-types">
        ${types}
      </div>
      <div class="poke-stats">
      <p>Height: ${pokemonesJSON.height / 10} m</p>
      <p>Weight: ${pokemonesJSON.weight / 10} kg</p>
      ${pokemonesJSON.stats
        .map(
          (stat) =>
            `<p class="atribute-stats">${stat.stat.name}: ${stat.base_stat}</p>`
        )
        .join("")}
    </div>
    `;

    modal.style.display = "block";
  });

  closeModalBtn.addEventListener("click", () => {
    modal.style.display = "none";
  });

  window.addEventListener("click", (event) => {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  });

  pokemonList.append(div);
}

pokemonTypes.forEach((type) => {
  type.addEventListener("click", (e) => {
    const selectedType = e.target.id;
    const pokemon = document.querySelectorAll(".card");

    pokemon.forEach((pokemon) => {
      const pokemonType = pokemon.querySelector(`.${selectedType}`);
      if (pokemonType) {
        pokemon.style.display = "flex";
      } else {
        pokemon.style.display = "none";
      }
    });
  });
});

document.querySelector("#all-pokemon").addEventListener("click", () => {
  const pokemon = document.querySelectorAll(".card");
  pokemon.forEach((pokemon) => {
    pokemon.style.display = "flex";
  });
});

let pageNumber = 0;
let searchRange = [];

previousPage.addEventListener("click", function () {
  pageNumber--;
  if (pageNumber < 0) {
    pageNumber = 0;
  }
  setTimeout(switchPage, 1000);
});

nextPage.addEventListener("click", function () {
  pageNumber++;
  setTimeout(switchPage, 1000);
});

const generations = [
  { tittle: "First Generation", start: 1, end: 151 },
  { tittle: "Second Generation", start: 152, end: 251 },
  { tittle: "Third Generation", start: 252, end: 386 },
  { tittle: "Fourth Generation", start: 387, end: 494 },
  { tittle: "Fifth Generation", start: 495, end: 649 },
  { tittle: "Sixth  Generation", start: 650, end: 721 },
  { tittle: "Seventh Generation", start: 722, end: 809 },
  { tittle: "Eight Generation", start: 810, end: 905 },
  { tittle: "Ninth Generation", start: 906, end: 1008 },
];

function switchPage() {
  const generationName = document.querySelector(".generation-name");
  const currentGeneration = generations[pageNumber];
  generationName.innerHTML = currentGeneration.tittle;
  previousPage.disabled = pageNumber === 0;
  nextPage.disabled = pageNumber === generations.length - 1;
  searchRange = [currentGeneration.start, currentGeneration.end];
  getPokemon(searchRange);
}
switchPage();
