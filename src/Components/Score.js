import React from "react";

function Score(props) {
  console.log(props);
  return (
    <div>
      <div>Score</div>
      <div>
        <span className="dot dot--black"></span>: {props.count.b}
      </div>

      <div>
        <span className="dot dot--white"></span>: {props.count.w}
      </div>

      <div>남은 칸 : {props.count.e}</div>

      {props.isEnd ? <div>End!!</div> : null}
    </div>
  );
}

export default Score;
