import { combineReducers } from 'redux'

import messages from './messages'
import websocket from './websocket'
import session from './session'
import dom from './dom'

export default combineReducers({
  messages,
  websocket,
  session,
  dom,
})
