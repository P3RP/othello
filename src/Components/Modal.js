import React from "react";

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
        <div>Button</div>
      </div>
    </div>
  );
}

export default Modal;
