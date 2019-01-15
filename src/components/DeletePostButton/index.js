import { connect } from 'react-redux';

import DeletePostButton from './component';

function mapDispatchToProps() {
  return {
    cancelDelete(postId) {
      console.log(`Canceled Delete: ${postId}`);
    },
    confirmDelete(postId) {
      console.log(`Confirmed Delete: ${postId}`);
    },
  };
}

export default connect(null, mapDispatchToProps)(DeletePostButton);
