import { DETAIL_ACTION } from '../actions'
const initialState = {
  DVD: '',
  Plot: '',
  Type: '',
  Year: '',
  Title: '',
  Rated: '',
  Genre: '',
  Writer: '',
  Actors: '',
  Awards: '',
  Poster: '',
  imdbID: '',
  Ratings: [],
  Country: '',
  Website: '',
  Runtime: '',
  Response: '',
  Released: '',
  Director: '',
  Language: '',
  Metascore: '',
  imdbVotes: '',
  BoxOffice: '',
  Production: '',
  imdbRating: '',
}

export default (state = initialState, action) => {
  switch (action.type) {
    case DETAIL_ACTION.SET_INITIAL:
      const newInit = action.payload.data
      return {
        DVD: '-',
        Plot: '-',
        Rated: '-',
        Genre: '-',
        Writer: '-',
        Actors: '-',
        Awards: '-',
        Ratings: [],
        Country: '-',
        Website: '-',
        Runtime: '-',
        Response: '-',
        Released: '-',
        Director: '-',
        Language: '-',
        Metascore: '-',
        imdbVotes: '-',
        BoxOffice: '-',
        Production: '-',
        imdbRating: '-',
        Type: newInit.Type,
        Year: newInit.Year,
        Title: newInit.Title,
        Poster: newInit.Poster,
        imdbID: newInit.imdbID,
      }
    case DETAIL_ACTION.SET_DATA:
      const newData = action.payload
      return {
        ...state,
        DVD: newData.DVD,
        Plot: newData.Plot,
        Rated: newData.Rated,
        Genre: newData.Genre,
        Writer: newData.Writer,
        Actors: newData.Actors,
        Awards: newData.Awards,
        Ratings: newData.Ratings,
        Country: newData.Country,
        Website: newData.Website,
        Runtime: newData.Runtime,
        Response: newData.Response,
        Released: newData.Released,
        Director: newData.Director,
        Language: newData.Language,
        Metascore: newData.Metascore,
        imdbVotes: newData.imdbVotes,
        BoxOffice: newData.BoxOffice,
        Production: newData.Production,
        imdbRating: newData.imdbRating,
      }
    default:
      return state
  }
}
