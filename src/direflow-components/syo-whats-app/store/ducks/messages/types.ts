/**
 * Action types
 */
export enum MessagesTypes {
  LOAD_REQUEST = 'messages/LOAD_REQUEST',
  LOAD_SUCCESS = 'messages/LOAD_SUCCESS',
  LOAD_FAILURE = 'messages/LOAD_FAILURE',
  SEND_MESSAGE_REQUEST = 'messages/SEND_MESSAGE_REQUEST',
  SEND_MESSAGE_REQUEST_TEXT = 'messages/SEND_MESSAGE_REQUEST_TEXT',
  SEND_MESSAGE_FAILURE = 'messages/PUSH_FAILURE',
  RECIEVE_MESSAGE = 'messages/RECIEVE_MESSAGE',
  RESPONSE_MESSAGE = 'messages/RESPONSE',
}

/**
  * Data types
  */
export interface Message {
  messageId: string
  from: string
  to: string
  integrationType: 'WHATSAPP'
  message: TextMessage
  sentAt: string
  doneAt?: string
}

export interface TextMessage {
  type: 'TEXT'
  text: string
  context?: Context
}

export interface Context {
  from: string
  id: string
}

/**
 * State type
 */
export interface MessagesState {
  readonly data: Message[]
  readonly responseMessage?: Message
  readonly loading: boolean
  readonly error: boolean
}