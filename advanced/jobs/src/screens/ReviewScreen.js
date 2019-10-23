import React, {Component} from 'react';
import {View, Text, TouchableOpacity, Platform} from 'react-native';
import {connect} from 'react-redux';

class ReviewScreen extends Component {    
    render(){
        return(
            <View>
                <Text>Review Screen</Text>
            </View>
        );
    }
}

ReviewScreen.navigationOptions = ({navigation}) => {
    return{
        title: 'Review Jobs',
        headerRight: (<TouchableOpacity
        onPress={() => navigation.navigate('Setting')}>
          <Text style={{color: 'rgba(0,122,255,1)', fontSize: 20}}>Settings</Text> 
        </TouchableOpacity>), style: {
            marginTop: Platform.OS === 'android' ? 24: 0
        }
    }
}

mapStateToProps = (state) => {
    return {likeReducer: state.likeReducer};
}

export default connect(mapStateToProps)(ReviewScreen);