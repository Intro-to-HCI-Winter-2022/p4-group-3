/* eslint-disable react/no-unescaped-entities */
import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import Header from '../components/header';
import Button from '../components/button';

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
    img: 'src/img/unsplash_178j8tJrNlc.png',
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
    img: 'src/img/unsplash_178j8tJrNlc.png',
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
    img: 'src/img/unsplash_178j8tJrNlc.png',
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
    return listings.map((item, index) => {
      return (
        <div key={index.toString()} className="listingContainer">
          <div className="listingLeft">
            <div className="listingLeftTop">
              <div className="listingLeftTopLeft">
                <p id="title">{item.title}</p>
                <p>{item.address}</p>
                <div className="listingPrice">
                  <img alt="money" src="src/img/money-bill.png" height="15" />
                  <p id="indent">{item.price}</p>
                  <img alt="bed" src="src/img/bed.png" height="12" />
                  <p id="indent">{item.bed}</p>
                  <img alt="bath" src="src/img/bath.png" height="15" />
                  <p id="indent">{item.bath}</p>
                  <img alt="util" src="src/img/util.png" height="15" />
                  <p>{item.util}</p>
                </div>
              </div>
              <div className="listingLeftTopRight">
                <p>{item.range}</p>
                <p>{item.appStatus}</p>
              </div>
            </div>
            <div className="listingLeftBottom">
              <p id="description">{item.description}</p>
            </div>
          </div>
          <div className="listingRight">
            <img id="listingImage" src={item.img} alt="house" />
          </div>
        </div>
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
            <div className="filterContainer">
              <div className="filterTop">
                <p>I'm looking for...</p>
              </div>
              <div className="filterPrice">
                <div>
                  <p>Price min</p>
                  <div className="filterPrice">
                    <p>$</p>
                    <input className="smallInput" />
                  </div>
                </div>
                <div>
                  <p id="marginLeft">Price max</p>
                  <div className="filterPrice">
                    <p id="marginLeft">$</p>
                    <input className="smallInput" />
                  </div>
                </div>
              </div>
              <div className="filterBed">
                <img alt="bed" src="src/img/bed.png" height="12" />
                <input className="smallInput" id="marginLeft" />
              </div>
              <div className="filterBath">
                <img alt="bath" src="src/img/bath.png" height="20" />
                <input className="smallInput" id="marginLeft" />
              </div>
              <div className="filterLocation">
                <p>Houses in...</p>
                <div className="row">
                  <div className="rowSide"><input className="checkInput" type="checkbox" />
                    <p>Hanover</p>
                  </div>
                  <div className="rowSide"><input className="checkInput" type="checkbox" />
                    <p>Norwich</p>
                  </div>
                </div>
                <div className="row">
                  <div className="rowSide"><input className="checkInput" type="checkbox" />
                    <p>Lebanon</p>
                  </div>
                  <div className="rowSide"><input className="checkInput" type="checkbox" />
                    <p>Lyme</p>
                  </div>
                </div>
                <div className="row">
                  <div className="rowSide"><input className="checkInput" type="checkbox" />
                    <p>WRJ</p>
                  </div>
                  <div className="rowSide"><input className="checkInput" type="checkbox" />
                    <p>Etna</p>
                  </div>
                </div>
              </div>
              <div className="filterDate">
                <div id="marginBottom" className="row">
                  <p>Starts after</p>
                  <input className="smallInput" />
                </div>
                <div className="row">
                  <p>Ends before</p>
                  <input className="smallInput" />
                </div>
              </div>
              <div className="filterButtons">
                <div className="row">
                  <Button text="FILTER" type="smallButton" />
                  <Button text="RESET" type="smallButton" />
                </div>
              </div>
            </div>
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