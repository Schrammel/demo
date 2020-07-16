import { ApplicationState } from '../..'
import { DomState } from './types'
import { select, Effect } from 'redux-saga/effects'
import { Message } from '../messages/types'


export function* inputBottomFoco(effect: Effect<{ data: Message | undefined }>) {
  if (!effect.payload?.data) {
    return
  }
  const { inputBottom }: DomState = yield select(getdom)
  inputBottom?.focus()
}

const getdom = (state: ApplicationState) => state.dom