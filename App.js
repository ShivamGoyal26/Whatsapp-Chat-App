import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const MyApp = props => {
  return (
    <View>
      <Text>Hello there</Text>
    </View>
  );
};

const styles = StyleSheet.create({

  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

export default MyApp;