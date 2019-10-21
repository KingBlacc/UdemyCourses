import React, {Component} from 'react';
import {View, Dimensions, Text, ScrollView} from 'react-native';
import {Button} from 'react-native-elements';

const SCREEN_WIDTH = Dimensions.get('window').width;

class Slides extends Component {
    renderSlides(){
        return this.props.data.map((slide, index) => {
            return(
                <View key={slide.text} style={[styles.slideStyle, {backgroundColor: slide.color}]}>
                    <Text style={styles.slideText}>{slide.text}</Text>
                    {index === this.props.data.length -1 ? 
                        <Button 
                            title='Onwards' 
                            raised
                            buttonStyle={styles.btnStyle}
                            onPress={this.props.onComplete}/>: null}
                </View>);
        });
    }

    render(){
        return(
            <ScrollView
                horizontal
                style={{flex: 1}}
                pagingEnabled>
                    {this.renderSlides()}
            </ScrollView>
        );
    }
}

const styles = {
    slideStyle:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        width: SCREEN_WIDTH
    },
    slideText: {
        fontSize: 30,
        color: 'white',
        textAlign: 'center' 
    },
    btnStyle: {
        backgroundColor: '#0288D1',
        marginTop: 15
    }
}

export default Slides;