import React from "react";
import { connect } from "react-redux";
import Pass from "../Components/Pass";
import { pass } from "../store/modules/board";

function PassContainer(props) {
  return !props.isEnd &&
    props.canPass[props.player] &&
    !(props.canPass[0] && props.canPass[1]) ? (
    <Pass onPass={() => props.pass(props.player)} />
  ) : null;
}

const mapStateToProps = (state) => ({
  player: state.boardReducer.player,
  canPass: state.boardReducer.canPass,
  isEnd: state.boardReducer.isEnd,
});

const mapDispatchToProps = {
  pass,
};

export default connect(mapStateToProps, mapDispatchToProps)(PassContainer);
