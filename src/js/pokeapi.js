async function getPokemon(searchRange) {
  const urlPokemon = 'https://pokeapi.co/api/v2/pokemon/';
  const pokemons = [];
  for (let i = searchRange[0]; i <= searchRange[1]; i++) {
    const pokemonJSON = await fetch(urlPokemon + i).then((response) => response.json());
    pokemons.push(pokemonJSON);
  }
  return pokemons;
}

export default getPokemon;
