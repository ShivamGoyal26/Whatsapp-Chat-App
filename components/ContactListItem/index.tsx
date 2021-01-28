import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { User } from '../../types';
import styles from './style';
import moment from "moment";
import { useNavigation } from '@react-navigation/native';

export type ContactListItem = {
    user: User;
}

const ContactListItem = (props: ContactListItem) => {

    const navigation = useNavigation();

    const { user } = props;


    const onClick = () => {
     // navigate to chat room with this user
    };


    return (
        <TouchableOpacity onPress={onClick}>
            <View style={styles.container}>

                <View style={styles.leftContainer}>
                    <Image source={{ uri: user.imageUri }} style={styles.avatar} />

                    <View style={styles.midContainer}>
                        <Text style={styles.username}>{user.name}</Text>
                        <Text numberOfLines={2} style={styles.status}>{user.status}</Text>

                    </View>
                </View>

            </View>
        </TouchableOpacity>
    );
};

export default ContactListItem;