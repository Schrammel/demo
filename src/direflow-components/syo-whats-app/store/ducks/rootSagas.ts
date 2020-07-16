import { all, takeLatest } from 'redux-saga/effects'
import { MessagesTypes } from './messages/types'
import { WebServiceTypes } from './websocket/types'
import { websocketFlow } from './messages/sagas'
import { checkBlock } from './session/sagas'
import { sendMessage } from './messages/sagas'
import { inputBottomFoco } from './dom/sagas'

export default function* rootSaga() {
  return yield all([
    takeLatest(MessagesTypes.SEND_MESSAGE_REQUEST_TEXT, sendMessage),
    takeLatest(WebServiceTypes.WS_CONNECT, websocketFlow),
    takeLatest(MessagesTypes.RESPONSE_MESSAGE, inputBottomFoco),
    takeLatest(MessagesTypes.RECIEVE_MESSAGE, checkBlock)
  ])
}
