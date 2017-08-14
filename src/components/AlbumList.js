import React, { Component } from 'react';
// deestructuring
import { View, Text } from 'react-native';
import axios from 'axios';

/*
Class component / Class based
- Extends a base class of component
- Used for dynamic sources of data
- Handles any data that might change (fetching data, user events, etc).
- Knows when it gets rendered to the device (useful for data fetching).
- More code to write.

- It MUST override the render method!
*/

/*
State:
- A plain js object used to record and respond to user-triggered events.
- When we need to update what a component shows, call this.setState.
- Only CHANGE state with setState, do not do this.state.
*/

/*
props -> parent to child communication
state -> component's intern record keeping
*/

class AlbumList extends Component {

  // class level property
  // this is the initial state for the component (an empty state)
  state = { albums: [] };

  // the only way to change a state after initalizing is using this.setState

  componentWillMount() {
    axios.get('https://rallycoding.herokuapp.com/api/music_albums')
    .then(response => this.setState({ albums: response.data }));
  }

  renderAlbums() {
    // To reference some js variables inside jsx, you must wrap it using
    // curly braces { }
    return this.state.albums.map(album =>
      <Text key={album.title}>{album.title}</Text>
    );
  }

  render() {
    return (
      <View>
        {this.renderAlbums()}
      </View>
    );
  }
}

export default AlbumList;
