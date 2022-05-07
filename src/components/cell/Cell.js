import React from "react";
import "./Cell.css";
import x from "../../images/x.svg";
import o from "../../images/o.svg";

const Cell = (props) => {
  return (
    <div
      className="Cell"
      style={{
        backgroundImage: "url(" + (props.value === "o" ? o : x) + ")",
      }}
    ></div>
  );
};

export default Cell;
