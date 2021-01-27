import React from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import ChatListItem from '../components/ChatListItem/index';
import chatRooms from '../data/ChatRooms';

const Chats = props => {
  return (
    <View style={styles.screen}>
      <FlatList
        data={chatRooms}
        renderItem={({ item }) => <ChatListItem
          chatRoom={item}
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

export default Chats;