const GET_STARSHIPS = "GET_STARSHIPS";
const GET_STARSHIPS_SUCCESS = "GET_STARSHIPS_SUCCESS";

export const Types = {
  GET_STARSHIPS,
  GET_STARSHIPS_SUCCESS
};

const initialState = { data: [] };

export default function StarshipsReducer(state = initialState, action) {
  if (!action) return state;

  switch (action.type) {
    case GET_STARSHIPS_SUCCESS:
      return { ...state, data: action.payload };
    default:
      return state;
  }
}

export const getStarships = payload => ({ type: GET_STARSHIPS, payload });
export const getStarshipsSuccess = payload => ({
  type: GET_STARSHIPS_SUCCESS,
  payload
});

export const Actions = {
  getStarships,
  getStarshipsSuccess
};
