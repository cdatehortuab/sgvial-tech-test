import {
  SUFFIX_START,
  SUFFIX_SUCCESS,
  SUFFIX_FAILED,
  FETCH_POSTS,
  FETCH_POST,
  SUBMIT_POST_FORM_START,
  SUBMIT_POST_FORM_SUCCESS,
  SUBMIT_POST_FORM_FAILED,
  DELETE_POST_START,
  DELETE_POST_SUCCESS,
  DELETE_POST_FAILED,
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

export function submitPostForm(dispatch, savedPost) {
  return async ({ title, body }) => {
    let method = 'POST';
    let endpoint = '/posts';
    const data = {
      title,
      body,
      userId: 1,
    };

    if (savedPost) {
      const id = savedPost.get('id');
      if (id) {
        method = 'PUT';
        endpoint = `/posts/${id}`;
        data.userId = savedPost.get('userId');
        data.id = id;
      }
    }

    dispatch({
      type: SUBMIT_POST_FORM_START,
    });

    try {
      const apiResponse = await fetch(`${API_BASE_URL}${endpoint}`, {
        method,
        body: JSON.stringify(data),
      });

      if (apiResponse.ok) {
        const response = await apiResponse.json();
        dispatch({
          type: SUBMIT_POST_FORM_SUCCESS,
          response,
          data,
        });
      } else {
        throw new Error(apiResponse.statusText);
      }
    } catch (error) {
      dispatch({
        type: SUBMIT_POST_FORM_FAILED,
      });
    }
  };
}

export function confirmDelete(postId) {
  return async (dispatch) => {
    dispatch({
      type: DELETE_POST_START,
      postId,
    });
    try {
      const apiResponse = await fetch(`${API_BASE_URL}/posts/${postId}`, { method: 'DELETE' });
      if (apiResponse.ok) {
        dispatch({
          type: DELETE_POST_SUCCESS,
          postId,
        });
      } else {
        throw new Error(apiResponse.statusText);
      }
    } catch (error) {
      dispatch({
        type: DELETE_POST_FAILED,
        postId,
      });
    }
  };
}
