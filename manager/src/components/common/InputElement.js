import React from 'react';
import {View, Text, TextInput} from 'react-native';

const InputElement = ({label, value, onChangeText, placeholder, isPassword}) => {
    const {inputStyle, containerStyle, labelStyle} = styles;

    return (
        <View style={containerStyle}>
            <Text style={labelStyle}>{label}</Text>
            <TextInput
                secureTextEntry={isPassword}
                value={value}
                onChangeText={onChangeText}
                style= {inputStyle}
                autoCorrect= {false}
                placeholder={placeholder}/>
        </View>
    );
};

const styles = {
    inputStyle: {
        paddingRight: 5,
        paddingLeft: 5,
        flex: 2,
        fontSize: 18,
        color: 'black',
        lineHeight: 23
    },
    labelStyle: {
        flex: 1,
        fontSize: 18,
        paddingLeft: 20
    },
    containerStyle: {
        height: 40,
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center'
    }
};

export { InputElement };