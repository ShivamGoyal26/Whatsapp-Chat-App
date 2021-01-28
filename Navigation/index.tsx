import React from 'react';
import { View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import MyTabs from './MainTabNavigator';

import Icon from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import Colors from '../constants/Colors';
import ChatRoomScreen from '../screens/ChatRoom';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Contacts from '../screens/Contacts';

const Root = createStackNavigator();

const RootNavigator = () =>
    <NavigationContainer>
        <Root.Navigator>

            <Root.Screen
                name="All Chats"
                component={MyTabs}
                options={{
                    headerStyle: {
                        backgroundColor: Colors.primaryColor,
                        elevation: 0,
                        shadowColor: null,
                    },
                    headerTintColor: '#fff',
                    headerTitleStyle: {
                        // fontWeight: 'bold',
                    },
                    title: 'WhatsApp',

                    headerRight: () => (
                        <View style={{
                            flexDirection: 'row',
                            width: 60,
                            justifyContent: 'space-between',
                            marginRight: 10,
                        }}>
                            <Icon name='search-outline' size={22} color={'white'} />
                            <MaterialCommunityIcons name='dots-vertical' size={22} color={'white'} />
                        </View>
                    )
                }} />
            <Root.Screen
                name="ChatRoom"
                component={ChatRoomScreen}
                options={({ route }) => ({
                    title: route.params.name,
                    headerStyle: {
                        backgroundColor: Colors.primaryColor,
                    },
                    headerTintColor: '#fff',
                    headerRight: () => (
                        <View style={{
                            flexDirection: 'row',
                            width: 100,
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            marginRight: 10,
                        }}>
                            <FontAwesome5 name="video" size={18} color={'white'} />
                            <MaterialIcons name="call" size={22} color={'white'} />
                            <MaterialCommunityIcons name='dots-vertical' size={22} color={'white'} />
                        </View>
                    )
                })
                } />

                <Root.Screen
                name= "Contacts"
                component={Contacts}
                options={{
                    headerStyle: {
                        backgroundColor: Colors.primaryColor,
                    },
                    headerTintColor: '#fff',
                }}
                
                />

        </Root.Navigator>
    </NavigationContainer>

export default RootNavigator;