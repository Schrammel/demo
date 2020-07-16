import { createStore, applyMiddleware, Store } from 'redux'
import createSagaMiddleware from 'redux-saga'

import rootReducer from './ducks/rootReducer'
import rootSaga from './ducks/rootSagas'
import { WebSocketState } from './ducks/websocket/types'
import { MessagesState } from './ducks/messages/types'
import { SessionState } from './ducks/session/types'
import { DomState } from './ducks/dom/types'

export interface ApplicationState {
  messages: MessagesState
  websocket: WebSocketState
  session: SessionState
  dom: DomState
}

const sagaMiddleware = createSagaMiddleware()
const store: Store<ApplicationState> = createStore(rootReducer, applyMiddleware(sagaMiddleware))
sagaMiddleware.run(rootSaga)

export default store
