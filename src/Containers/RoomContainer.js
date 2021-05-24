import React from "react";
import { connect } from "react-redux";

import ScoreContainer from "./ScoreContainer";
import BoardContainer from "./BoardContainer";
import HistoryContainer from "./HistoryContainer";
import PassContainer from "./PassContainer";
import UndoContainer from "./UndoContainer";
import { createMulti, joinMulti, opponent } from "../store/modules/board";

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
      props.multi.socket.emit("login", {
        name: userName,
        type: "create",
      });
    } else {
      console.log("멈춰! 이름이 없다!");
    }
  };
  const joinRoom = () => {
    if (userName !== "" && roomId !== "") {
      props.multi.socket.emit("login", {
        name: userName,
        room: roomId,
        type: "join",
      });
    } else {
      console.log("멈춰! 이름이나 방 코드 비어있다!");
    }
  };

  // 방 생성 완료 시 작동
  props.multi.socket.on("create", (room) => {
    console.log(room);
    props.createMulti({ player: 0, name: userName }, room);
  });

  // 방 입장 완료 시 작동
  props.multi.socket.on("join", (opponent) => {
    props.joinMulti({ player: 1, name: userName }, opponent, roomId);
  });

  // 새로운 사용자 방 입장
  props.multi.socket.on("newPlayer", (opponent) => {
    props.opponent(opponent);
  });

  // 오류 발생 시 메시지 전달 받음
  props.multi.socket.on("e_msg", (msg) => {
    console.log(msg);
  });

  if (props.multi.room !== "") {
    return (
      <div>
        <div className="game-title">Othello Multi</div>
        <div className="room-info">{"Room : " + props.multi.room}</div>
        <div className="game-content">
          <ScoreContainer />
          <BoardContainer />
        </div>
        <div>
          <HistoryContainer />
        </div>
        <PassContainer />
        <UndoContainer />
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
  multi: state.boardState.multi,
});

const mapDispatchToProps = {
  createMulti,
  joinMulti,
  opponent,
};

export default connect(mapStateToProps, mapDispatchToProps)(RoomContainer);
