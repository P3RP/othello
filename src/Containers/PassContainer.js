import React from "react";
import { connect } from "react-redux";
import Pass from "../Components/Pass";
import { pass } from "../store/modules/board";

function PassContainer(props) {
  return props.canPass[props.player] ? (
    <Pass onPass={() => props.pass(props.player)} />
  ) : null;
}

const mapStateToProps = (state) => ({
  player: state.boardReducer.player,
  canPass: state.boardReducer.canPass,
});

const mapDispatchToProps = {
  pass,
};

export default connect(mapStateToProps, mapDispatchToProps)(PassContainer);
