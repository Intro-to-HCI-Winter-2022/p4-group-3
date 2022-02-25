import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { toggleModal } from '../actions';
import Button from './button';
import RouteButton from './routeButton';

// eslint-disable-next-line react/prefer-stateless-function
class Modal extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      pass: '',
      name: '',
      conf: '',
    };
  }

  updateEmailText = (e) => {
    this.setState({
      email: e.target.value,
    });
  }

  updatePassText = (e) => {
    this.setState({
      pass: e.target.value,
    });
  }

  updateNameText = (e) => {
    this.setState({
      name: e.target.value,
    });
  }

  updateConfText = (e) => {
    this.setState({
      conf: e.target.value,
    });
  }

  renderLogin = () => {
    return (
      <div className="authContainer">
        <p className="authTitle">Log In</p>
        <input className="modalInput" value={this.state.email} onChange={this.updateEmailText} placeholder="Enter email" />
        <input id="endInput" className="modalInput" value={this.state.pass} onChange={this.updatePassText} placeholder="Enter password" />
        <RouteButton destination="/dashboard" text="LOG IN" disabled={this.state.email === '' || this.state.pass === ''} />
      </div>

    );
  }

  renderSignup = () => {
    return (
      <div className="authContainer">
        <p className="authTitle">Register</p>
        <input className="modalInput" value={this.state.name} onChange={this.updateNameText} placeholder="Enter name" />
        <input className="modalInput" value={this.state.email} onChange={this.updateEmailText} placeholder="Enter email" />
        <input className="modalInput" value={this.state.pass} onChange={this.updatePassText} placeholder="Enter password" />
        <input id="endInput" className="modalInput" value={this.state.conf} onChange={this.updateConfText} placeholder="Confirm password" />
        {/* eslint-disable-next-line max-len */}
        <RouteButton destination="/dashboard" text="SIGN UP" disabled={this.state.email === '' || this.state.pass === '' || this.state.name === '' || this.state.conf === '' || this.state.conf !== this.state.pass} />
      </div>
    );
  }

  render() {
    return (
      <div className="modal">
        <div className="exitModal">
          <Button text="X" onClick={this.props.toggleModal} />
        </div>
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
