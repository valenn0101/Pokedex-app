export default function showPokemon(pokemonesJSON) {
  const pokemonList = document.querySelector('.pokemon-cards');
  const div = document.createElement('div');

  let types = pokemonesJSON.types.map(
    (type) => `<p class="${type.type.name} type">${type.type.name}</p>`,
  );
  types = types.join('');

  let pokemonesId = pokemonesJSON.id.toString();
  if (pokemonesId.length === 1) {
    pokemonesId = `00${pokemonesId}`;
  } else if (pokemonesId.length === 2) {
    pokemonesId = `0${pokemonesId}`;
  }

  div.classList.add('card');
  div.innerHTML = `
  <div class="pokemon">
  <p class="pokemon-id-fondo">#${pokemonesId}</p>
  <div class="pokemon-imagen">
    <img src="${pokemonesJSON.sprites.other['official-artwork'].front_default}" alt="${pokemonesJSON.name}">
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
  const modalBtn = div.querySelector('.modal-btn');
  const modal = document.getElementById('myModal');
  const modalTitle = document.getElementById('modal-title');
  const modalBody = document.querySelector('.modal-body');
  const closeModalBtn = document.querySelector('.close');

  modalBtn.addEventListener('click', () => {
    modalTitle.textContent = pokemonesJSON.name;
    modalBody.innerHTML = `
      <div class="pokemon-img">
        <img src="${
  pokemonesJSON.sprites.other['official-artwork'].front_default
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
      (stat) => `<p class="atribute-stats">${stat.stat.name}: ${stat.base_stat}</p>`,
    )
    .join('')}
    </div>
    `;

    modal.style.display = 'block';
  });

  closeModalBtn.addEventListener('click', () => {
    modal.style.display = 'none';
  });

  window.addEventListener('click', (event) => {
    if (event.target == modal) {
      modal.style.display = 'none';
    }
  });

  pokemonList.append(div);
}
