import React from "react";
import { connect } from "react-redux";
import Board from "../Components/Board";
import { play, pass } from "../store/modules/board";

function BoardContainer(props) {
  // (멀티) 상대편의 Play 응답 받은 경우
  props.multi.socket.on("play", (data) => {
    if (data.action.type === "click") {
      props.play(data.action.row, data.action.col, data.player);
    } else if (data.action.type === "pass") {
      props.pass(data.player);
    } else {
      return;
    }
  });

  return <Board board={props.board} />;
}

const mapStateToProps = (state) => ({
  board: state.boardState.present.board,
  player: state.boardState.present.player,
  multi: state.boardState.multi,
});

const mapDispatchToProps = {
  play,
  pass,
};

export default connect(mapStateToProps, mapDispatchToProps)(BoardContainer);
