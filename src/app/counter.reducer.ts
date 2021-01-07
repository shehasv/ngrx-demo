import { createReducer, on } from '@ngrx/store';
import { increment, decrement, reset,upvote, downvote, storedata } from './counter.actions';
 
export const initialState = 0;
 
const _counterReducer = createReducer(
  initialState,
  on(increment, (state) => state + 1),
  on(decrement, (state) => state - 1),
  on(upvote, (state) => state + 10),
  on(downvote, (state) => state - 5 ),
  on(reset, (state) => 0),
  on(storedata,(state) =>{
    console.log(state)
    return state;
  })
);
 
export function counterReducer(state, action) {
  return _counterReducer(state, action);
}