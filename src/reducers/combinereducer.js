import { combineReducers } from "redux";
import Reducer from "./reducer";
export default combineReducers({
  score: Reducer,
});
