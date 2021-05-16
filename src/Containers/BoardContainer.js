import React from "react";
import { connect } from "react-redux";
import Board from "../Components/Board";

function BoardContainer(props) {
  return <Board board={props.board} />;
}

const mapStateToProps = (state) => ({
  board: state.boardReducer.board,
  player: state.boardReducer.player,
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(BoardContainer);
