import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { useWindowSize } from "./useWindowSize";
import { useRef } from "react";

function App() {
  useWindowSize();
  const sizedBoxRef = useRef<HTMLDivElement>(null);
  console.log(sizedBoxRef);

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
      {/* <h1>Window size: {size}px</h1> */}
      <div ref={sizedBoxRef} className="sized">
        <p>Hauteur :{sizedBoxRef.current?.clientHeight}</p>
        <p>Largeur :{sizedBoxRef.current?.clientWidth}</p>
      </div>
    </>
  );
}

export default App;
