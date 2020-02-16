import { combineReducers } from "redux";
import StarshipsReducer from "./starshipsDucks";

const rootReducer = combineReducers({
  starships: StarshipsReducer
});

export default rootReducer;
