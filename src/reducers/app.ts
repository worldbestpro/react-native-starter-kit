import { createReducer } from 'reduxsauce'
import Immutable from 'seamless-immutable'
import { AppTypes } from '../actions/app'

const initialState = Immutable({
  status: '', // done, pending, error
})

const loginRequest = (state, action) => state.merge({ ...state, _status: 'pending' })
const loginSuccess = (state, action) => state.merge({ ...state, _status: 'done' })
const loginFailure = (state, action) => state.merge({ ...state, _status: 'error' })

export const reducer = createReducer(initialState, {
  [AppTypes.LOGIN_REQUEST]: loginRequest,
  [AppTypes.LOGIN_SUCCESS]: loginSuccess,
  [AppTypes.LOGIN_FAILURE]: loginFailure,
})
