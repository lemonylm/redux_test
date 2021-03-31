import { ADD, SUB } from "./constant";
// import store from "./store";
// export function addAction(data) {
//   return { type: ADD, data };
// }
// export function subAction(data) {
//   return { type: SUB, data };
// }
// export function asyncAction(data, time) {
//   return function (dispatch) {
//     setTimeout(() => {
//       dispatch(addAction(data));
//     }, time);
//   };
// }
export const addAction=(data)=>({type:ADD,data})
export const subAction=(data)=>({type:SUB,data})
export const asyncAction = (data, time) => {
  return (dispatch) => {
    setTimeout(() => {
      dispatch(addAction(data));
    }, time);
  };
};
