import { filterPokemonByType, showAllPokemon } from './filters.js';

import getPokemon from './data.js';

import switchPage from './switch-page.js';

let pageNumber = 0;

async function loadPage() {
  getPokemon();
}
loadPage();

async function goToPreviousPage() {
  pageNumber--;
  if (pageNumber < 0) {
    pageNumber = 0;
  }
  setTimeout(switchPage, 1000);
}

async function goToNextPage() {
  pageNumber++;
  setTimeout(switchPage, 1000);
}

async function $showAllPokemon() {
  showAllPokemon();
}

async function setFilter() {
  filterPokemonByType();
}
