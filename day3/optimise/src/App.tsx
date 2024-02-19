import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { useFetch } from "./useFetch";
import ListItem from "./ListItem";
import { cities } from "./cities";

export type City = {
  nom: string;
  code: string;
};

function App() {
  const sumCP = (comm: City[]): number => {
    const initialValue = 0;
    const sumWithInitial = comm.reduce(
      (accumulator, currentValue) => accumulator + parseInt(currentValue.code),
      initialValue
    );

    return sumWithInitial;
  };
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
      <h1>La somme de tous les CP = {sumCP(cities)}</h1>
      <div className="card">
        <ul>
          {cities.map((city) => (
            <ListItem key={city.code} city={city} />
          ))}
        </ul>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
