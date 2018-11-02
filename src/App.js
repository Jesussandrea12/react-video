import React, { Component } from 'react';
import Playlist from './playlist/components/playlist';
import data from './api.json';

class App extends Component {
  render() {
    return (
        <Playlist data={data} />
    );
  }
}

export default App;
