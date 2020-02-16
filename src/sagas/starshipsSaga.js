import { call, put, takeLatest } from "redux-saga/effects";
import { Types, getStarshipsSuccess } from "../ducks/starshipsDucks";
import axios from "axios";

function* getStarships(action) {
  try {
    const { data } = yield call(axios.get, "https://swapi.co/api/starships");
    console.log("saga", data);
    yield put(getStarshipsSuccess(data.results));
  } catch (e) {
    yield console.log(e, "error");
  }
}
export default function* starshipsSaga() {
  yield takeLatest(Types.GET_STARSHIPS, getStarships);
}
