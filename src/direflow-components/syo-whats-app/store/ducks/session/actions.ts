import { action } from 'typesafe-actions'
import { SessionTypes } from './types'

export const setRoom = (data: string) => action(SessionTypes.SET_ROOM, { data })
export const setFrom = (data: string) => action(SessionTypes.SET_FROM, { data })
export const setTo = (data: string) => action(SessionTypes.SET_TO, { data })
export const setWebsocket = (data: string) => action(SessionTypes.SET_WEBSOCKET, { data })
export const setBlocked = (data: boolean) => action(SessionTypes.SET_BLOCK, { data })
