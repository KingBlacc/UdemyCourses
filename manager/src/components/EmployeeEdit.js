import _ from 'lodash';
import React, {Component} from 'react';
import {connect} from 'react-redux';
import Communcations from 'react-native-communications';
import EmployeeForm from './EmployeeForm';
import {employeeUpdate, employeeEdit} from '../actions';
import {Card, CardSection, Button} from './common';

class EmployeeEdit extends Component {
    UNSAFE_componentWillMount(){
        _.each(this.props.employee, (value, prop) => {
            this.props.employeeUpdate({prop, value});
        });
    }

    onButtonPress(){
        const {name, phone, shift} = this.props;
        this.props.employeeEdit({name, phone, shift, uid: this.props.employee.uid});
    }

    onTextPress(){
        const {phone, shift} = this.props;

        Communcations.text(phone, `Your upcoming shift is on ${shift}`);
    }

    render(){
        return(
            <Card>
                <EmployeeForm/>
                <CardSection>
                    <Button
                        onPress={this.onButtonPress.bind(this)}>
                        Save Changes
                    </Button>
                </CardSection>
                <CardSection>
                    <Button onPress={this.onTextPress.bind(this)}>
                        Text Schedule
                    </Button>
                </CardSection>
                <CardSection>
                    <Button onPress={}>
                        Fire
                    </Button>
                </CardSection>
            </Card>
        );
    }
} 


const mapStateToProps = (state) => {
    const {name, phone, shift} = state.employeeForm;

    return {name, phone, shift};
}
export default connect(mapStateToProps, {employeeUpdate, employeeEdit})(EmployeeEdit);