import React from "react";
import { connect } from "react-redux";
import Board from "../Components/Board";

function BoardContainer(props) {
  return <Board board={props.board} />;
}

const mapStateToProps = (state) => ({
  board: state.boardReducer.present.board,
  player: state.boardReducer.present.player,
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(BoardContainer);
