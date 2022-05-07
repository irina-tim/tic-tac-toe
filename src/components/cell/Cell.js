import React from "react";
import "./Cell.css";

const Cell = (props) => {
  return <div className="Cell">{props.value}</div>;
};

export default Cell;
