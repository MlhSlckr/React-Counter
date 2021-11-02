import React, { useState } from "react";

function App() {
  let [counter, setCounter] = useState(0);

  function inc() {
    setCounter(counter + 1);
  }

  function dec() {
    setCounter(counter - 1);
  }

  function reset() {
    setCounter((counter = 0));
  }

  return (
    <div
      className="App"
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
      }}
    >
      <h1 style={{ color: "#592ED3", fontSize: "3rem" }}>{counter}</h1>
      <div className="content">
        <button style={{ marginRight: "1rem" }} onClick={() => dec()}>
          -
        </button>
        <button style={{ marginRight: "1rem" }} onClick={() => inc()}>
          +
        </button>
        <button onClick={() => reset()}>reset</button>
      </div>
    </div>
  );
}

export default App;
