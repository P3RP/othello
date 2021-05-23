import { combineReducers } from "redux";
import { gameReducer } from "./game";
import { boardReducer } from "./board";

const rootReducer = combineReducers({
  gameState: gameReducer,
  boardState: boardReducer,
});

export default rootReducer;
