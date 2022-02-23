import React, { Component } from 'react';
import Button from './button';

// eslint-disable-next-line react/prefer-stateless-function
class Header extends Component {
  // constructor(props) {
  //     super(props);

  //     this.state = {
  //     }
  // }

  render() {
    return (
      <div className="headerContainer">
        <div className="leftHeaderContainer">
          <p className="logo">DARTMOUTH HOUSING</p>
        </div>
        <div className="rightHeaderContainer">
          <Button text="LOG IN" type="bigButton" />
          <Button id="signup" text="SIGN UP" type="bigButton" />
        </div>
      </div>
    );
  }
}

export default Header;