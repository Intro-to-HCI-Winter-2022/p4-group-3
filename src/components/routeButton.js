// IMPORTANT: This file is adapted from part of Mack's CS98 project.
// https://github.com/dartmouth-cs98/21f-doctor-chatbot/blob/main/src/components/route-button.js

import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class RouteButton extends Component {
  constructor(props) {
    super(props);

    this.state = {
      destination: props.destination,
      text: props.text,
      isDisabled: props.disabled,
    };
  }

  componentDidUpdate(prevProps) {
    if (this.props !== prevProps) {
      // eslint-disable-next-line react/no-did-update-set-state
      this.setState({
        isDisabled: this.props.disabled,
      });
    }
  }

  // Disable functionality from https://stackoverflow.com/questions/49297357/disabling-navlink-react-router
  handleClick(e) {
    if (this.state.isDisabled) {
      e.preventDefault();
    } else if (this.props.onClick) {
      this.props.onClick();
    }
  }

  render() {
    return (
      <NavLink onClick={(e) => this.handleClick(e)}
        to={this.state.destination}
        className={`themedButton ${this.state.isDisabled ? 'disabledNavlink' : ''}`}
      >{this.state.text}
      </NavLink>
    );
  }
}

export default RouteButton;
