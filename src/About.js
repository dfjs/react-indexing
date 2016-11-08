import React, { PropTypes, Component } from 'react';
import 'whatwg-fetch';

export default class About extends Component {
  // static propTypes = {}
  // static defaultProps = {}
  // state = {}

  constructor () {
    super();

    this.state = {
      url: ''
    }
  }

  componentWillMount() {
    fetch('http://httpbin.org/delay/5')
      .then((response) => {
        console.log('response', response.url);
        this.setState({ url: response.url });
      })
  }

  render() {
    const { className, ...props } = this.props;
    return (
      <div {...props}>
        <h1>
          About
        </h1>
        <p>{this.state.url}</p>
      </div>
    );
  }
}
