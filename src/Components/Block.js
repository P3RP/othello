import React from "react";

function Block(props) {
  let state;
  switch (props.value) {
    case -1:
      state = "";
      break;
    case 0:
      state = <span className="dot color--black"></span>;
      break;
    case 1:
      state = <span className="dot color--white"></span>;
      break;
    case 2:
      if (props.turn) {
        state = <span className="dot--small color--gray"></span>;
      } else {
        state = "";
      }
      break;
    default:
      break;
  }

  return (
    <td onClick={props.value === 2 && props.turn ? props.OnClick : () => {}}>
      <div className="dot-container">{state}</div>
    </td>
  );
}

export default Block;
