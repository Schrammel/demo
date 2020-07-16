export interface Effect<T> {
  payload: { data: T }
}