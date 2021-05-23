import React from "react";
import { connect } from "react-redux";
import socketIOClient from "socket.io-client";

import ScoreContainer from "./ScoreContainer";
import BoardContainer from "./BoardContainer";
import HistoryContainer from "./HistoryContainer";
import PassContainer from "./PassContainer";
import UndoContainer from "./UndoContainer";
import RoomContainer from "./RoomContainer";
import { select } from "../store/modules/game";
import { connectMulti } from "../store/modules/board";

const ENDPOINT = "http://127.0.0.1:3001";

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
          Local
          <ScoreContainer />
          <div>
            <BoardContainer />
          </div>
          <div>
            <HistoryContainer />
          </div>
          <PassContainer />
          <UndoContainer />
        </div>
      );
      break;
    case 1:
      // Socket 연결
      const socket = socketIOClient(ENDPOINT);
      props.connectMulti(socket);

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
  connectMulti,
};

export default connect(mapStateToProps, mapDispatchToProps)(GameContainer);
