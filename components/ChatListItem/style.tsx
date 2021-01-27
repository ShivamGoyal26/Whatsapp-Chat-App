import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    avatar: {
        width: 60,
        height: 60,
        marginRight: 15,
        borderRadius: 50,
    },
    container: {
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-between',
        padding: 10,
    },
    midContainer: {
        width: '50%',
        marginVertical: 7,
        justifyContent: 'space-around',
    },
    leftContainer: {
        flexDirection: 'row',
    },
    username: {
        fontWeight: 'bold',
        fontSize: 16,
    },
    lastMessage: {
        fontSize: 16,
        color: 'grey'
    },
    time: {
        fontSize: 14,
        color: 'grey',
    }
});

export default styles;