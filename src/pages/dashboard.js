import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import Header from '../components/header';

const listings = [
  {
    title: 'GREAT 3BR APT ON ALLEN ST.',
    address: '123 Allen St. Hanover NH 03755',
    price: '$2500',
    bed: 3,
    bath: 2,
    util: 'incl',
    range: '9/1/21 - 8/31/22',
    appStatus: 'Accepting Applicants',
    img: 'path',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem',
  },
  {
    title: 'GREAT 3BR APT ON ALLEN ST.',
    address: '123 Allen St. Hanover NH 03755',
    price: '$2500',
    bed: 3,
    bath: 2,
    util: 'incl',
    range: '9/1/21 - 8/31/22',
    appStatus: 'Accepting Applicants',
    img: 'path',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem',
  },
  {
    title: 'GREAT 3BR APT ON ALLEN ST.',
    address: '123 Allen St. Hanover NH 03755',
    price: '$2500',
    bed: 3,
    bath: 2,
    util: 'incl',
    range: '9/1/21 - 8/31/22',
    appStatus: 'Accepting Applicants',
    img: 'path',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem',
  },
];

// eslint-disable-next-line react/prefer-stateless-function
class Dashboard extends Component {
  constructor(props) {
    super(props);

    this.state = {
    };
  }

  renderListings = () => {
    return listings.map((item) => {
      return (
        <p>RENDER LISTINGS HERE</p>
      );
    });
  }

  render() {
    return (
      <div className="pageContainer">
        <Header onLoginClick={this.showLogin} onSignupClick={this.showSignup} />
        <div className="dashboardContainer">
          <div className="dashTop">
            <div className="dashTopLeft">
              <p>DASHBOARD</p>
              <input className="searchInput" placeholder="Search" />
            </div>
            <div className="spacer" />
          </div>
          <div className="dashBody">
            <div className="listingsContainer">
              {this.renderListings()}
            </div>
            <div className="filterContainer">foo</div>
          </div>
        </div>
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
