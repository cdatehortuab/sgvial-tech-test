import { Map, fromJS } from 'immutable';

import {
  FETCH_POSTS_SUCCESS,
  FETCH_POST_SUCCESS,
  SUBMIT_POST_FORM_SUCCESS,
  DELETE_POST_SUCCESS,
} from '../actions/types';

export default function postsReducer(state = Map(), action) {
  let immutableResponse;
  let newState;
  switch (action.type) {
    case FETCH_POSTS_SUCCESS:
      immutableResponse = fromJS(action.response);
      newState = state;
      immutableResponse.forEach((post) => { newState = newState.set(`${post.get('id')}`, post); });
      return newState;
    case FETCH_POST_SUCCESS:
      immutableResponse = fromJS(action.response);
      return state.set(`${immutableResponse.get('id')}`, immutableResponse);
    case SUBMIT_POST_FORM_SUCCESS:
      immutableResponse = fromJS(action.data);
      return state.set(`${action.response.id}`, immutableResponse);
    case DELETE_POST_SUCCESS:
      return state.delete(`${action.postId}`);
    default:
      return state;
  }
}
