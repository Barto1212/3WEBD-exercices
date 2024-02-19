import Vite from "./Vite";
import ChangeThemeButton from "./ChangeThemeButton";
import NavBar from "./NavBar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Avatar from "./Avatar";

function App() {
  return (
    <div className="page">
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route element={<Vite />} path="/"></Route>
          <Route element={<ChangeThemeButton />} path="/settings"></Route>
          <Route element={<Avatar />} path="/profile"></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
