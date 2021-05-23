// 액션 타입 정의
const SELECT = "game/SELECT";

// 액션 생성 함수 정의
export const select = (game) => ({ type: SELECT, game });

// 초기 상태 정의
const initialState = {
  game: -1,
};

// 리듀서 정의
export default function gameReducer(state = initialState, action) {
  switch (action.type) {
    case SELECT: {
      return {
        game: action.game,
      };
    }
    default:
      return state;
  }
}
