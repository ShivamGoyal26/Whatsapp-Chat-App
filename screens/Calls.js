import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const Calls = props => {
    return(
        <View style={styles.screen}>
      <Text>Calls Screen</Text>
    </View>
    );
};

const styles = StyleSheet.create({
    screen: {
            flex: 1,
          }
});

export default Calls;