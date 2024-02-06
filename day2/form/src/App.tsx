import {
  FormEvent,
  FormEventHandler,
  useEffect,
  useRef,
  useState,
} from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const inputRef = useRef<HTMLInputElement>(null);
  const [name, setName] = useState("inconnu");
  useEffect(() => {
    inputRef.current?.focus();
  }, []);
  
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (inputRef?.current) {
      setName(inputRef.current.value);
      inputRef.current.value = "";
    }
  };
  
  return (
    <>
      <Header />
      <h1>Bonjour {name}</h1>
      <form onSubmit={handleSubmit} className="card">
        <input ref={inputRef} type="text" />
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
