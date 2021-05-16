import React from "react";

function Block(props) {
  let state;
  switch (props.value) {
    case -1:
      state = "";
      break;
    case 0:
      state = <span className="dot--white"></span>;
      break;
    case 1:
      state = <span className="dot--black"></span>;
      break;
    default:
      break;
  }

  return <div onClick={props.Onclick}>{state}</div>;
}

export default Block;
