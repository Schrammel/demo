/**
 * Action types
 */
export enum SessionTypes {
  SET_TO = 'session/TO',
  SET_FROM = 'session/FROM',
  SET_ROOM = 'session/ROOM',
  SET_WEBSOCKET = 'session/WEBSOCKET',
  SET_BLOCK = 'session/BLOCK'
}

export interface SessionState {
  readonly from: string
  readonly room: string
  readonly to: string
  readonly websocket: string
  readonly blocked: boolean
}