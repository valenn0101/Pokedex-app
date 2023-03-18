import Pokemon from './pokemon.js';

async function getPokemon(searchRange) {
  const urlPokemon = 'https://pokeapi.co/api/v2/pokemon/';
  const pokemons = [];
  for (let i = searchRange[0]; i <= searchRange[1]; i++) {
    const pokemonJSON = await fetch(urlPokemon + i).then((response) => response.json());
    const pokemon = new Pokemon(
      pokemonJSON.id,
      pokemonJSON.name,
      pokemonJSON.height,
      pokemonJSON.weight,
      pokemonJSON.types,
      pokemonJSON.stats,
      pokemonJSON.sprites,
    );
    pokemons.push(pokemon);
  }
  return pokemons;
}

export default getPokemon;
