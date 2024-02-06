import { ChangeEvent, FormEvent, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { useForm } from "./useForm";

function App() {
  const { input, handleChange, handleSubmit } = useForm("");

  return (
    <>
      <Header />
      <h1>Bonjour</h1>
      <form onSubmit={handleSubmit} className="card">
        <input value={input} onChange={handleChange} type="text" />
        <button>Envoyer</button>
      </form>
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
    </>
  );
}
