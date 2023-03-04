export function filterPokemonByType() {
  const pokemonTypes = document.querySelectorAll('.btn-sidebar');

  pokemonTypes.forEach((type) => {
    type.addEventListener('click', (e) => {
      const selectedType = e.target.id;
      const pokemon = document.querySelectorAll('.card');

      pokemon.forEach((pokemon) => {
        const pokemonType = pokemon.querySelector(`.${selectedType}`);
        if (pokemonType) {
          pokemon.style.display = 'flex';
        } else {
          pokemon.style.display = 'none';
        }
      });
    });
  });
}
export function showAllPokemon() {
  const pokemon = document.querySelectorAll('.card');
  pokemon.forEach((pokemon) => {
    pokemon.style.display = 'flex';
  });
}
