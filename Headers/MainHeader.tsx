import React from 'react';
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Colors from '../constants/Colors';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'

const MainHeader = props => {
    return (
        <View style={styles.header}>
            <View> 
                <Text style={styles.headerText}>{props.titleText}</Text>
            </View>

            <View style={styles.headerRight}>
            <Icon name='search-outline' size={22} color={'white'} />
            <MaterialCommunityIcons name='dots-vertical' size={22} color={'white'} />
            </View>
         

        </View>
    );
};

const styles = StyleSheet.create({
    header: {
        alignItems: 'center',
        backgroundColor: Colors.primaryColor,
        width: '100%',
        height: '8%',
        flexDirection: 'row',
        justifyContent: 'space-between',
    
    },
    headerText: {
        marginLeft: 10,
        fontWeight: 'bold',
        fontSize: 20,
        color: 'white',
        letterSpacing: 1,
    },

    headerRight: {
        justifyContent: 'space-between',
        width: '20%',
        marginRight: 10,
        flexDirection: 'row',
    },
});

export default MainHeader;