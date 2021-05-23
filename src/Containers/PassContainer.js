import React from "react";
import { connect } from "react-redux";
import Pass from "../Components/Pass";
import { pass } from "../store/modules/board";

function PassContainer(props) {
  return !props.isEnd && props.canPass[props.player] ? (
    <Pass onPass={() => props.pass(props.player)} />
  ) : null;
}

const mapStateToProps = (state) => ({
  player: state.boardState.present.player,
  canPass: state.boardState.present.canPass,
  isEnd: state.boardState.present.isEnd,
});

const mapDispatchToProps = {
  pass,
};

export default connect(mapStateToProps, mapDispatchToProps)(PassContainer);
