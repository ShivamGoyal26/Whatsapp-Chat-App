import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
// import MainHeader from '../Headers/MainHeader';

const HomeScreen = props => {
    return(
        <View style={styles.screen}>
    {/* <MainHeader titleText="WhatsApp"/> */}
      <Text>Hello there</Text>
    </View>
    );
};

const styles = StyleSheet.create({
    screen: {
            flex: 1,
            // justifyContent: 'center',
            // alignItems: 'center'
          }
});

export default HomeScreen;