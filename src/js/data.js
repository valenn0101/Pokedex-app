import showPokemon from './ui.js';

async function getPokemon(searchRange) {
  const urlPokemon = 'https://pokeapi.co/api/v2/pokemon/';
  document.querySelector('.pokemon-cards').innerHTML = '';
  for (let i = searchRange[0]; i <= searchRange[1]; i++) {
    const pokemonesJSON = await fetch(urlPokemon + i).then((response) => response.json());
    showPokemon(pokemonesJSON);
  }
}

export default getPokemon;
