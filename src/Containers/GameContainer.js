import React from "react";
import { connect } from "react-redux";

import ModalContainer from "./ModalContainer";
import ScoreContainer from "./ScoreContainer";
import BoardContainer from "./BoardContainer";
import HistoryContainer from "./HistoryContainer";
import RoomContainer from "./RoomContainer";
import { select } from "../store/modules/game";

function GameContainer(props) {
  let result;
  switch (props.game) {
    case -1:
      result = (
        <div>
          <div onClick={() => props.select(0)}>Local</div>
          <div onClick={() => props.select(1)}>Multi</div>
        </div>
      );
      break;
    case 0:
      result = (
        <div>
          <ModalContainer />
          <div className="game-title">Othello Local</div>
          <div className="game-content">
            <ScoreContainer />
            <BoardContainer />
          </div>
          <div>
            <HistoryContainer />
          </div>
        </div>
      );
      break;
    case 1:
      result = <RoomContainer />;
      break;
    default:
      break;
  }

  return <div>{result}</div>;
}
const mapStateToProps = (state) => ({
  game: state.gameState.game,
});

const mapDispatchToProps = {
  select,
};

export default connect(mapStateToProps, mapDispatchToProps)(GameContainer);
