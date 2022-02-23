import React, { Component } from 'react';
// import { withRouter } from 'react-router-dom';
// import { connect } from 'react-redux';

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
        <div className="cancel">X</div>
        {this.props.type === 'login' && this.renderLogin()}
        {this.props.type === 'signup' && this.renderSignup()}
      </div>
    );
  }
}

export default Modal;
