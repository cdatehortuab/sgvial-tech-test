import {
  SUFFIX_START,
  SUFFIX_SUCCESS,
  SUFFIX_FAILED,
  FETCH_POSTS,
  FETCH_POST,
} from './types';

const API_BASE_URL = 'https://jsonplaceholder.typicode.com';

function fetchActionCreator(request, baseAction, payload = {}) {
  return async (dispatch) => {
    dispatch({
      type: `${baseAction}${SUFFIX_START}`,
      ...payload,
    });
    try {
      const apiResponse = await fetch(`${API_BASE_URL}${request}`);
      if (apiResponse.ok) {
        const response = await apiResponse.json();
        dispatch({
          type: `${baseAction}${SUFFIX_SUCCESS}`,
          response,
          ...payload,
        });
      } else {
        throw new Error(apiResponse.statusText);
      }
    } catch (error) {
      dispatch({
        type: `${baseAction}${SUFFIX_FAILED}`,
        ...payload,
      });
    }
  };
}

export function fetchPosts() {
  return fetchActionCreator('/posts', FETCH_POSTS);
}

export function fetchPost(postId) {
  return fetchActionCreator(`/posts/${postId}`, FETCH_POST, { postId: `${postId}` });
}
