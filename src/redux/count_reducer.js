import {ADD,SUB} from './constant'

const initState = 0;
export default function countReducer(prev = initState, action) {
  const { type, data } = action;
  switch (type) {
    case ADD:
      return prev + parseInt(data);
    case SUB:
      return prev - parseInt(data);
    default:
      return prev;
  }
}
