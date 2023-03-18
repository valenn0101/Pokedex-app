function formatPokemonId(pokemon) {
  let pokemonId = pokemon.id.toString();
  if (pokemonId.length === 1) {
    pokemonId = `00${pokemonId}`;
  } else if (pokemonId.length === 2) {
    pokemonId = `0${pokemonId}`;
  }
  return pokemonId;
}
function generatePokemonTypeHTML(type) {
  return `<p class="${type.type.name} type">${type.type.name}</p>`;
}
function showModal(pokemon, types) {
  const modal = document.getElementById('myModal');
  const modalTitle = document.getElementById('modal-title');
  const modalBody = document.querySelector('.modal-body');
  const closeModalBtn = document.querySelector('.close');

  modalTitle.textContent = pokemon.name;
  modalBody.innerHTML = `
    <div class="pokemon-img">
      <img src="${pokemon.sprites.other['official-artwork'].front_default}" alt="${pokemon.name}">
    </div>
    <div class="pokemon-types">
      ${types}
    </div>
    <div class="poke-stats">
      <p>Height: ${pokemon.height / 10} m</p>
      <p>Weight: ${pokemon.weight / 10} kg</p>
      ${pokemon.stats.map((stat) => `<p class="atribute-stats">${stat.stat.name}: ${stat.base_stat}</p>`).join('')}
    </div>
  `;

  modal.style.display = 'block';

  closeModalBtn.addEventListener('click', () => {
    modal.style.display = 'none';
  });

  window.addEventListener('click', (event) => {
    if (event.target == modal) {
      modal.style.display = 'none';
    }
  });
}

export default function showPokemon(pokemon) {
  const pokemonList = document.querySelector('.pokemon-cards');
  const div = document.createElement('div');

  const types = pokemon.types.map(generatePokemonTypeHTML).join('');

  const pokemonId = formatPokemonId(pokemon);
  div.classList.add('card');
  div.innerHTML = `
  <div class="pokemon">
  <p class="pokemon-id-fondo">#${pokemonId}</p>
  <div class="pokemon-img">
    <img src="${pokemon.sprites.other['official-artwork'].front_default}" alt="${pokemon.name}">
  </div>
  <div class="pokemon-info">
    <div class="pokemon-name">
      <p class="pokemon-id">#${pokemonId}</p>
      <h2 class="pokemon-name" id="pokemon-name">${pokemon.name}</h2>
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
  const modalBtn = div.querySelector('.modal-btn');
  modalBtn.addEventListener('click', () => {
    showModal(pokemon, types);
  });

  pokemonList.append(div);
}
