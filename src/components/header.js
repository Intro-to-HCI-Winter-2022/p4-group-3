import React, { Component } from 'react';
import Button from './button';
import RouteButton from './routeButton';

// eslint-disable-next-line react/prefer-stateless-function
class Header extends Component {
  constructor(props) {
    super(props);

    this.state = {
      type: this.props.type,
    };
  }

  render() {
    return (
      <div className="headerContainer">
        <div className="leftHeaderContainer">
          <p className="logo">DARTMOUTH HOUSING</p>
        </div>
        <div className="rightHeaderContainer">
          {this.state.type === 'home' && <Button text="LOG IN" type="bigButton" onClick={this.props.onLoginClick} />}
          {this.state.type === 'home' && <Button id="signup" text="SIGN UP" type="bigButton" onClick={this.props.onSignupClick} />}
          {this.state.type === 'listing' && <RouteButton destination="/dashboard" text="BACK" />}
          {(this.state.type === 'listing' || this.state.type === 'dashboard') && <img id="marginLeft" src="src/img/menu.png" alt="menu" height="20" />}
        </div>
      </div>
    );
  }
}

export default Header;
