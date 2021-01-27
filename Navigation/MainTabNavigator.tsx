import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import Chats from '../screens/Chats';
import Status from '../screens/Status';
import Colors from '../constants/Colors';
import Calls from '../screens/Calls';
import Fontisto from 'react-native-vector-icons/Fontisto';

const Tab = createMaterialTopTabNavigator();
const Stack = createStackNavigator();

const ChatNavigator = () =>
    <Stack.Navigator>
        <Stack.Screen name="All Chats" component={Chats} options={{ headerShown: false }} />
    </Stack.Navigator>

function MyTabs() {
    return (
            <Tab.Navigator
                initialRouteName="Chats"
                tabBarOptions={{

                    activeTintColor: Colors.accentColor,
                    style: {
                        backgroundColor: Colors.primaryColor,
                        elevation: 0,
                    },
                    indicatorStyle: {
                        backgroundColor: Colors.accentColor,
                        height: 3,
                    },
                    labelStyle: {
                        fontWeight: 'bold',
                    },
                    showIcon: true,
                }}
            >
                <Tab.Screen
                    name="Camera"
                    options={{
                        tabBarIcon: () => <Fontisto name="camera" size={18} color='white' />,
                        tabBarLabel: () => null
                    }}
                    component={Chats}

                />
                <Tab.Screen
                    name="Chats"
                    component={ChatNavigator}
                     />
                <Tab.Screen name="Status" component={Status}  />
                <Tab.Screen name="Calls" component={Calls} />
            </Tab.Navigator>
     
    );
}



export default MyTabs;