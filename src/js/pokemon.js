class Pokemon {
  constructor(id, name, height, weight, types, stats, sprites) {
    this.id = id;
    this.name = name;
    this.height = height;
    this.weight = weight;
    this.types = types;
    this.stats = stats;
    this.sprites = sprites;
  }

  imagenPokemon() {
    return this.sprites.other['official-artwork'].front_default;
  }

  alturaPokemon() {
    return `${this.height / 10} m`;
  }

  pesoPokemon() {
    return `${this.weight / 10} kg`;
  }

  pokemonTipos() {
    let tipos = '';
    this.types.forEach((tipo) => {
      tipos += `${tipo.type.name}`;
    });
    return tipos;
  }

  pokemonStats() {
    const estadisticas = [];
    this.stats.forEach((estat) => {
      estadisticas.push(`${estat.stat.name} + ${estat.base_stat}`);
    });
    return estadisticas.join(', ');
  }
}

export default Pokemon;
