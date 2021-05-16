import React from "react";

function Block(props) {
  let state;
  switch (props.value) {
    case -1:
      state = "";
      break;
    case 0:
      state = <span className="dot dot--white"></span>;
      break;
    case 1:
      state = <span className="dot dot--black"></span>;
      break;
    default:
      break;
  }

  return <td onClick={props.OnClick}>{state}</td>;
}

export default Block;
