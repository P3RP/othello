import React from "react";
import { connect } from "react-redux";
import Board from "../Components/Board";

function BoardContainer(props) {
  return <Board board={props.board} />;
}

const mapStateToProps = (state) => ({
  board: state.boardState.present.board,
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(BoardContainer);
