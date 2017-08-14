// Index.android.js - place code in here for android

// Import a library to help create a Component
import React from 'react';
// This means I only want these components from the react-native library
import { AppRegistry, View } from 'react-native';
import Header from './src/components/header';
import AlbumList from './src/components/AlbumList';

// Create a Component
const App = () => (
    // Component nesting: put one component inside another
    // It must always return only one element, that's why we should wrap all
    // the elements
    <View>
      <Header headerText={'Albums!'} />
      <AlbumList />
    </View>
);

// Render it to the device

// the first parameter must match the project name
// the second parameter must be a function that returns the first component to
// render the application

// Only the root component uses AppRegistry
AppRegistry.registerComponent('albums', () => App);
