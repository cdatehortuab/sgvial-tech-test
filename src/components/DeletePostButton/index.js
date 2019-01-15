import { connect } from 'react-redux';

import { confirmDelete } from '../../redux/actions';

import DeletePostButton from './component';

const mapDispatchToProps = {
  confirmDelete,
};

export default connect(null, mapDispatchToProps)(DeletePostButton);
