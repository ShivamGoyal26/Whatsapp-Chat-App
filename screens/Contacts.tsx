import React from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import ContactListItem from '../components/ContactListItem/index';
import users from '../data/Users';

const Contacts = props => {
  return (
    <View style={styles.screen}>
      <FlatList
        data={users}
        renderItem={({ item }) => <ContactListItem
          user={item}
        />}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  }
});

export default Contacts;