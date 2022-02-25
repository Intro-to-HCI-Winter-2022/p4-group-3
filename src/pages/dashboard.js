import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import Header from '../components/header';

// eslint-disable-next-line react/prefer-stateless-function
class Dashboard extends Component {
  constructor(props) {
    super(props);

    this.state = {
    };
  }

  render() {
    return (
      <div className="pageContainer">
        <Header onLoginClick={this.showLogin} onSignupClick={this.showSignup} />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    showModal: state.modal.modalState,
  };
}

export default withRouter(connect(mapStateToProps)(Dashboard));
