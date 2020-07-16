import { action } from 'typesafe-actions'
import { WebServiceTypes } from './types'

export const connectWS = () => action(WebServiceTypes.WS_CONNECT)
export const enterRoom = (data: string) => action(WebServiceTypes.ENTER_ROOM, { data })
export const connected = (data: boolean) => action(WebServiceTypes.WS_CONNECTED, { data })
export const disconnected = () => action(WebServiceTypes.WS_DISCONNECTED)
export const connecting = () => action(WebServiceTypes.WS_CONNECTING)