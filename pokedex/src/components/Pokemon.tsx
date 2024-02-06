import { Link } from "react-router-dom";
import { Pokemon } from "../services/getPokemonList";

type Props = {
  pokemon: Pokemon;
};

export const PokemonCard = ({ pokemon }: Props) => {
  return (
    <li className="pokemon-card">
      <h3>{pokemon.name}</h3>
      <Link to={`pokemon/${pokemon.id}`}>
        <img
          className="pokemon-card--img"
          src={pokemon.image}
          alt={pokemon.name}
        />
      </Link>
    </li>
  );
};
