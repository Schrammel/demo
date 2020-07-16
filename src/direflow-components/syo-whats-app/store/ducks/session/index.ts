import { Reducer } from 'redux'

import { SessionTypes, SessionState } from './types'

const INITIAL_STATE: SessionState = {
  from: '',
  to: '',
  room: '',
  websocket: '',
  blocked: false
}

const reducer: Reducer<SessionState> = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SessionTypes.SET_TO:
      return { ...state, to: action.payload.data }
    case SessionTypes.SET_FROM:
      return { ...state, from: action.payload.data }
    case SessionTypes.SET_ROOM:
      return { ...state, room: action.payload.data }
    case SessionTypes.SET_WEBSOCKET:
      return { ...state, websocket: action.payload.data }
    case SessionTypes.SET_BLOCK:
      return { ...state, blocked: false }
    default:
      return state
  }
}

export default reducer