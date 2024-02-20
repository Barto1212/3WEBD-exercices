import { Fragment, useEffect, useState } from "react";
import "./App.css";
import { FetchCity, getCityList } from "./services/getCityList";
import { useDebounce } from "./component/hooks/useDebounce";
import CityItem from "./component/CityItem";
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
          {suggestions.length !== 1 && suggestions.map((city) => (
            <CityItem key={city.code} city={city} setUserInput={setUserInput} />
          ))}
        </ul>
      </form>
    </div>
  );
}

export default App;
