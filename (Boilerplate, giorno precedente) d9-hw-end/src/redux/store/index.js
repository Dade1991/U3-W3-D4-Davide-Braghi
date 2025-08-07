import { configureStore, combineReducers } from "@reduxjs/toolkit"
import favouriteReducer from "../reducers/favouriteReducer"

const combinedReducer = combineReducers({
  favourite: favouriteReducer,
})

const store = configureStore({
  reducer: combinedReducer,
})

export default store
