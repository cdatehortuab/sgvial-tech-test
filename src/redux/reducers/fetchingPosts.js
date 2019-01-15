import { Set } from 'immutable';

import {
  FETCH_POST_START,
  FETCH_POST_SUCCESS,
  FETCH_POST_FAILED,
  FETCH_POSTS_START,
  FETCH_POSTS_SUCCESS,
  FETCH_POSTS_FAILED,
} from '../actions/types';

export const FETCHING_ALL = 'ALL';
export const NO_FETCHING = false;

export default function fetchingPostsReducer(state = Set(), action) {
  switch (action.type) {
    case FETCH_POST_START:
      return state.add(action.postId);
    case FETCH_POSTS_START:
      return state.add(FETCHING_ALL);
    case FETCH_POST_FAILED:
    case FETCH_POST_SUCCESS:
      return state.remove(action.postId);
    case FETCH_POSTS_FAILED:
    case FETCH_POSTS_SUCCESS:
      return state.remove(FETCHING_ALL);
    default:
      return state;
  }
}
