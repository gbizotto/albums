import React from 'react';
import { View, TextView } from 'react-native';

const CardSection = (props) => {
  return (
    <View style={styles.containerStyle}>
      <View>
      </View>
      <View>
        <TextView></TextView>
        <TextView></TextView>
      </View>
      {props.children}
    </View>
  );
};

const styles = {
  containerStyle: {
    borderBottomWidth: 1,
    padding: 5,
    backgroundColor: '#fff',
    justifyContent: 'flex-start',
    flexDirection: 'row',
    borderColor: '#ddd',
    position: 'relative'
  }
};

export default CardSection;
