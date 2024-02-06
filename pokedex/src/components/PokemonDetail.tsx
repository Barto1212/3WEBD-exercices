import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  PokemonDetailWithInfos,
  getPokemonDetail,
} from "../services/getPokemonById";

export const PokemonDetailsComponent = () => {
  const { id } = useParams();
  console.log("render");

  const [pokemonDetails, setPokemonDetails] =
    useState<null | PokemonDetailWithInfos>(null);
  useEffect(() => {
    if (id && !isNaN(parseInt(id))) {
      getPokemonDetail(parseInt(id)).then((pokemon) =>
        setPokemonDetails(pokemon)
      );
    }
  }, []);
  if (!id || isNaN(parseInt(id))) {
    return <h1>Ce pokemon n'existe pas</h1>;
  }

  if (!pokemonDetails) {
    return <h1>Chargement ...</h1>;
  }
  return (
    <>
      <h1>{pokemonDetails.name}</h1>
      <img className="pokemon-card--img" src={pokemonDetails.image} />
      <div>
        {pokemonDetails.apiTypes.map((type) => (
          <p>{type.name}</p>
        ))}
      </div>
    </>
  );
};
