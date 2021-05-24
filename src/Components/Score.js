import React from "react";

function Score(props) {
  const checkWinner = () => {
    if (props.count.b > props.count.w) {
      return "Winner : Black";
    } else if (props.count.b < props.count.w) {
      return "Winner : White";
    } else {
      return "Draw";
    }
  };

  let classBlack, classWhite;
  if (props.player === 0) {
    classBlack = "profile profile--black profile--turn";
    classWhite = "profile profile--white";
  } else if (props.player === 1) {
    classBlack = "profile profile--black";
    classWhite = "profile profile--white profile--turn";
  } else {
    classBlack = "profile profile--black";
    classWhite = "profile profile--white";
  }

  return (
    <div className="user-board">
      <div className={classBlack}>
        <div className="user-name">{props.name.b}</div>
        <div className="count-block">{props.count.b}</div>
      </div>
      <div className="btn-container">
        <div>Undo</div>
        <div>Pass</div>
      </div>
      <div className={classWhite}>
        {props.name.w !== ""
          ? [
              <div key="user-name" className="user-name">
                {props.name.w}
              </div>,
              <div key="count-block" className="count-block">
                {props.count.w}
              </div>,
            ]
          : "대기"}
      </div>
      {/* {props.isEnd ? <div>End!!</div> : null}
      <div>{props.isEnd ? checkWinner() : null}</div> */}
    </div>
  );
}

export default Score;
