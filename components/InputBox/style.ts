import { StyleSheet } from 'react-native';
import Color from '../../constants/Colors';

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        margin: 10,
        alignItems: 'center',

    },
    mainContainer: {
        flexDirection: 'row',
        backgroundColor: 'white',
        padding: 5,
        borderRadius: 25,
        marginRight: 10,
        flex: 1,

        alignItems: 'center',
    },
    buttonContainer: {
        backgroundColor: Color.primaryColor,
        borderRadius: 50,
        width: 50,
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
    },
    textInput:{
        flex: 1,
        marginHorizontal: 10,
    },
    Icon: {
        marginHorizontal: 5,
    }
});

export default styles;