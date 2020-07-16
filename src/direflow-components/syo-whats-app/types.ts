import * as sessionActions from './store/ducks/session/actions'
import { connectWS } from './store/ducks/websocket/actions'
import { actions } from './App'


export interface OwnProps {
  componentTitle: string
  from: string
  to: string
  room: string
  websocket: string
}

export type IProps = OwnProps;
export type ActionsProps = typeof actions;
