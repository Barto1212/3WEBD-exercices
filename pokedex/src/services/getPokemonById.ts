import { Pokemon } from "./getPokemonList";

type Types = {
  name: string;
  image: string;
};

export type PokemonDetailWithInfos = {
  apiTypes: Types[];
} & Pokemon;

export async function getPokemonDetail(id: number) {
  const data = await fetch(`https://pokebuildapi.fr/api/v1/pokemon/${id}`);
  const pokemonList: PokemonDetailWithInfos = await data.json();
  return pokemonList;
}
