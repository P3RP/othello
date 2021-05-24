import React from "react";
import { connect } from "react-redux";

import ScoreContainer from "./ScoreContainer";
import BoardContainer from "./BoardContainer";
import HistoryContainer from "./HistoryContainer";
import ExitContainer from "./ExitContainer";
import ModalContainer from "./ModalContainer";
import socket from "../utils/socket";

function RoomContainer(props) {
  let userName = "";
  let roomId = "";
  const changeUserName = (e) => {
    userName = e.target.value;
  };
  const changeRoomId = (e) => {
    roomId = e.target.value;
  };
  const createRoom = () => {
    if (userName !== "") {
      socket.emit("login", {
        name: userName,
        type: "create",
      });
    } else {
      console.log("멈춰! 이름이 없다!");
    }
  };
  const joinRoom = () => {
    if (userName !== "" && roomId !== "") {
      socket.emit("login", {
        name: userName,
        room: roomId,
        type: "join",
      });
    } else {
      console.log("멈춰! 이름이나 방 코드 비어있다!");
    }
  };

  if (props.multi.room !== "") {
    return (
      <div>
        <ModalContainer />
        <div className="game-title">Othello Multi</div>
        <div className="room-info">{"Room : " + props.multi.room}</div>
        <div className="game-content">
          <ScoreContainer />
          <BoardContainer />
        </div>
        <div>
          <HistoryContainer />
        </div>
        <ExitContainer />
      </div>
    );
  } else {
    return (
      <div>
        <label>
          이름
          <input type="text" onChange={changeUserName}></input>
        </label>
        <label>
          방 코드
          <input type="text" onChange={changeRoomId}></input>
        </label>
        <div onClick={createRoom}>Create Room</div>
        <div onClick={joinRoom}>Join Room</div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  player: state.boardState.present.player,
  multi: state.boardState.multi,
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(RoomContainer);
