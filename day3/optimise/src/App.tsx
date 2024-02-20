import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Contact from "./Contact";
import Home from "./Home";
import LazyAbout from "./LazyAbout";

function App() {
  return (
    <>
      <BrowserRouter>
        <ul>
          <li>
            <Link to={"/"}>Home</Link>
          </li>
          <li>
            <Link to={"/about"}>About</Link>
          </li>
          <li>
            <Link to={"/contact"}>Contact</Link>
          </li>
        </ul>
        <Routes>
          <Route element={<Home />} path="/"></Route>
          <Route element={<LazyAbout />} path="/about"></Route>
          <Route element={<Contact />} path="/contact"></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
