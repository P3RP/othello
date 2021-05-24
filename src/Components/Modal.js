import React from "react";

import ResetContainer from "../Containers/ResetContainer";
import ExitContainer from "../Containers/ExitContainer";

function Modal(props) {
  const win = () => {
    if (props.winner === 0) {
      return "Winner : " + props.name.b;
    } else if (props.winner === 1) {
      return "Winner : " + props.name.w;
    } else if (props.winner === -1) {
      return "Draw";
    } else {
      return "";
    }
  };

  const button = () => {
    if (props.game === 0) {
      return <ResetContainer />;
    } else if (props.game === 1) {
      return <ExitContainer />;
    } else {
      return "";
    }
  };

  return (
    <div className="modal">
      <div className="modal-container">
        <div className="modal-winner">{win()}</div>
        <div className="modal-result">
          <div className="modal-item">
            <div className="user-name">{props.name.b}</div>
            <div className="count-block">{props.count.b}</div>
          </div>
          <div className="modal-item">
            <div className="user-name">{props.name.w}</div>
            <div className="count-block">{props.count.w}</div>
          </div>
        </div>
        {button()}
      </div>
    </div>
  );
}

export default Modal;
