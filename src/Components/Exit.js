import React from "react";

function Exit(props) {
  return (
    <div onClick={props.onExit} className="pass-btn">
      Exit
    </div>
  );
}

export default Exit;
