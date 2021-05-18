import React from "react";

function Pass(props) {
  return (
    <div onClick={props.onPass} className="pass-btn">
      PASS!
    </div>
  );
}

export default Pass;
