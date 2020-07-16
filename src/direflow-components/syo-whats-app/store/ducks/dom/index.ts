import { Reducer } from 'redux'

import { DomTypes, DomState } from './types'

const INITIAL_STATE: DomState = {}

const reducer: Reducer<DomState> = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case DomTypes.INPUT_BOTTOM:
      return { ...state, inputBottom: action.payload.data }
    case DomTypes.ROOT:
      return { ...state, root: action.payload.data }
    default:
      return state
  }
}

export default reducer