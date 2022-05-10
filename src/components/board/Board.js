import React from "react";
import "./Board.css";
import Cell from "../cell/Cell";

const Board = (props) => {
  function handleCellClick(id) {
    props.onCellClick(id);
  }
  return (
    <div className="board">
      {props.value.map((el, i) => (
        <Cell key={i} value={el} id={i} onClick={handleCellClick} />
      ))}
    </div>
  );
};

export default Board;
