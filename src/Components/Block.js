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
      state = <span className="dot--small color--gray"></span>;
      break;
    default:
      break;
  }

  return (
    <td onClick={props.value === 2 ? props.OnClick : () => {}}>
      <div className="dot-container">{state}</div>
    </td>
  );
}

export default Block;
