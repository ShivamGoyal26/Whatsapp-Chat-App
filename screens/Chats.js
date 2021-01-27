import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const Chats = props => {
    return(
        <View style={styles.screen}>
      <Text>Hello there</Text>
    </View>
    );
};

const styles = StyleSheet.create({
    screen: {
            flex: 1,
          }
});

export default Chats;