import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import Header from '../components/header';
import Modal from '../components/modal';
import { toggleModal } from '../actions';

// eslint-disable-next-line react/prefer-stateless-function
class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      type: null,
    };
  }

  showLogin = () => {
    this.props.toggleModal();
    this.setState({
      type: 'login',
    });
  }

  showSignup = () => {
    this.props.toggleModal();
    this.setState({
      type: 'signup',
    });
  }

  render() {
    return (
      <div className="pageContainer">
        <Header onLoginClick={this.showLogin} onSignupClick={this.showSignup} />
        <div className="landingPageContainer">
          <p id="mainName">DARTMOUTH HOUSING</p>
          <p id="mainSubtitle">FIND YOUR PERFECT HOME</p>
        </div>
        {/* Page-mask technique https://stackoverflow.com/questions/31054353/darken-the-entire-page-when-opening-and-produce-a-fade-out-effect-when-closing-a */}
        {this.props.showModal && <div id="page-mask" />}
        {this.props.showModal && <Modal type={this.state.type} /> }
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    showModal: state.modal.modalState,
  };
}

export default withRouter(connect(mapStateToProps, { toggleModal })(Home));
