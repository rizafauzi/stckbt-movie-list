import { DETAIL_ACTION } from '../actions'
const initialState = {
  Title: '',
  Year: '',
  Rated: '',
  Released: '',
  Runtime: '',
  Genre: '',
  Director: '',
  Writer: '',
  Actors: '',
  Plot: '',
  Language: '',
  Country: '',
  Awards: '',
  Poster: '',
  Ratings: [],
  Metascore: '',
  imdbRating: '',
  imdbVotes: '',
  imdbID: '',
  Type: '',
  DVD: '',
  BoxOffice: '',
  Production: '',
  Website: '',
  Response: '',
}

export default (state = initialState, action) => {
  switch (action.type) {
    case DETAIL_ACTION.SET_INITIAL:
      const newData = action.payload.data
      return {
        ...state,
        Type: newData.Type,
        Year: newData.Year,
        Title: newData.Title,
        Poster: newData.Poster,
        imdbID: newData.imdbID,
      }
    case DETAIL_ACTION.SET_DATA:
      return {
        ...state
      }
    default:
      return state
  }
}
