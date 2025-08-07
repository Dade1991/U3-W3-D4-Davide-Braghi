import { GET_JOBS } from "../actions"

const initialState = {
  jobIndicator: [],
}

const jobReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_JOBS:
      return {
        ...state,
        jobIndicator: action.payload,
      }
    default:
      return state
  }
}

export default jobReducer
