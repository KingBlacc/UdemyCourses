import React, {Component} from 'react';
import {FlatList} from 'react-native';
import {connect} from 'react-redux';
import ListItem from './ListItem';

class LibraryList extends Component {

    renderRow(library){
        return (
            <ListItem
                library = {library}/>
        );
    }

    render(){
        return(
            <FlatList
                data={this.props.libraries}
                keyExtractor={(library) => library.id}
                renderItem={this.renderRow}/>
        );
    }
}

//Takes our global state, and 
//takes some properties and provides those 
//properties to library list
const mapStateToProps = state => {
    return {libraries: state.libraries};
};

export default connect(mapStateToProps)(LibraryList);