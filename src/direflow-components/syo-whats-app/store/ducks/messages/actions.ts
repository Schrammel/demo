import { action } from 'typesafe-actions'
import { MessagesTypes, Message } from './types'

export const sendMessageRequest = (data: Message) => action(MessagesTypes.SEND_MESSAGE_REQUEST, { data })
export const sendMessageText = (data: string) => action(MessagesTypes.SEND_MESSAGE_REQUEST_TEXT, { data })
export const setReplyMessage = (data?: Message) => action(MessagesTypes.RESPONSE_MESSAGE, { data })
export const recieveMessage = (data: Message | Message[]) => action(MessagesTypes.RECIEVE_MESSAGE, { data })
