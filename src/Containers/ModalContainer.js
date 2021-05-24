import React from "react";
import { connect } from "react-redux";
import Modal from "../Components/Modal";

function ModalContainer(props) {
  const name = () => {
    if (props.game === 0) {
      return {
        b: "Black",
        w: "White",
      };
    } else {
      if (props.multi.user === 0) {
        return {
          b: props.multi.name,
          w: props.multi.opponent,
        };
      } else {
        return {
          b: props.multi.opponent,
          w: props.multi.name,
        };
      }
    }
  };

  const checkWinner = () => {
    if (props.count.b > props.count.w) {
      return 0;
    } else if (props.count.b < props.count.w) {
      return 1;
    } else {
      return -1;
    }
  };

  return props.isEnd ? (
    <Modal
      isEnd={props.isEnd}
      count={props.count}
      winner={checkWinner()}
      name={name()}
      game={props.game}
    ></Modal>
  ) : (
    ""
  );
}

const mapStateToProps = (state) => ({
  isEnd: state.boardState.present.isEnd,
  count: state.boardState.present.count,
  game: state.gameState.game,
  multi: state.boardState.multi,
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(ModalContainer);
