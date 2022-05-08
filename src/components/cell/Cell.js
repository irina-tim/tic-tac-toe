import React from "react";
import "./Cell.css";
import x from "../../images/x.svg";
import o from "../../images/o.svg";

const Cell = (props) => {
  function handleClick(e) {
    props.onClick(e.target.id);
  }
  return (
    <button
      className="cell"
      style={{
        backgroundImage:
          "url(" +
          (props.value === "o" ? o : props.value === "x" ? x : "") +
          ")",
      }}
      onClick={handleClick}
      id={props.id}
    ></button>
  );
};

export default Cell;
