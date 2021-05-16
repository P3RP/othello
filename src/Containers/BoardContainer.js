import React from "react";
import { connect } from "react-redux";
import Board from "../Components/Board";
import { play } from "../store/modules/board";

function BoardContainer(props) {
  const handlePlay = (row, col) => {
    props.play(row, col, props.player);
  };

  return <Board board={props.board} onPlay={handlePlay} />;
}

const mapStateToProps = (state) => ({
  board: state.boardReducer.board,
  player: state.boardReducer.player,
});

const mapDispatchToProps = {
  play,
};

export default connect(mapStateToProps, mapDispatchToProps)(BoardContainer);
