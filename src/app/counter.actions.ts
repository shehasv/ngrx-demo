import { createAction } from '@ngrx/store';

export const increment = createAction('[Counter Component] Increment');
export const decrement = createAction('[Counter Component] Decrement');
export const upvote = createAction('[Counter Component] Upvote');
export const downvote = createAction('[Counter Component] Downvote');
export const reset = createAction('[Counter Component] Reset');
export const storedata = createAction('[Counter Component] Storedata');
