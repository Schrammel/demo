import { ApplicationState } from '../..'
import { MessagesState } from '../messages/types'
import { put, select, call, takeEvery } from 'redux-saga/effects'
import { SessionState } from '../session/types'
import { setBlocked } from '../session/actions'
import { eventChannel, END } from 'redux-saga'
import { recieveMessage } from '../messages/actions'

function countdown(secs: number) {
  return eventChannel(emitter => {
    const iv = setTimeout(() => {
      if (secs > 0) {
        emitter(secs)
      } else {
        emitter(END)
      }
    }, secs)
    return () => {
      clearTimeout(iv)
    }
  })
}

export function* checkBlock() {
  const messages: MessagesState = yield select(getMessages)
  const session: SessionState = yield select(getSession)
  messages.data.reverse()
  const lastMessageRecieve = messages.data.find(({ from }) => session.from !== from)
  const date = new Date(lastMessageRecieve?.sentAt || 0)
  const yesterday = new Date()
  yesterday.setDate(yesterday.getDate() - 1)
  const last = date.getTime()
  const diff = last - yesterday.getTime()

  yield put(setBlocked(diff < 0))
  const channel = yield call(countdown, diff)
  yield takeEvery(channel, function* () {
    yield put(recieveMessage([]))
  })
  return lastMessageRecieve
}

const getSession = (state: ApplicationState) => state.session
const getMessages = (state: ApplicationState) => state.messages
