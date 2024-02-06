import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import React from "react";

function App() {
  const students = [
    "Aubin",
    "Narjisse",
    "Scott",
    "Yassin",
    "Marc-Antoine",
    "Yanis",
    "Baptiste",
  ];
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
      <h1>Fragment</h1>
      <ul>
        <thead>
          <tr>
            <td>Prénom</td>
            <td>Nombre de lettres</td>
          </tr>
        </thead>
        <tbody>
          {students.map((student) => {
            if (student.length <= 7) return null;
            return (
              <tr>
                <td>{student}</td>
                <td>{student.length}</td>
              </tr>
            );
          })}
        </tbody>
      </ul>
    </>
  );
}

export default App;
