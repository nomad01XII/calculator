import React from "react";
import "./App.css";
import Display from "./components/Display/Display";
import NumPad from "./components/Numpad/NumPad";

function App() {
  return (
    <div className="App">
      <Display />
      <NumPad />
    </div>
  );
}

export default App;
