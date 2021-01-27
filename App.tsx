import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import RootNavigator from './Navigation/index';

const MyApp = props => {
  return (
    
    <View style={styles.screen}>
      <RootNavigator />
    </View>
   
  );
};

const styles = StyleSheet.create({

  screen: {
    flex: 1,
  },
  
});

export default MyApp;