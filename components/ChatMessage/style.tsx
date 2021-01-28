import { StyleSheet } from 'react-native';
import Color from '../../constants/Colors';

const styles = StyleSheet.create({

    container: {
        padding: 10,

    },
    messageBox: {
        borderRadius: 5,
        padding: 10,
    },
    name: {
        color: Color.primaryColor,
        fontWeight: 'bold',
        marginBottom: 5,
    },
    message: {
    },
    time: {
        alignSelf: 'flex-end',
    },

});

export default styles;