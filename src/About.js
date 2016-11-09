import React, { PropTypes, Component } from 'react';
import 'whatwg-fetch';

export default class About extends Component {
  // static propTypes = {}
  // static defaultProps = {}
  // state = {}

  constructor () {
    super();

    this.state = {
      url: 'static state content'
    }
  }

  componentDidMount() {
    console.log('in comp did mount')
  }

  render() {
    const { className, ...props } = this.props;
    return (
      <div>
        <h1>
          About!
        </h1>
        <p>{this.state.url === '' ? 'loading..' : this.state.url}</p>
      </div>
    );
  }
}
