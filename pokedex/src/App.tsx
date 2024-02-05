import { useEffect, useState } from "react";
import { Pokemon, getPokemonList } from "./services/getPokemonList";
import { PokemonCard } from "./components/Pokemon";

function App() {
  const [pokemonList, setPokemontList] = useState<Pokemon[]>([]);

  useEffect(() => {
    getPokemonList().then((p) => setPokemontList(p));
  }, []);

  return (
    <>
      <h1>Pokedex</h1>
      <ul className="pokemon-list">
        {pokemonList.map((pokemon) => (
          <PokemonCard key={pokemon.id} pokemon={pokemon} />
        ))}
      </ul>
    </>
  );
}

export default App;
