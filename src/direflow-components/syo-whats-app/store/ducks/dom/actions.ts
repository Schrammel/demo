import { action } from 'typesafe-actions'
import { DomTypes } from './types'

export const setInputBottom = (data: HTMLInputElement) => action(DomTypes.INPUT_BOTTOM, { data })
export const setRootDom = (data: HTMLDivElement) => action(DomTypes.ROOT, { data })
