import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Collection from './Collection.js';

class App extends Component {
  state = { isLoading: true, items: [] };

  componentDidMount() {
    fetch('/api/podhistory/')
      .then(response => response.json())
      .then(data =>
        this.setState({
          isLoading: false,
          items: data.entries
        })
      );
  }

  render() {
    return(
      <div className="App">
        {this.state.isLoading &&
          <img src={logo} className="App-logo" alt="logo" />}

        <Collection items={this.state.items} />
      </div>
    );
  }
}

export default App;
