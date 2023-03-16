import { filterPokemonByType, showAllPokemon } from '../filters.js';

describe('filterPokemonByType', () => {
  beforeEach(() => {
    document.body.innerHTML = `
      <div class="card">
        <div class="normal"></div>
      </div>
      <div class="card">
        <div class="fire"></div>
      </div>
      <div class="card">
        <div class="water"></div>
      </div>
      <div class="card">
      <div class="grass"></div>
    </div>
      <div class="btn-sidebar" id="all-pokemon"></div>
      <div class="btn-sidebar normal" id="normal"></div>
      <div class="btn-sidebar fire" id="fire"></div>
      <div class="btn-sidebar grass" id="grass"></div>
      <div class="btn-sidebar water" id="water"><div>
    `;
  });

  test('debería mostrar solo Pokémon de tipo fuego cuando se selecciona el tipo "fuego"', () => {
    const fireButton = document.querySelector('#fire');
    const waterPokemon = document.querySelector('#water');
    const grassPokemon = document.querySelector('#grass');
    const normalPokemon = document.querySelector('#normal');

    fireButton.click();

    expect(normalPokemon.style.display).toBe('');
    expect(waterPokemon.style.display).toBe('');
    expect(grassPokemon.style.display).toBe('');
    const cards = document.querySelectorAll('.card');
    let fireCards = 0;
    cards.forEach((card) => {
      if (card.querySelector('.fire')) {
        fireCards++;
      }
    });
    expect(fireCards).toBe(1);
  });
  test('Debería mostrar todos los Pokémon cuando se hace clic en el botón "mostrar todo"', () => {
    showAllPokemon();
    const pokemon = document.querySelectorAll('.card');
    pokemon.forEach((p) => {
      expect(p.style.display).toBe('flex');
    });
  });
});
