import { MOVIE_ACTION } from '../actions'
const initialState = {
  rows: [],
  count: 0
}

export default (state = initialState, action) => {
  switch (action.type) {
    case MOVIE_ACTION.SET_TOTAL_COUNT:
      return {
        ...state,
        count: action.payload.data
      }
    case MOVIE_ACTION.APPEND_DATA:
      return {
        ...state,
        rows: state.rows.concat(action.payload.data)
      }
    case MOVIE_ACTION.CLEAN_DATA:
      return {
        rows: [],
        count: 0
      }
    default:
      return state
  }
}
