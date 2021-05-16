import { combineReducers } from "redux";
import boardReducer from "./board";

const rootReducer = combineReducers({
  boardReducer,
});

export default rootReducer;
