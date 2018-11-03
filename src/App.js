import React, { Component } from 'react';
import data from './api.json';

import Home from './pages/containers/home'

class App extends Component {
  render() {
    return (
        <Home data={data} />
    );
  }
}

export default App;
