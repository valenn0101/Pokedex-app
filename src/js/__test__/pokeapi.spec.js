import getPokemon from '../pokeapi';

describe('getPokemon', () => {
  it('Devuelve un array de pokemones', async () => {
    const searchRange = [1, 3];

    global.fetch = jest.fn(() => Promise.resolve({
      json: () => Promise.resolve({
        name: 'pokemon',
        url: 'https://pokeapi.co/api/v2/pokemon/1',
      }),
    }));

    const pokemons = await getPokemon(searchRange);

    expect(Array.isArray(pokemons)).toBe(true);
    expect(pokemons.length).toBe(searchRange[1] - searchRange[0] + 1);
    pokemons.forEach((pokemon) => {
      expect(pokemon.name).toBeDefined();
      expect(pokemon.url).toBeDefined();
    });

    global.fetch.mockReset();
  });
});
