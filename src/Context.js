import { createContext } from "react";

/* eslint-disable no-eval */
import React, { useState } from "react";
const Context = createContext();
 

//these are the acation, you can uncomment the logs in order to see them
function ContextProvider({ children }) {

  const [display, setDisplay] = useState(["0"]);

  const handleClick = (event) => {

    const { id, value } = event.target;

    if (id === "clear") {
      setDisplay(["0"]);
    } else if (id === "number" || id === "operator") {
      if (display.length <= 30) {
        setDisplay((prev) =>
          prev.length === 1 && prev[0] === "0" ? value : [...prev, value]
        );
      }
      // console.log(display);
    } else if (id === "del") {
      setDisplay((prev) => {
        prev = prev.slice(0, prev.length - 1);
        if (prev.length >= 1) return [...prev];
        else return ["0"];
      });

      // console.log(display);
    } else if (id === "equals") {
      setDisplay((prev) => [eval(prev.join(""))]);
    }
  };

  return (
    <Context.Provider value={{ display, handleClick, }}>
      {children}
    </Context.Provider>
  );
}

export { ContextProvider, Context };