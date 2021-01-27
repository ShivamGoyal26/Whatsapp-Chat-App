import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { NavigationContainer } from '@react-navigation/native';

import HomeScreen from '../screens/HomeScreen';
import SettingsScreen from '../screens/SettingsScreen';
import Colors from '../constants/Colors';
const Tab = createMaterialTopTabNavigator();

function MyTabs() {
  return (
      <NavigationContainer>
    <Tab.Navigator
    tabBarOptions = {{
        
        activeTintColor: Colors.accentColor,
        style:{
            backgroundColor: Colors.primaryColor,
            elevation: 0,
        },
        indicatorStyle: {
            backgroundColor: Colors.accentColor,
            height: 3,
        },
    }}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Settings" component={SettingsScreen} />
    </Tab.Navigator>
    </NavigationContainer>
  );
}

export default MyTabs;