import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const Status = props => {
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

export default Status;