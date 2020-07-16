/**
 * Action types
 */
export enum DomTypes {
  INPUT_BOTTOM = 'DOM/INPUT_BOTTOM',
  ROOT = 'DOM/ROOT'
}

export interface DomState {
  readonly inputBottom?: HTMLInputElement
  readonly root?: HTMLDivElement
}