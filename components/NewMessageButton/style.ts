import {StyleSheet} from 'react-native';
import Color from '../../constants/Colors';

const styles = StyleSheet.create({
    container: {
        backgroundColor: Color.primaryColor,
        width: 65,
        height: 65,
        borderRadius: 50,
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        bottom: 20,
        right: 20,
    }
});

export default styles;