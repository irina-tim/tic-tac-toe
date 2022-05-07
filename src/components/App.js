import "./App.css";
import Board from "./board/Board";
import Popup from "./popup/Popup";
import React, { useState } from "react";

function App() {
  const [isRestartPopupOpened, setIsRestartPopupOpened] = useState(false);
  const [isGameOverPopupOpened, setIsGameOverPopupOpened] = useState(false);
  const [isСhoicePopupOpened, setIsСhoicePopupOpened] = useState(false);

  return (
    <>
      <div className="App">
        <header className="App-header">Tic Tac Toe</header>
        <Board />
      </div>
      <Popup //Restart popup
        title="Restart game?"
        button1Text="Yes"
        button2Text="No"
        isOpened={isRestartPopupOpened}
      />
      <Popup //Game over popup
        title="You won!"
        button1Text="Quit"
        button2Text="Play again"
        isOpened={isGameOverPopupOpened}
      />
      <Popup //Choice popup
        title="X or O?"
        button1Text="Choose X"
        button2Text="Choose O"
        isOpened={isСhoicePopupOpened}
      />
    </>
  );
}

export default App;
