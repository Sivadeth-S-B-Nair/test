import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const [color3, setColor3] = useState("white");
  function handleBlue() {
    setColor3("blue");
  }
  const [color1, setColor1] = useState("white");
  function handleRed() {
    setColor1("red");
  }

  const [color4, setColor4] = useState("white");
  function handleYellow() {
    setColor4("yellow");
  }

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <button
          onClick={handleBlue}
          style={{ backgroundColor: color3, color: "black" }}
        >
          Blue
        </button>
        <button
          onClick={handleRed}
          style={{ backgroundColor: color1, color: "black" }}
        >
          Red
        </button>

        <button
          onClick={handleYellow}
          style={{ backgroundColor: color4, color: "black" }}
        >
          Yellow
        </button>

        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
