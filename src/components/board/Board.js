import React, { useState } from "react";
import "./Board.css";
import Cell from "../cell/Cell";

const Board = (props) => {
  //const [cells, setCells] = useState([]);
  return (
    <div className="Board">
      {[...Array(9)].map((_, i) => (
        <Cell key={i} value={i % 2 === 0 ? "x" : "o"} />
      ))}
    </div>
  );
};

export default Board;
