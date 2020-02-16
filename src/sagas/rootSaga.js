import starshipsSaga from "./starshipsSaga";
import { all } from "redux-saga/effects";

function* rootSaga() {
  yield all([starshipsSaga()]);
}

export default rootSaga;
