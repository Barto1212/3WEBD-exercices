import { useEffect, useState, type FC } from "react";
import { useDebounce } from "./hooks/useDebounce";
import { Item } from "./Item";

type P = {
  /**
   * Fonction asyncrone qui renvoie les propositions de recherche
   */
  getSuggestion: (userInput: string) => Promise<string[]>;
};
const SearchBar: FC<P> = ({ getSuggestion }) => {
  const [userInput, setUserInput] = useState("");
  const [suggestions, setSuggestions] = useState<string[]>([]);
  const debouncedUserInput = useDebounce(userInput, 400);

  useEffect(() => {
    getSuggestion(debouncedUserInput).then((cities) => {
      setSuggestions(cities);
    });
  }, [debouncedUserInput]);
  return (
    <form className="form" onSubmit={(e) => e.preventDefault()}>
      <input
        value={userInput}
        onChange={(e) => setUserInput(e.target.value)}
        className="input"
        type="text"
      />
      <ul className="city-list">
        {suggestions.length !== 1 &&
          suggestions.map((item) => (
            <Item key={item} item={item} setUserInput={setUserInput} />
          ))}
      </ul>
    </form>
  );
};

export default SearchBar;
