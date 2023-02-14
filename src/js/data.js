const $pokemonList = document.querySelector(".cartas-de-pokemones");
let urlPokemon = "https://pokeapi.co/api/v2/pokemon/";



async function getPokemon(searchRange) {
  $pokemonList.innerHTML = "";
  for (let i = searchRange[0]; i <= searchRange[1]; i++) {
  const pokemonesJSON = await fetch(urlPokemon + i).then((response) => response.json());
  showPokemon(pokemonesJSON);
  }
}