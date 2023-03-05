import { filterPokemonByType, showAllPokemon } from './filters.js';

import { loadPage } from './load-page.js';

let pageNumber = 0;

const previousPage = document.querySelector('#previous-page');
const nextPage = document.querySelector('#next-page');

const $showAllPokemon = document.querySelector('#all-pokemon');
const setFilter = document.querySelectorAll('.btn-sidebar');

function initApp() {
  loadPage();
}
initApp();

previousPage.addEventListener('click', () => {
  document.querySelector('.pokemon-cards').innerHTML = '';
  pageNumber--;
  if (pageNumber < 0) {
    pageNumber = 0;
  }
  setTimeout(loadPage, 1000);
});

nextPage.addEventListener('click', () => {
  document.querySelector('.pokemon-cards').innerHTML = '';
  pageNumber++;
  setTimeout(loadPage, 1000);
});

$showAllPokemon.addEventListener('click', showAllPokemon());

setFilter.addEventListener('click', filterPokemonByType());
