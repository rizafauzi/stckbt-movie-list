
import { configureStore } from '@reduxjs/toolkit'
import rootReducer from '../reducers'
import devToolsEnhancer from 'remote-redux-devtools';

const store = configureStore({
  reducer: rootReducer,
  devTools: devToolsEnhancer()
})

export default store