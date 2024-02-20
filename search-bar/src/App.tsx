import "./App.css";
import { getCityList } from "./services/getCityList";

function App() {
  const suggestions = ["Tours", "Tourcoin", "Joué lès tours"];
  getCityList("tou");
  return (
    <div className="container">
      <form className="form">
        <input className="input" type="text" />
        <ul className="city-list">
          {suggestions.map((city) => (
            <li>{city}</li>
          ))}
        </ul>
      </form>
    </div>
  );
}

export default App;
