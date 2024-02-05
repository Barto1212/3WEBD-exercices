export type Pokemon = {
  id: number;
  image: string;
  name: string;
};

export async function getPokemonList() {
  const data = await fetch("https://pokebuildapi.fr/api/v1/pokemon/limit/100");
  const pokemonList: Pokemon[] = await data.json();
  return pokemonList;
}
