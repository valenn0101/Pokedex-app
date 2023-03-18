import showPokemon from '../ui';

describe('showPokemon function', () => {
  beforeEach(() => {
    document.body.innerHTML = '<div class="pokemon-cards"></div>';
  });

  afterEach(() => {
    document.body.innerHTML = '';
  });

  test('Deberia crear una card del pokemon', () => {
    const pokemon = {
      id: 1,
      name: 'bulbasaur',
      sprites: {
        other: {
          'official-artwork': {
            front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png',
          },
        },
      },
      types: [{ type: { name: 'grass' } }, { type: { name: 'poison' } }],
      height: 7,
      weight: 69,
      stats: [
        { stat: { name: 'hp' }, base_stat: 45 },
        { stat: { name: 'attack' }, base_stat: 49 },
        { stat: { name: 'defense' }, base_stat: 49 },
        { stat: { name: 'special-attack' }, base_stat: 65 },
        { stat: { name: 'special-defense' }, base_stat: 65 },
        { stat: { name: 'speed' }, base_stat: 45 },
      ],
    };

    showPokemon(pokemon);

    const pokemonCard = document.querySelector('.pokemon-cards .card');
    expect(pokemonCard).not.toBeNull();
    expect(pokemonCard.querySelector('.pokemon-id-fondo').textContent).toBe('#001');
    expect(pokemonCard.querySelector('.pokemon-img img').src).toBe('https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png');
    expect(pokemonCard.querySelector('.pokemon-name h2').textContent).toBe('bulbasaur');
    expect(pokemonCard.querySelectorAll('.pokemon-types .type').length).toBe(2);
    expect(pokemonCard.querySelector('.pokemon-types .grass').textContent).toBe('grass');
    expect(pokemonCard.querySelector('.pokemon-types .poison').textContent).toBe('poison');
    expect(pokemonCard.querySelector('.modal-btn')).not.toBeNull();
  });
});
