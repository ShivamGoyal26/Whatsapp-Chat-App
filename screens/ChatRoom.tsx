import React from 'react';
import { FlatList, ImageBackground } from 'react-native';
import ChatMessage from '../components/ChatMessage/index';
import BG from '../assets/images/BG.png';

import chatRoomData from '../data/Chats';

import { useRoute } from '@react-navigation/native';

const ChatRoomScreen = () => {

    const route = useRoute();

    return (
        <ImageBackground source={BG} style={{width: "100%", height: "100%"}} >
            <FlatList
                data={chatRoomData.messages}
                renderItem={({ item }) => <ChatMessage message={item} />}
                inverted
            />
        </ImageBackground>

    );
}

export default ChatRoomScreen;