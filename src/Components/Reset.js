import React from "react";

function Reset(props) {
  return (
    <div onClick={props.onReset} className="reset-btn">
      Reset
    </div>
  );
}

export default Reset;
