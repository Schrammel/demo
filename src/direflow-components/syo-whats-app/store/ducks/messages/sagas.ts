import io from 'socket.io-client'
import { eventChannel, END } from 'redux-saga'
import { call, put, take, race, select } from 'redux-saga/effects'

import { ApplicationState } from '../..'
import { disconnected, connected, connecting } from '../websocket/actions'
import { Effect } from '../types'
import { SessionState } from '../session/types'
import { MessagesTypes, Message, MessagesState } from './types'
import { sendMessageRequest, setReplyMessage, recieveMessage } from './actions'

function createSocketChannel<T>(socket: SocketIOClient.Socket, event: string, def?: T) {
  return eventChannel<T>(emit => {
    const newEmmit = (value: T) => emit(value || def || END)
    socket.on(event, newEmmit)
    return () => {
      socket.off(event, newEmmit)
    }
  })
}

export function* sendMessage(data?: Effect<string>) {
  const session: SessionState = yield select(getSession)
  const { responseMessage }: MessagesState = yield select(getMessages)

  const message: Message = {
    from: session.from,
    to: session.to,
    integrationType: 'WHATSAPP',
    messageId: Math.random().toString(36).substring(7),
    sentAt: new Date().toISOString(),
    message: {
      text: data?.payload.data ?? '',
      type: 'TEXT',
    }
  }

  if (responseMessage) {
    message.message.context = {
      from: session.from,
      id: responseMessage?.messageId,
    }
    yield put(setReplyMessage(undefined))
  }

  yield put(sendMessageRequest(message))
}

export function* websocketFlow() {
  yield put(connecting())
  const session: SessionState = yield select(getSession)
  const socket = io(session.websocket)
  const recieveMessageChannel = yield call(createSocketChannel, socket, 'receive_message')
  const connectChannel = yield call(createSocketChannel, socket, 'connect', 'connect')
  const disconnectChannel = yield call(createSocketChannel, socket, 'disconnect', 'disconnect')
  while (true) {
    try {
      /**
       * A utilizacao do race tem como proposito de despachar o que vier primeiro
       * seja uma mensagem enviada ou recebida
       */
      const { newMessage, sendMessage, disconnect, connect } = yield race({
        sendMessage: take(MessagesTypes.SEND_MESSAGE_REQUEST),
        newMessage: take(recieveMessageChannel),
        disconnect: take(disconnectChannel),
        connect: take(connectChannel)
      })

      if (disconnect) {
        yield put(disconnected())
        yield put(connecting())
      }

      if (connect) {
        socket.emit('join_room', session.room)
        yield put(connected(true))
      }
      if (newMessage) {
        yield put(recieveMessage(newMessage))
      }

      if (sendMessage) {
        socket.emit('send_message', sendMessage.payload.data)
      }

    } catch (err) {
      console.error('socket error:', err)
      return
    }
  }
}

const getMessages = (state: ApplicationState) => state.messages
const getSession = (state: ApplicationState) => state.session
