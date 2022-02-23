import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { toggleModal } from '../actions';
import Button from './button';

// eslint-disable-next-line react/prefer-stateless-function
class Modal extends Component {
  // constructor(props) {
  //     super(props);

  //     this.state = {
  //     }
  // }

  renderLogin = () => {
    return (
      <p>login</p>
    );
  }

  renderSignup = () => {
    return (
      <p>signup</p>
    );
  }

  render() {
    return (
      <div className="modal">
        <Button text="X" onClick={this.props.toggleModal} />
        {this.props.type === 'login' && this.renderLogin()}
        {this.props.type === 'signup' && this.renderSignup()}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    showModal: state.modal.modalState,
  };
}

export default withRouter(connect(mapStateToProps, { toggleModal })(Modal));
