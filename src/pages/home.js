import React, { Component } from 'react';
import Header from '../components/header';

// eslint-disable-next-line react/prefer-stateless-function
class Home extends Component {
  // constructor(props) {
  //     super(props);

  //     this.state = {
  //     }
  // }

  render() {
    return (
      <div className="pageContainer">
        <Header />
        <div className="landingPageContainer">
          <p id="mainName">DARTMOUTH HOUSING</p>
          <p id="mainSubtitle">FIND YOUR PERFECT HOME</p>
        </div>
      </div>

    );
  }
}

export default Home;
