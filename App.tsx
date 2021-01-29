import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import RootNavigator from './Navigation/index';

import Amplify from 'aws-amplify'
import config from './src/aws-exports'
Amplify.configure(config)

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