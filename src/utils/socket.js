import socketIOClient from "socket.io-client";

import store from "../store";
import {
  createMulti,
  joinMulti,
  opponent,
  play,
  pass,
  opponentExit,
} from "../store/modules/board";

const ENDPOINT = "https://15.165.120.63:80";

// Socket 연결
const socket = socketIOClient(ENDPOINT);

// 방 생성 완료 시 작동
socket.on("create", (data) => {
  console.log("create : " + data);
  store.dispatch(createMulti({ player: 0, name: data.name }, data.room));
});

// 방 입장 완료 시 작동
socket.on("join", (data) => {
  console.log("join : " + data);
  store.dispatch(
    joinMulti({ player: 1, name: data.name }, data.opponent, data.roomId)
  );
});

// 새로운 사용자 방 입장
socket.on("newPlayer", (data) => {
  store.dispatch(opponent(data));
});

// 오류 발생 시 메시지 전달 받음
socket.on("eMsg", (msg) => {
  console.log(msg);
});

// (멀티) 상대편의 Play 응답 받은 경우
socket.on("play", (data) => {
  if (data.action.type === "click") {
    store.dispatch(play(data.action.row, data.action.col, data.player));
    console.log("opponent play");
  } else if (data.action.type === "pass") {
    store.dispatch(pass(data.player));
    console.log("opponent pass");
  } else {
    return;
  }
});

// (멀티) 상대방 탈주!
socket.on("opponentExit", () => {
  store.dispatch(opponentExit());
});

export default socket;
