import React from "react";
import { connect } from "react-redux";

import ScoreContainer from "./ScoreContainer";
import BoardContainer from "./BoardContainer";
import HistoryContainer from "./HistoryContainer";
import PassContainer from "./PassContainer";
import UndoContainer from "./UndoContainer";
import { pass } from "../store/modules/board";

function RoomContainer(props) {
  let userName = "";
  let roomId = "";
  const changeUserName = (e) => {
    userName = e;
  };
  const changeRoomId = (e) => {
    roomId = e;
  };
  const createRoom = () => {
    if (userName !== "") {
      console.log("pass");
    } else {
      console.log("멈춰!");
    }
    // props.multi.socket.emit("login", {
    //   name: userName,
    //   type: "create",
    // });
  };
  const joinRoom = () => {
    if (userName !== "" && roomId !== "") {
      console.log("pass");
    } else {
      console.log("멈춰!");
    }
    // props.multi.socket.emit("login", {
    //   name: userName,
    //   room: roomId,
    //   type: "join",
    // });
  };

  //   props.multi.socket.on("create", (data) => {});

  //   props.multi.socket.on("join", (data) => {});

  if (props.multi.inRoom) {
    return (
      <div>
        Multi
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
  pass,
};

export default connect(mapStateToProps, mapDispatchToProps)(RoomContainer);
