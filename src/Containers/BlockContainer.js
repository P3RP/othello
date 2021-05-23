import React from "react";
import { connect } from "react-redux";
import Block from "../Components/Block";
import { play } from "../store/modules/board";

function BlockContainer(props) {
  const handlePlay = () => {
    props.play(props.row, props.col, props.player);
  };
  return (
    <Block
      value={props.board[props.row][props.col]}
      OnClick={handlePlay}
      row={props.row}
      col={props.col}
    />
  );
}

const mapStateToProps = (state) => ({
  board: state.boardState.present.board,
  player: state.boardState.present.player,
});

const mapDispatchToProps = {
  play,
};

export default connect(mapStateToProps, mapDispatchToProps)(BlockContainer);
