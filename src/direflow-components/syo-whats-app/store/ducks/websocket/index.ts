import { WebSocketState, WebServiceTypes } from './types'
import { Reducer } from 'redux'

const INITIAL_STATE: WebSocketState = {
  error: false,
  connected: false,
  connecting: false,
}

const reducer: Reducer<WebSocketState> = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case WebServiceTypes.WS_CONNECTED:
      return { ...state, connected: true, connecting: false }
    case WebServiceTypes.WS_CONNECTING:
      return { ...state, connected: false, connecting: true }
    case WebServiceTypes.WS_DISCONNECTED:
      return { ...state, connected: false, connecting: false }

    default:
      return state
  }
}

export default reducer
