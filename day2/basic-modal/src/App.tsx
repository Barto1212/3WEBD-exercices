import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Modal } from "./Modal";
import { useState } from "react";

function App() {
  const [isOpen, setIsOpen] = useState(false);
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
      <h1>Modal</h1>
      <div className="card">
        <button
          onClick={() => {
            setIsOpen(true);
          }}
        >
          Open modal
        </button>
      </div>
      <Modal onClose={() => setIsOpen(false)} isOpen={isOpen} />
    </>
  );
}

export default App;
