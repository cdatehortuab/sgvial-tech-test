import { DELETE_POST_SUCCESS, FETCH_POSTS_START } from '../actions/types';

export default function lastDeletedReducer(state = null, action) {
  switch (action.type) {
    case DELETE_POST_SUCCESS:
      return `${action.postId}`;
    case FETCH_POSTS_START:
      return null;
    default:
      return state;
  }
}
