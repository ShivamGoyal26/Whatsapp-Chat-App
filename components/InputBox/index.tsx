import React, { useState } from 'react';
import { View, TouchableOpacity } from 'react-native';
import styles from '../InputBox/style';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { TextInput } from 'react-native-gesture-handler';
import Entypo from 'react-native-vector-icons/Entypo'
import Fontisto from 'react-native-vector-icons/Fontisto';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const InputBox = () => {

    const [message, setMessage] = useState('');

    const onMicroPhonePress = () => {
            console.warn("MicroPhone")
    }

    const onSendPress = () => {
        console.warn(`Sending: ${message}`);

        // send the message to the backend
        
        setMessage('');
}

    const onPress = () => {
        if(!message){
            onMicroPhonePress();
        }
        else {
            onSendPress();
        }
    }

    return (
        <View style={styles.container}>

            <View style={styles.mainContainer}>

                <FontAwesome5 name="laugh-beam" size={24} color="grey" style={styles.Icon} />
                <TextInput
                    placeholder={"Type a message"}
                    style={styles.textInput}
                    multiline
                    value={message}
                    onChangeText={setMessage}
                />
                <Entypo name="attachment" size={24} color='grey' style={styles.Icon} />
                {!message && <Fontisto name="camera" size={24} color='grey' style={styles.Icon} />}
            </View>
            <TouchableOpacity onPress={onPress}>
                <View style={styles.buttonContainer}>
                    {
                        !message ?
                            <MaterialCommunityIcons
                                name='microphone'
                                size={28}
                                color="white" />
                            :
                            <MaterialIcons
                                name='send'
                                size={28}
                                color="white" />
                    }

                </View>
            </TouchableOpacity>

        </View>
    );
}

export default InputBox;