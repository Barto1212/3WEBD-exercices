import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { useContext } from "react";
import { ThemeContext, ThemeContextType } from "./context/ThemeProvider";
import Login from "./Login";

const Vite = () => {
  const { theme } = useContext(ThemeContext) as ThemeContextType;
  return (
    <div>
      <div style={{ backgroundColor: theme === "light" ? "white" : "black" }}>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <Login />
        <p>{theme}</p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </div>
  );
};

export default Vite;
