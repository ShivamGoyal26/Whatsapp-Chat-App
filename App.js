import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import MainHeader from './Headers/MainHeader';
import MyTabs from './Navigation/MainTabNavigator';

const MyApp = props => {
  return (
    
    <View style={styles.screen}>
    <MainHeader titleText="WhatsApp"/>
      <MyTabs />
    </View>
   
  );
};

const styles = StyleSheet.create({

  screen: {
    flex: 1,
  },
  
});

export default MyApp;