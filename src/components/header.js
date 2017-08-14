// Import libraries for making a component
import React from 'react';
import { Text, View } from 'react-native';

// Make a component

// Flexbox is a system of positioning elements within a container

/*
This is a functional component.
- Used for presenting static data.
- Can't handle fetching data.
- Easy to write.

*/

const Header = (props) => {
  // deestructuring
  const { textStyle, viewStyle } = styles;
  // "style" is a props of "Text"
  return (
    // I could also use "styles.viewStyle"
    <View style={viewStyle}>
      <Text style={textStyle}>{props.headerText}</Text>
    </View>
  );
};

const styles = {
  viewStyle: {
    backgroundColor: '#F8F8F8',
    // vertical
    justifyContent: 'center',
    // horizontal
    alignItems: 'center',
    height: 60,
    paddingTop: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    elevation: 2,
    position: 'relative'
  },
  textStyle: {
    fontSize: 20
  }
};

// Make the component available to other parts of the App
export default Header;
