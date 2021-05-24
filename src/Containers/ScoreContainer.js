import React from "react";
import { connect } from "react-redux";
import Score from "../Components/Score";
import { end } from "../store/modules/board";
import { HEIGHT, WIDTH } from "../store/modules/othello";

function ScoreContainer(props) {
  const count = () => {
    const result = [0, 0, HEIGHT * WIDTH];
    props.board.forEach((row) =>
      row.forEach((element) => {
        if (element === 0 || element === 1) {
          result[element] += 1;
        }
      })
    );
    result[2] -= result[0];
    result[2] -= result[1];
    return {
      b: result[0],
      w: result[1],
      e: result[2],
    };
  };

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
      count={count()}
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
  game: state.gameState.game,
  multi: state.boardState.multi,
});

const mapDispatchToProps = {
  end,
};

export default connect(mapStateToProps, mapDispatchToProps)(ScoreContainer);
