import { useEffect, useState } from "react";
import "./App.css";
import { FetchCity, getCityList } from "./services/getCityList";
import { useDebounce } from "./services/useDebounce";
// import getCityList from "./services/getCityList";
function App() {
  const [userInput, setUserInput] = useState("");
  const [suggestions, setSuggestions] = useState<FetchCity[]>([]);

  const debouncedUserInput = useDebounce(userInput, 250);

  useEffect(() => {
    getCityList(debouncedUserInput).then((cities) => {
      setSuggestions(cities);
    });
  }, [debouncedUserInput]);

  return (
    <div className="container">
      <form className="form">
        <input
          value={userInput}
          onChange={(e) => setUserInput(e.target.value)}
          className="input"
          type="text"
        />
        <ul className="city-list">
          {suggestions.map((city) => (
            <li key={city.code}>{city.nom}</li>
          ))}
        </ul>
      </form>
    </div>
  );
}

export default App;
