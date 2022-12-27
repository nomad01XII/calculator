import React, { useContext } from "react";
import { Context } from "../../Context";
import "./Button.css";

const Button = (props) => {
  const { handleClick } = useContext(Context);

  return (
    <button
      id={props.id}
      className={props.className}
      value={props.value}
      onClick={handleClick}
    >
      {props.value}
    </button>
  );
};

export default Button;