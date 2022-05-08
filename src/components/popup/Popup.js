import React from "react";
import "./Popup.css";

const Popup = (props) => {
  function handleClick(e) {
    props.onButtonClick(e.target.id);
  }
  return (
    <div className={`popup ${props.isOpened && "popup_opened"}`}>
      <div className="popup__container">
        <h2 className="popup__title">{props.title.toUpperCase()}</h2>
        <button className="popup__button" onClick={handleClick} id="b1">
          {props.button1Text.toUpperCase()}
        </button>
        <button className="popup__button" onClick={handleClick} id="b2">
          {props.button2Text.toUpperCase()}
        </button>
      </div>
    </div>
  );
};

export default Popup;
