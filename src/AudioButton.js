import React from "react";
import "./AudioButton.css";

export default function AudioButton(props) {
    function handleClick() {
        let audio = new Audio(props.audioUrl);
        audio.play();
    }

    return (
      <div className="button">
        <button
          data-playing="false"
          role="switch"
          aria-checked="false"
          onClick={handleClick}>
          <i className="icon fas fa-volume-up"></i>
        </button>
      </div>
  );
}