import { updateBoard, prepareNextBoard, getHistory } from "./othello";

// 액션 타입 정의
const PLAY = "board/PLAY";
const PASS = "board/PASS";
const END = "board/END";

// 액션 생성 함수 정의
export const play = (row, col, player) => ({
  type: PLAY,
  row,
  col,
  player,
});
export const pass = (player) => ({ type: PASS, player });
export const end = () => ({ type: END });

// 초기 상태 정의
const initialState = {
  board: [
    [-1, -1, -1, -1, -1, -1, -1, -1],
    [-1, -1, -1, -1, -1, -1, -1, -1],
    [-1, -1, -1, -1, 2, -1, -1, -1],
    [-1, -1, -1, 0, 1, 2, -1, -1],
    [-1, -1, 2, 1, 0, -1, -1, -1],
    [-1, -1, -1, 2, -1, -1, -1, -1],
    [-1, -1, -1, -1, -1, -1, -1, -1],
    [-1, -1, -1, -1, -1, -1, -1, -1],
  ],
  player: 0,
  canPass: [false, false],
  isEnd: false,
  history: [],
};

// 리듀서 정의
export default function boardReducer(state = initialState, action) {
  switch (action.type) {
    case PLAY: {
      // 선택한 칸에 대해서 보드 업데이트
      const new_board = updateBoard(
        state.board,
        action.row,
        action.col,
        action.player
      );

      // 다음 차례를 위한 보드 준비
      const [board, next_player, new_pass, isEnd] = prepareNextBoard(
        new_board,
        action.player,
        state.canPass
      );

      // History 작성
      const new_history = getHistory(action.player, {
        row: action.row,
        col: action.col,
      });

      return {
        board: board,
        player: next_player,
        canPass: new_pass,
        isEnd: isEnd,
        history: [...state.history, new_history],
      };
    }

    case PASS: {
      console.log((action.player === 1 ? "Black" : "White") + " pass!!");

      // 새로운 상태의 보드 생성
      const new_board = state.board.map((v) => v.slice());

      // 다음 차례를 위한 보드 준비
      const [board, next_player, new_pass, isEnd] = prepareNextBoard(
        new_board,
        action.player,
        state.canPass
      );

      // History 작성
      const new_history = getHistory(action.player, {
        pass: "pass",
      });

      return {
        board: board,
        player: next_player,
        canPass: new_pass,
        isEnd: isEnd,
        history: [...state.history, new_history],
      };
    }

    case END: {
      console.log("end");

      return {
        ...state,
        isEnd: true,
      };
    }

    default:
      return state;
  }
}
