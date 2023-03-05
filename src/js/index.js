import { filterPokemonByType, showAllPokemon } from './filters.js';

import getPokemon from './pokeapi.js';

import switchPage from './switch-page.js';

let pageNumber = 0;

function loadPage() {
  getPokemon();
}
loadPage();

function goToPreviousPage() {
  pageNumber--;
  if (pageNumber < 0) {
    pageNumber = 0;
  }
  setTimeout(switchPage, 1000);
}

function goToNextPage() {
  pageNumber++;
  setTimeout(switchPage, 1000);
}

function $showAllPokemon() {
  showAllPokemon();
}

function setFilter() {
  filterPokemonByType();
}
