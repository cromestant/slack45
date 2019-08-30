import { createReducer, createActions } from 'reduxsauce'
import Immutable from 'seamless-immutable'

/* ------------- Types and Action Creators ------------- */

const { Types, Creators } = createActions({
  trainingsRequest: ['data'],
  trainingsSuccess: ['payload'],
  trainingsFailure: null
})


export const TrainingsTypes = Types
export default Creators

/* ------------- Initial State ------------- */

export const INITIAL_STATE = Immutable({
  data: [{
    key:"1"
    ,title:"This is a test"
    ,description:"You should do this x"
  }
  ,{
    key:"2"
    ,title:"This is the second title"
    ,description: "you should be doing y"
  }],
  fetching: null,
  payload: null,
  error: null
})

/* ------------- Selectors ------------- */

export const TrainingsSelectors = {
  getData: state => state.trainings.data,
  getDataForKeySelector: (state,key) => state.trainings.data.filter(el => el.key === key)
}

/* ------------- Reducers ------------- */

// request the data from an api
export const request = (state, { data }) =>
  {
    state.merge({ fetching: true, data, payload: null })
    console.tron.log("Within request, ", state)
  }

// successful api lookup
export const success = (state, action) => {
  console.tron.log("Within success, ", state, action)
  const { payload } = action
  return state.merge({ fetching: false, error: null, payload })
}

// Something went wrong somewhere.
export const failure = state => {
  console.tron.log("Within failure, ", state)
  state.merge({ fetching: false, error: true, payload: null })

}

/* ------------- Hookup Reducers To Types ------------- */

export const reducer = createReducer(INITIAL_STATE, {
  [Types.TRAININGS_REQUEST]: request,
  [Types.TRAININGS_SUCCESS]: success,
  [Types.TRAININGS_FAILURE]: failure
})
