import React from "react";
import "./App.css";
import Display from "./components/Display/Display";
import Keypad from "./components/Numpad/NumPad";

function App() {
  return (
    <div className="App">
      <Display />
      <Keypad />
    </div>
  );
}

export default App;