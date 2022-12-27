import React, { useContext } from "react";
import "./Display.css";
import { Context } from "../../Context";

const Display = () => {
  const { display } = useContext(Context);

  return (
    <div className="display">
      <div className={display.length >= 8 ? "digits-small" : "digits"}>
        {display}
      </div>
    </div>
  );
};
export default Display;