import React, { Component } from 'react';
import Header from '../components/header';
import Button from '../components/button';

const listing = {
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
};

// eslint-disable-next-line react/prefer-stateless-function
class ExpandedListing extends Component {
//   constructor(props) {
//     super(props);

  //     this.state = {
  //     };
  //   }

  render() {
    return (
      <div className="pageContainer">
        <Header type="listing" onLoginClick={this.showLogin} onSignupClick={this.showSignup} />
        <div className="dashboardContainer">
          <div className="dashTop">
            <div className="expTopLeft">
              <p id="bold">{listing.title}</p>
              <p>{listing.address}</p>
              <p>Lease dates: {listing.range}</p>
            </div>
            <div className="expTopRight">
              <div className="expRow">
                <p>Landlord: Steve A</p>
                <img src="src/img/stars.png" alt="review" height="18" />
              </div>
              <div className="expRow">
                <p>(555) 555-5555 steve.a@landlord.com</p>
              </div>
              <div className="expRow">
                <Button text="CONTACT" type="smallButton" />
                <Button text="SEE REVIEWS" type="smallButton" />
              </div>
            </div>
          </div>
          <div className="expImages">
            <img src="src/img/kitchen.png" alt="kitchen" height="280" className="mainImage" />
            <img src="src/img/kitchen.png" alt="kitchen" height="280" className="mainImage" />
            <img src="src/img/kitchen.png" alt="kitchen" height="280" className="mainImage" />
          </div>
          <div className="expBottom">
            <div className="expBottomLeft">
              <p id="expDescription">{listing.description}</p>
            </div>
            <div className="expBottomRight">
              <p id="bold">QUICK HITS</p>
              <div className="row">
                <img src="src/img/money-bill.png" alt="money" width="15" />
                <p id="marginLeft">$2500/mo rent</p>
              </div>

              <div className="row">
                <img src="src/img/bed.png" alt="bed" width="15" />
                <p id="marginLeft">3 bedrooms</p>
              </div>

              <div className="row">
                <img src="src/img/bath.png" alt="bath" width="15" />
                <p id="marginLeft">2 bathrooms</p>
              </div>

              <div className="row">
                <img src="src/img/util.png" alt="utilities" width="15" />
                <p id="marginLeft">utilities include</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ExpandedListing;
