import getPokemon from './data.js';

const previousPage = document.querySelector('#previous-page');
const nextPage = document.querySelector('#next-page');
let pageNumber = 0;
let searchRange = [];

previousPage.addEventListener('click', () => {
  pageNumber--;
  if (pageNumber < 0) {
    pageNumber = 0;
  }
  setTimeout(switchPage, 1000);
});

nextPage.addEventListener('click', () => {
  pageNumber++;
  setTimeout(switchPage, 1000);
});

const generations = [
  { tittle: 'First Generation', start: 1, end: 151 },
  { tittle: 'Second Generation', start: 152, end: 251 },
  { tittle: 'Third Generation', start: 252, end: 386 },
  { tittle: 'Fourth Generation', start: 387, end: 494 },
  { tittle: 'Fifth Generation', start: 495, end: 649 },
  { tittle: 'Sixth  Generation', start: 650, end: 721 },
  { tittle: 'Seventh Generation', start: 722, end: 809 },
  { tittle: 'Eight Generation', start: 810, end: 905 },
  { tittle: 'Ninth Generation', start: 906, end: 1008 },
];

function switchPage() {
  const generationName = document.querySelector('.generation-name');
  const currentGeneration = generations[pageNumber];
  generationName.innerHTML = currentGeneration.tittle;
  previousPage.disabled = pageNumber === 0;
  nextPage.disabled = pageNumber === generations.length - 1;
  searchRange = [currentGeneration.start, currentGeneration.end];
  getPokemon(searchRange);
}

export default switchPage();
