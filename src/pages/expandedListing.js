import React, { Component } from 'react';
import Header from '../components/header';

// eslint-disable-next-line react/prefer-stateless-function
class ExpandedListing extends Component {
  constructor(props) {
    super(props);

    this.state = {
      // eslint-disable-next-line react/no-unused-state
      listing: this.props.listing,
    };
  }

  render() {
    return (
      <div className="pageContainer">
        <Header type="home" onLoginClick={this.showLogin} onSignupClick={this.showSignup} />
        <div className="dashboardContainer">
          <div className="dashTop">
            <div className="expTopLeft">
              <p>foo</p>
            </div>
            <div className="expTopRight">
              <p>foo</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ExpandedListing;
