import "./App.css";
import Board from "./board/Board";
import Popup from "./popup/Popup";
import Footer from "./footer/Footer";
import React, { useState, useEffect } from "react";

function App() {
  const cleanBoard = Array(9).fill("");
  const [isRestartPopupOpened, setIsRestartPopupOpened] = useState(false);
  const [isGameOverPopupOpened, setIsGameOverPopupOpened] = useState(false);
  const [isСhoicePopupOpened, setIsСhoicePopupOpened] = useState(true);
  const [choice, setChoice] = useState("x");
  const [board, setBoard] = useState(cleanBoard);
  const [pcTurn, setPcTurn] = useState(0);

  function closeAllPopups() {
    setIsRestartPopupOpened(false);
    setIsGameOverPopupOpened(false);
    setIsСhoicePopupOpened(false);
  }

  function handleChoice(button) {
    button === "b1" ? setChoice("x") : setChoice("o");
    closeAllPopups();
  }

  function handleRestartButtonClick() {
    setIsRestartPopupOpened(true);
  }

  function clearBoard() {
    setBoard(cleanBoard);
  }

  function handleRestart(button) {
    if (button === "b1") {
      clearBoard();
      setIsСhoicePopupOpened(true);
    } else {
      closeAllPopups();
    }
  }

  function handleCellClick(position) {
    turn(position, choice);
    setPcTurn(pcTurn + 1);
  }

  // Make a PC turn only when pcTurn variable
  // is updated (after human turn), and do not
  // at mounting (when its initial value is 0)
  useEffect(() => {
    if (pcTurn !== 0) {
      console.log(board);
      doPcTurn();
    }
  }, [pcTurn]);

  function turn(position, sign) {
    const boardCopy = [...board];
    boardCopy[position] = sign;
    setBoard(boardCopy);
  }

  function doPcTurn() {
    const sign = choice === "x" ? "o" : "x";
    const i = Math.floor(Math.random() * 9);
    turn(i, sign);
  }

  return (
    <>
      <div className="app">
        <div className="app__container">
          <div className="logo"></div>
          <button
            className="app__restart-button"
            onClick={handleRestartButtonClick}
          ></button>
        </div>
        <Board value={board} onCellClick={handleCellClick} />
        <Footer />
      </div>
      <Popup //Restart popup
        title="Restart game?"
        button1Text="Yes"
        button2Text="No"
        isOpened={isRestartPopupOpened}
        onClose={closeAllPopups}
        onButtonClick={handleRestart}
      />
      <Popup //Game over popup
        title="You won!"
        button1Text="Play again"
        button2Text="Quit"
        isOpened={isGameOverPopupOpened}
        onClose={closeAllPopups}
      />
      <Popup //Choice popup
        title="X or O?"
        button1Text="Choose X"
        button2Text="Choose O"
        isOpened={isСhoicePopupOpened}
        onClose={closeAllPopups}
        onButtonClick={handleChoice}
      />
    </>
  );
}

export default App;
