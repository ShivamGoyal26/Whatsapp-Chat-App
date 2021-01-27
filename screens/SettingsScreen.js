import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const SettingsScreen = props => {
    return(
        <View style={styles.Screen}>
            <Text>Settings Screen</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    Screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
});

export default SettingsScreen;