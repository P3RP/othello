import {
  updateBoard,
  prepareNextBoard,
  getHistory,
  count,
} from "../../utils/othello";

// 액션 타입 정의 (일반)
const PLAY = "board/PLAY";
const PASS = "board/PASS";
const UNDO = "board/UNDO";
const END = "board/END";
const RESET = "board/RESET";

// 액션 타입 정의 (멀티)
const CREATE = "multi/CREATE";
const JOIN = "multi/JOIN";
const OPPONENT = "multi/OPPONENT";
const PLAYMULTI = "multi/PLAY";
const EXIT = "multi/EXIT";
const OPPONENTEXIT = "multi/OPPONENTEXIT";

// 액션 생성 함수 정의 (일반)
export const play = (row, col, player) => ({
  type: PLAY,
  row,
  col,
  player,
});
export const pass = (player) => ({ type: PASS, player });
export const undo = () => ({ type: UNDO });
export const end = () => ({ type: END });
export const reset = () => ({ type: RESET });

// 액션 생성 함수 정의 (멀티)
export const createMulti = (player, room) => ({
  type: CREATE,
  player,
  room,
});
export const joinMulti = (player, opponent, room) => ({
  type: JOIN,
  player,
  opponent,
  room,
});
export const opponent = (opponent) => ({ type: OPPONENT, opponent });
export const playmulti = () => ({ type: PLAYMULTI });
export const exit = () => ({ type: EXIT });
export const opponentExit = () => ({ type: OPPONENTEXIT });

// 초기 상태 정의
const initialPresent = {
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
  count: {
    b: 2,
    w: 2,
    e: 60,
  },
  canPass: [false, false],
  isEnd: false,
};

const initialMulti = {
  user: -1,
  name: "",
  opponent: "",
  room: "",
};

const initialState = {
  history: [],
  present: initialPresent,
  multi: initialMulti,
};

// 리듀서 정의
export const boardReducer = (state = initialState, action) => {
  switch (action.type) {
    case PLAY: {
      // 선택한 칸에 대해서 보드 업데이트
      const new_board = updateBoard(
        state.present.board,
        action.row,
        action.col,
        action.player
      );

      // 다음 차례를 위한 보드 준비
      const [board, next_player, new_pass, isEnd] = prepareNextBoard(
        new_board,
        action.player,
        state.present.canPass
      );

      // History 작성
      const new_history = getHistory(state.present, {
        row: action.row,
        col: action.col,
      });

      // Count 측정
      const new_count = count(board);

      return {
        ...state,
        history: [new_history, ...state.history],
        present: {
          board: board,
          player: next_player,
          count: new_count,
          canPass: new_pass,
          isEnd: isEnd,
        },
      };
    }

    case PASS: {
      console.log((action.player === 1 ? "Black" : "White") + " pass!!");

      // 새로운 상태의 보드 생성
      const new_board = state.present.board.map((v) => v.slice());

      // 다음 차례를 위한 보드 준비
      const [board, next_player, new_pass, isEnd] = prepareNextBoard(
        new_board,
        action.player,
        state.present.canPass
      );

      // History 작성
      const new_history = getHistory(state.present, {
        pass: "pass",
      });

      return {
        ...state,
        history: [new_history, ...state.history],
        present: {
          ...state.present,
          board: board,
          player: next_player,
          canPass: new_pass,
          isEnd: isEnd,
        },
      };
    }

    case UNDO: {
      console.log("undo");

      const new_history = state.history.slice();
      const undo = new_history.shift();

      return {
        ...state,
        history: new_history,
        present: undo.undo,
      };
    }

    case END: {
      console.log("end");

      return {
        ...state,
        present: {
          ...state.present,
          isEnd: true,
        },
      };
    }

    case RESET: {
      console.log("reset");

      return {
        ...state,
        history: [],
        present: initialPresent,
      };
    }

    case CREATE: {
      return {
        ...state,
        multi: {
          ...state.multi,
          user: action.player.player,
          name: action.player.name,
          room: action.room,
        },
      };
    }

    case JOIN: {
      return {
        ...state,
        multi: {
          ...state.multi,
          user: action.player.player,
          name: action.player.name,
          room: action.room,
          opponent: action.opponent,
        },
      };
    }

    case OPPONENT: {
      return {
        ...state,
        multi: {
          ...state.multi,
          opponent: action.opponent,
        },
      };
    }

    case EXIT: {
      return {
        history: [],
        present: initialPresent,
        multi: initialMulti,
      };
    }

    case OPPONENTEXIT: {
      return {
        history: [],
        present: initialPresent,
        multi: {
          ...state.multi,
          user: 0,
          opponent: "",
        },
      };
    }

    default:
      return state;
  }
};
