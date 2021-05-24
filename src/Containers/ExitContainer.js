import React from "react";
import { connect } from "react-redux";

import Exit from "../Components/Exit";
import { exit } from "../store/modules/board";
import socket from "../utils/socket";

function ExitContainer(props) {
  const onExit = () => {
    props.exit();

    socket.emit("exit", {
      room: props.room,
      player: props.user,
    });
  };

  return <Exit onExit={() => onExit()} />;
}

const mapStateToProps = (state) => ({
  room: state.boardState.multi.room,
  user: state.boardState.multi.user,
});

const mapDispatchToProps = {
  exit,
};

export default connect(mapStateToProps, mapDispatchToProps)(ExitContainer);
