import React from 'react';
import { Confirm } from 'semantic-ui-react';

export default class DeletePostButton extends React.PureComponent {
  constructor() {
    super();
    this.state = {
      isConfirmOpened: false,
    };

    this.openConfirm = this.openConfirm.bind(this);
  }

  closeConfirm() {
    this.setState({
      isConfirmOpened: false,
    });
  }

  openConfirm() {
    this.setState({
      isConfirmOpened: true,
    });
  }

  render() {
    const {
      showAs,
      cancelDelete,
      confirmDelete,
      postId,
      ...props
    } = this.props;
    const { isConfirmOpened } = this.state;
    const Component = showAs;
    return (
      <React.Fragment>
        <Component {...props} onClick={this.openConfirm} />
        <Confirm
          open={isConfirmOpened}
          onCancel={() => {
            cancelDelete(postId);
            this.closeConfirm();
          }}
          onConfirm={() => {
            confirmDelete(postId);
            this.closeConfirm();
          }}
        />
      </React.Fragment>
    );
  }
}
