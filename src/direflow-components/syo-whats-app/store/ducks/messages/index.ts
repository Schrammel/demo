import { Reducer } from 'redux'

import { MessagesState, MessagesTypes, Message } from './types'

const INITIAL_STATE: MessagesState = {
  data: [],
  error: false,
  loading: false
}

const reducer: Reducer<MessagesState> = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case MessagesTypes.LOAD_REQUEST:
      return { ...state, loading: true }
    case MessagesTypes.LOAD_SUCCESS:
      return { ...state, loading: false, error: false, data: action.payload.data }
    case MessagesTypes.LOAD_FAILURE:
      return { ...state, loading: false, error: true, data: [] }
    case MessagesTypes.RECIEVE_MESSAGE:
    case MessagesTypes.SEND_MESSAGE_REQUEST:
      return { ...state, data: unique([...state.data, ...parseToarray(action.payload.data)]) }
    case MessagesTypes.RESPONSE_MESSAGE:
      return { ...state, responseMessage: action.payload.data }
    default:
      return state
  }
}

const parseToarray = <T>(value: T | T[]) => {
  return Array.isArray(value) ? value : [value]
}

const unique = (array: Message[]) => {
  return array.sort(a1 => a1.doneAt ? -1 : 1)
    .reduce<Message[]>((list, current) => {
      if (!list.find(i => i.messageId === current.messageId)) {
        list.push(current)
      }
      return list
    }, [])
}

export default reducer
