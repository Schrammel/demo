import { createStore, combineReducers } from 'redux'

import { Message } from './ducks/messages/types'

const reducers = combineReducers({
    messages: (): Message[] => [],
})

function storeConfig() {
    return createStore(reducers)
}

export default storeConfig
