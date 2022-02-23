import React, { Component } from 'react';

class Button extends Component {
  constructor(props) {
    super(props);

    this.state = {
      type: props.type,
      text: props.text,
      onClick: props.onClick,
    };
  }

  render() {
    return (
      <button id={this.props.id} className={`themedButton ${this.state.type}`} type="button" onClick={this.state.onClick}>{this.state.text}</button>
    );
  }
}

export default Button;
