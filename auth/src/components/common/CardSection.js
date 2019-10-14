import React from 'react';
import {View} from 'react-native';

const CardSection = ({children}) => {
    const {viewStyle} = styles;
    return (
        <View style={viewStyle}>
            {children}
        </View>
    );
};

const styles = {
    viewStyle: {
        borderBottomWidth: 1,
        padding: 5,
        backgroundColor: '#fff',
        justifyContent: 'flex-start',
        flexDirection: 'row',
        borderColor: '#ddd',
        position: 'relative'
    }
}

export {CardSection};