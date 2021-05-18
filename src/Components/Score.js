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

  return (
    <div className="info-board">
      <div className="game-title">Othello</div>
      <div className="count-board">
        <div>남은 칸 : {props.count.e}</div>
        <div>
          <span className="dot--big color--black"></span>
          {" : " + props.count.b}
        </div>
        <div>
          <span className="dot--big color--white"></span>
          {" : " + props.count.w}
        </div>
      </div>

      <div>
        현재 차례 :
        {props.player ? (
          <span className="dot--big color--white"></span>
        ) : (
          <span className="dot--big color--black"></span>
        )}
      </div>

      {props.isEnd ? <div>End!!</div> : null}
      <div>{props.isEnd ? checkWinner() : null}</div>
    </div>
  );
}

export default Score;
