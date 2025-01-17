import React, {Component} from 'react';
import {connect} from 'react-redux';
import _ from 'lodash';
import {employeesFetch} from '../actions';
import ListView from 'deprecated-react-native-listview'
import ListItem from './ListItem.js';

class EmployeeList extends Component{

    UNSAFE_componentWillMount(){
        this.props.employeesFetch();

        this.createDataSource(this.props);
    }

    UNSAFE_componentWillReceiveProps(nextProps){
        this.createDataSource(nextProps);
     }

    createDataSource({employees}){
        const ds = new ListView.DataSource({
            rowHasChanged: (r1, r2) => r1 !== r2
        });

        this.dataSource = ds.cloneWithRows(employees);
    }

    renderRow(employee){
        return <ListItem employee={employee}/>
    }

    render(){
        return (
            <ListView
                enableEmptySections
                dataSource = {this.dataSource}
                renderRow={this.renderRow}
            />
        );
    }
}

const mapStateToProps = (state) => {
    const employees = _.map(state.employees, (val, uid) => {
        return {...val, uid};
    });

    return {employees};
};


export default connect(mapStateToProps, {employeesFetch})(EmployeeList);