export const ADD_TO_FAVOURITE = `ADD_TO_FAVOURITE`
export const REMOVE_FROM_FAVOURITE = `REMOVE_FROM_FAVOURITE`
export const GET_JOBS = `GET_JOBS`
import { useParams } from "react-router-dom"

export const addToFavouriteAction = (company_name) => {
  return {
    type: ADD_TO_FAVOURITE,
    payload: company_name,
  }
}

export const removeFromFavouriteAction = (company_name) => {
  return {
    type: REMOVE_FROM_FAVOURITE,
    payload: company_name,
  }
}

export const getJob = () => {
  const params = useParams()
  const baseEndpoint =
    "https://strive-benchmark.herokuapp.com/api/jobs?company="

  return (dispatch) => {
    fetch(baseEndpoint + params.companyName)
      .then((res) => {
        if (res.ok) {
          return res.json()
        } else {
          throw new Error(`Error has occured during API Call`)
        }
      })
      .then((jobArray) => {
        console.log(jobArray)
        dispatch({
          type: GET_JOBS,
          payload: jobArray,
        })
      })
      .catch((err) => {
        console.log(`Error has occured`, err)
      })
  }
}
