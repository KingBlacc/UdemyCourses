import React, {Component} from 'react';
import {ScrollView, View, Text, TouchableOpacity, Platform, Linking} from 'react-native';
import {connect} from 'react-redux';
import MapView from 'react-native-maps';
import { Card, Button } from 'react-native-elements';

class ReviewScreen extends Component {    
    renderLikedJobs(){
        return this.props.likedJobs.map(job => {
            const initialRegion = {
                longitude: job.longitude,
                latitude: job.latitude,
                latitudeDelta: 0.045,
                longitudeDelta: 0.02
            }
            return( 
                <Card 
                    key={job.jobkey}
                    title={job.jobtitle}>
                    <View style={{height: 200}}>
                    <MapView
                        scrollEnabled={false}
                        style={{flex: 1}}
                        cacheEnabled={Platform.OS === 'android' ? true: false}
                        initialRegion={initialRegion}/>
                        <View style={styles.detailWrapper}>
                            <Text style={styles.italicText}>{job.company}</Text>
                            <Text style={styles.italicText}>{job.formattedRelativeTime}</Text>
                        </View>
                        <Button 
                            title='Apply Now'
                            backgroundColor='03A9F4'
                            onPress={() => Linking.openURL(job.url)}/>
                    </View>
                </Card>
                );    
            }
        )
    }

    render(){
        return(
            <ScrollView>
                {this.renderLikedJobs()}
            </ScrollView>
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

const styles = {
    detailWrapper: {
        marginBottom: 10,
        flexDirection: 'row',
        justifyContent: 'space-around'
    },
    italicText: {
        fontStyle: 'italic'
    }
}

mapStateToProps = (state) => {
    return {likedJobs: state.likeReducer};
}

export default connect(mapStateToProps)(ReviewScreen);