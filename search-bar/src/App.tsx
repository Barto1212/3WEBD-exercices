import "./App.css";
import SearchBar from "./component/SearchBar";
import { getBooksTitle } from "./services/getBooksTitle";
import { getCityList } from "./services/getCityList";
// import getCityList from "./services/getCityList";
function App() {
  return (
    <div className="container">
      <SearchBar getSuggestion={getBooksTitle} />
    </div>
  );
}

export default App;
