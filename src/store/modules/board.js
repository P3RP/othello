// 액션 타입 정의
const PLAY = "board/PLAY";

// 액션 생성 함수 정의
export const play = (row, col, player) => ({
  type: PLAY,
  row,
  col,
  player,
});

// 초기 상태 정의
const initialState = {
  board: [
    [-1, -1, -1, -1, -1, -1, -1, -1],
    [-1, -1, -1, -1, -1, -1, -1, -1],
    [-1, -1, -1, -1, -1, -1, -1, -1],
    [-1, -1, -1, 0, 1, -1, -1, -1],
    [-1, -1, -1, 1, 0, -1, -1, -1],
    [-1, -1, -1, -1, -1, -1, -1, -1],
    [-1, -1, -1, -1, -1, -1, -1, -1],
    [-1, -1, -1, -1, -1, -1, -1, -1],
  ],
  player: 0,
};

// 리듀서 정의
export default function boardReducer(state = initialState, action) {
  switch (action.type) {
    case PLAY:
      const new_board = state.board.map((v) => v.slice());
      new_board[action.row][action.col] = action.player;
      const player = action.player ^ 1;
      return {
        board: new_board,
        player: player,
      };

    default:
      return state;
  }
}
