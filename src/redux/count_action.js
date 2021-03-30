import {ADD,SUB} from './constant'

export function addAction(data) {
  return { type: ADD, data };
}
export function subAction(data) {
  return { type: SUB, data };
}
