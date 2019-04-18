import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

const Button =( {onPress, children }) => {
    const { buttonStyle, textStyle } = styles;

    return(
        <TouchableOpacity onPress={onPress} style={buttonStyle}>
            <Text style={textStyle}>
                {children}
            </Text>
        </TouchableOpacity>
    );
}

const styles = {
    buttonStyle: {
        backgroundColor: '#ddd'
    },
    textStyle: {
        fontSize: 20,
        alignSelft: 'center',
    }
}

export default Button;