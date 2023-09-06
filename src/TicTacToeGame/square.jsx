import React from "react";
import './square.css'


export const Square = (props) => {
  return (
    <div className="square" onClick={props.onClick}>
      <h2>{props.value}</h2>
    </div>
  );
};
