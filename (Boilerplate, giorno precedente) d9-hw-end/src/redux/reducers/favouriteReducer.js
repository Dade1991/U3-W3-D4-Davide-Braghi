import { ADD_TO_FAVOURITE, REMOVE_FROM_FAVOURITE } from "../actions"

const initialState = {
  favouriteSelected: [],
}

const favouriteReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_FAVOURITE:
      return {
        ...state,
        favouriteSelected: [...state.favouriteSelected, action.payload],
      }
    case REMOVE_FROM_FAVOURITE:
      return {
        ...state,
        favouriteSelected: state.favouriteSelected.filter((fav) => {
          if (fav === action.payload) {
            return false
          } else {
            return true
          }
        }),
      }
    default:
      return state
  }
}

export default favouriteReducer
