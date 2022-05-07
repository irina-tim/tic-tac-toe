import "./App.css";
import Board from "./board/Board";
import Popup from "./popup/Popup";
import Footer from "./footer/Footer";
import React, { useState } from "react";

function App() {
  const [isRestartPopupOpened, setIsRestartPopupOpened] = useState(false);
  const [isGameOverPopupOpened, setIsGameOverPopupOpened] = useState(false);
  const [isСhoicePopupOpened, setIsСhoicePopupOpened] = useState(false);

  return (
    <>
      <div className="app">
        <div className="app__container">
          <div className="logo"></div>
          <button className="app__restart-button"></button>
        </div>
        <Board />
        <Footer />
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
