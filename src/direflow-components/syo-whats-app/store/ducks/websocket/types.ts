/**
 * Action types
 */
export enum WebServiceTypes {
  WS_CONNECT = 'ws/CONNECT',
  WS_CONNECTING = 'ws/CONNECTING',
  WS_DISCONNECTED = 'ws/DISCONNECTED',
  WS_CONNECTED = 'ws/CONNECTED',
  ENTER_ROOM = 'ws/ENTER_ROOM'
}

/**
 * State type
 */
export interface WebSocketState {
  readonly error: boolean
  readonly connected: boolean
  readonly connecting: boolean
}
export interface WebsocketConfig {
  readonly websocket: string
  readonly room: string
}
