import "./App.css";
import Board from "./board/Board";
import Popup from "./popup/Popup";
import Footer from "./footer/Footer";
import React, { useState, useEffect } from "react";

function App() {
  const cleanBoard = [...Array(9).keys()];
  const [isRestartPopupOpened, setIsRestartPopupOpened] = useState(false);
  const [isGameOverPopupOpened, setIsGameOverPopupOpened] = useState(false);
  const [isСhoicePopupOpened, setIsСhoicePopupOpened] = useState(true);
  const [choice, setChoice] = useState("x");
  const [board, setBoard] = useState(cleanBoard);
  const [pcTurn, setPcTurn] = useState(0);
  const winningСombos = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  const [isWin, setIsWin] = useState("no");

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
    closeAllPopups();
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
    pcTurn !== 0 && doPcTurn();
  }, [pcTurn]);

  // Check board after each update if
  // there are winning combinations
  useEffect(() => {
    const isWinner = checkWinner(board, choice);
    if (isWinner !== -1) {
      setIsWin(isWinner);
      setIsGameOverPopupOpened(true);
    }
  }, [board]);

  function checkWinner(theBoard, player) {
    for (let i = 0; i < winningСombos.length; i++) {
      if (
        theBoard[winningСombos[i][0]] !==
          Number(theBoard[winningСombos[i][0]]) &&
        theBoard[winningСombos[i][0]] === theBoard[winningСombos[i][1]] &&
        theBoard[winningСombos[i][1]] === theBoard[winningСombos[i][2]]
      ) {
        return theBoard[winningСombos[i][0]] === player ? "yes" : "no";
      }
    }
    if (theBoard.every((x) => x !== +x)) return "draw";
    return -1;
  }

  function turn(position, sign) {
    const boardCopy = [...board];
    boardCopy[position] = sign;
    setBoard(boardCopy);
  }

  function doPcTurn() {
    const humanPlayer = choice;
    const pcPlayer = choice === "x" ? "o" : "x";
    const bestChoice = minimax(board, pcPlayer);
    turn(bestChoice.index, pcPlayer);

    // MINIMAX ALGORITHM
    function minimax(newBoard, player) {
      // Remaining empty cells, filled with its indexes
      let emptyCells = newBoard.filter((x) => +x === x);

      if (checkWinner(newBoard, humanPlayer) === "yes") {
        return { score: -10 };
      } else if (checkWinner(newBoard, pcPlayer) === "yes") {
        return { score: 10 };
      } else if (emptyCells.length === 0) {
        return { score: 0 };
      }

      const moves = [];

      for (let i = 0; i < emptyCells.length; i++) {
        const move = {};
        move.index = newBoard[emptyCells[i]];
        newBoard[emptyCells[i]] = player;

        if (player === pcPlayer) {
          let result = minimax(newBoard, humanPlayer);
          move.score = result.score;
        } else {
          let result = minimax(newBoard, pcPlayer);
          move.score = result.score;
        }

        newBoard[emptyCells[i]] = move.index;
        moves.push(move);
      }

      let bestMove;
      if (player === pcPlayer) {
        let bestScore = Number.NEGATIVE_INFINITY;
        for (let i = 0; i < moves.length; i++) {
          if (moves[i].score > bestScore) {
            bestScore = moves[i].score;
            bestMove = i;
          }
        }
      } else {
        let bestScore = Number.POSITIVE_INFINITY;
        for (let i = 0; i < moves.length; i++) {
          if (moves[i].score < bestScore) {
            bestScore = moves[i].score;
            bestMove = i;
          }
        }
      }
      return moves[bestMove];
    }
  }

  function handleGameOver(button) {
    closeAllPopups();
    if (button === "b1") {
      clearBoard();
      setIsСhoicePopupOpened(true);
    }
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
        title={`${
          isWin === "yes"
            ? "You win!"
            : isWin === "no"
            ? "You  lost :("
            : "It's a draw"
        }`}
        button1Text="Play again"
        button2Text="Quit"
        isOpened={isGameOverPopupOpened}
        onClose={closeAllPopups}
        onButtonClick={handleGameOver}
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
