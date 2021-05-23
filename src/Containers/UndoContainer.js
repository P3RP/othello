import React from "react";
import { connect } from "react-redux";
import Undo from "../Components/Undo";
import { undo } from "../store/modules/board";

function UndoContainer(props) {
  return props.history.length !== 0 ? (
    <Undo onPass={() => props.undo()} />
  ) : (
    <Undo onPass={null} />
  );
}

const mapStateToProps = (state) => ({
  history: state.boardState.history,
});

const mapDispatchToProps = {
  undo,
};

export default connect(mapStateToProps, mapDispatchToProps)(UndoContainer);
