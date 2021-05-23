import React from "react";

function Undo(props) {
  return (
    <div onClick={props.onPass} className="pass-btn">
      Undo
    </div>
  );
}

export default Undo;
