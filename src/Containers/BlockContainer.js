import React from "react";
import { connect } from "react-redux";
import Block from "../Components/Block";
import { play } from "../store/modules/board";
import socket from "../utils/socket";

function BlockContainer(props) {
  const handlePlay = () => {
    props.play(props.row, props.col, props.turn);

    // 상대측에게 클릭한 정보 보내주기
    if (props.game === 1) {
      socket.emit("play", {
        player: props.turn,
        room: props.multi.room,
        action: {
          type: "click",
          row: props.row,
          col: props.col,
        },
      });
    }
  };
  const isTurn = () => {
    if (props.game === 0) {
      return true;
    } else if (props.game === 1) {
      return props.turn === props.multi.user ? true : false;
    } else {
      return false;
    }
  };
  return (
    <Block
      value={props.board[props.row][props.col]}
      OnClick={handlePlay}
      row={props.row}
      col={props.col}
      turn={isTurn()}
    />
  );
}

const mapStateToProps = (state) => ({
  game: state.gameState.game,
  board: state.boardState.present.board,
  turn: state.boardState.present.player,
  multi: state.boardState.multi,
});

const mapDispatchToProps = {
  play,
};

export default connect(mapStateToProps, mapDispatchToProps)(BlockContainer);
