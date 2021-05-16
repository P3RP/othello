import { getBlockReverse, getClickAvailable, HEIGHT, WIDTH } from "./othello";

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
};

// 리듀서 정의
export default function boardReducer(state = initialState, action) {
  switch (action.type) {
    case PLAY: {
      // 새로운 상태의 보드 생성
      const new_board = state.board.map((v) => v.slice());

      // 선택한 위치로 인해 뒤집어지는 타일 변경
      console.log(action);
      console.log(getBlockReverse(new_board, action));
      getBlockReverse(new_board, action).forEach((element) => {
        new_board[element[0]][element[1]] = action.player;
      });

      // 선택한 위치 타일 변경
      new_board[action.row][action.col] = action.player;

      // 플레이어 변경
      const player = action.player ^ 1;

      // 기존 선택 가능 블록 제거
      for (let i = 0; i < HEIGHT; i++) {
        for (let j = 0; j < WIDTH; j++) {
          if (new_board[i][j] === 2) {
            new_board[i][j] = -1;
          }
        }
      }

      // 선택 가능 블록 생성
      const clickable_block = getClickAvailable(new_board, player);
      if (!clickable_block.length) {
        // 두 플레이어 모두 패스를 한 경우, 게임 종료!
        end();
      }
      clickable_block.forEach((element) => {
        new_board[element[0]][element[1]] = 2;
      });

      return {
        board: new_board,
        player: player,
      };
    }

    case PASS: {
      console.log("pass!!");

      // 새로운 상태의 보드 생성
      const new_board = state.board.map((v) => v.slice());

      // 플레이어 변경
      const player = action.player ^ 1;

      // 기존 선택 가능 블록 제거
      for (let i = 0; i < HEIGHT; i++) {
        for (let j = 0; j < WIDTH; j++) {
          if (new_board[i][j] === 2) {
            new_board[i][j] = -1;
          }
        }
      }

      // 선택 가능 블록 생성
      const clickable_block = getClickAvailable(new_board, player);
      if (!clickable_block.length) {
        pass(player);
      }
      clickable_block.forEach((element) => {
        new_board[element[0]][element[1]] = 2;
      });

      return {
        board: new_board,
        player: player,
      };
    }

    default:
      return state;
  }
}
