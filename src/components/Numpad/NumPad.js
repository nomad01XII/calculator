import React from "react";
import Button from "../Buttons/Button";
import "./Numpad.css";

const NumPad = () => {
  return (
    <div className="keypad">
      <Button className="btn-r1c1" id="clear" value="C" />
      <Button className="btn-r1c2" value="del" id="del" />
      <Button className="btn-r1c3" value="√" id="operator" />
      <Button className="btn-r1c4" value="/" id="operator" />
      <Button className="btn-r2c1" value="7" id="number" />
      <Button className="btn-r2c2" value="8" id="number" />
      <Button className="btn-r2c3" value="9" id="number" />
      <Button className="btn-r2c4" value="*" id="operator" />
      <Button className="btn-r3c1" value="4" id="number" />
      <Button className="btn-r3c2" value="5" id="number" />
      <Button className="btn-r3c3" value="6" id="number" />
      <Button className="btn-r3c4" value="-" id="operator" />
      <Button className="btn-r4c1" value="1" id="number" />
      <Button className="btn-r4c2" value="2" id="number" />
      <Button className="btn-r4c3" value="3" id="number" />
      <Button className="btn-r4c4" value="+" id="operator" />
      <Button className="btn-r5c1" value="0" id="number" />
      <Button className="btn-r5c3" value="=" id="equals" />
    </div>
  );
};

export default NumPad ;
