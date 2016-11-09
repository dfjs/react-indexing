import React, { Component } from 'react';
import Helmet from 'react-helmet';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
	      <Helmet title="Testing SEO Header" />
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Testing React indexing</h2>
        </div>
        <div className="content">
          {this.props.children}
        </div>
      </div>
    );
  }
}

export default App;
