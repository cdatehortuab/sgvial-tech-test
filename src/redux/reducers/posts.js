import { Map } from 'immutable';

const initialState = Map({
  '1ac': Map({
    id: '1ac',
    title: 'Test title',
    body: 'ABCD ABCD ABCD ABCD ABCD ABCD ABCD ABCD ABCD\nABCD ABCD ABCD ABCD ABCD ABCD ABCD ABCD ABCD ABCD ABCD ABCD ABCD',
  }),
});

export default function postsReducer(state = initialState, action) {
  switch (action) {
    default:
      return state;
  }
}
