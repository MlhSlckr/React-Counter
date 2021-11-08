import React from "react";

import User from "./components/User";
import Collapse from "./components/Collapse";

function App() {
  return (
    <div
      className="App"
      style={{
        display: "flex",
        justifyContent: "space-between",
        width: "100%",
      }}
    >
      <Collapse href="collapseExample1">
        <User userId="1" userText="User text 1"></User>
      </Collapse>
      <Collapse href="collapseExample2">
        <User userId="2" userText="User text 2"></User>
      </Collapse>
      <Collapse href="collapseExample3">
        <User userId="3" userText="User text 3"></User>
      </Collapse>
    </div>
  );
}

export default App;
