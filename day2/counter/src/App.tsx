import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Header />
      <div className="card">
        <button onClick={() => setCount((c) => c + 1)}>incrementer</button>
        <button onClick={() => setCount((c) => c - 1)}>decrementer</button>
        <button onClick={() => setCount(0)}>RAZ</button>
        <p>Le compteur vaut : {count}</p>
      </div>
    </>
  );
}

export default App;

function Header() {
  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
    </>
  );
}
