// Index.android.js - place code in here for android

// Import a library to help create a Component
import React from 'react';
// This means I only want these components from the react-native library
import { AppRegistry } from 'react-native';
import Header from './src/components/header';

// Create a Component
const App = () => (
    // Component nesting: put one component inside another
    <Header headerText={'Albums!'} />
);

// Render it to the device

// the first parameter must match the project name
// the second parameter must be a function that returns the first component to
// render the application

// Only the root component uses AppRegistry
AppRegistry.registerComponent('albums', () => App);
