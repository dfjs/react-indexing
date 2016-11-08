import React, { PropTypes, Component } from 'react';

export default class About extends Component {
  // static propTypes = {}
  // static defaultProps = {}
  // state = {}

  render() {
    const { className, ...props } = this.props;
    return (
      <div {...props}>
        <h1>
          About
        </h1>
      </div>
    );
  }
}

