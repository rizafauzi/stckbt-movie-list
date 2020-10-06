import { combineReducers } from 'redux'

import movie from './movie.reducer'
import detail from './detail.reducer'

export default combineReducers({
  movie,
  detail
})
