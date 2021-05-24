import React from "react";
import { connect } from "react-redux";
import Score from "../Components/Score";
import { end } from "../store/modules/board";

function ScoreContainer(props) {
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

  return (
    <Score
      count={props.count}
      name={name()}
      isEnd={props.isEnd}
      player={props.player}
    ></Score>
  );
}

const mapStateToProps = (state) => ({
  board: state.boardState.present.board,
  player: state.boardState.present.player,
  isEnd: state.boardState.present.isEnd,
  count: state.boardState.present.count,
  game: state.gameState.game,
  multi: state.boardState.multi,
});

const mapDispatchToProps = {
  end,
};

export default connect(mapStateToProps, mapDispatchToProps)(ScoreContainer);
