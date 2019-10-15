import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Picker, Text} from 'react-native';
import {employeeUpdate, employeeCreate} from '../actions';
import {Card, CardSection, InputElement, Button}  from './common';

class EmployeeCreate extends Component {

    onButtonPress(){
        const { name, phone, shift} = this.props;

        this.props.employeeCreate({name, phone, shift: shift || 'Monday'});
    }

    render(){
        return(
            <Card>
                <CardSection>
                    <InputElement
                        label='Name'
                        placeholder='Luke'
                        value={this.props.name}
                        onChangeText={text => this.props.employeeUpdate({prop: 'name', value: text})}/>
                </CardSection>
                <CardSection>
                    <InputElement
                        label='Phone'
                        placeholder='555-555-5555'
                        value={this.props.phone}
                        onChangeText={text => this.props.employeeUpdate({prop: 'phone', value: text})}/>
                </CardSection>
                <CardSection>
                    <Text
                        style={styles.textStyle}>Select Shift</Text>
                    <Picker
                        style={{flex: 1}}
                        selectedValue={this.props.shift}
                        onValueChange={value => this.props.employeeUpdate({prop: 'shift', value})}>
                            <Picker.Item label='Monday' value='Monday'/>
                            <Picker.Item label='Tuesday' value='Tuesday'/>
                            <Picker.Item label='Wednesday' value='Wednesday'/>
                            <Picker.Item label='Thursday' value='Thursday'/>
                            <Picker.Item label='Friday' value='Friday'/>
                            <Picker.Item label='Saturday' value='Saturday'/>
                            <Picker.Item label='Sunday' value='Sunday'/>
                    </Picker>
                </CardSection>
                <CardSection>
                <Button
                    onPress={this.onButtonPress.bind(this)}>
                    Create Employee
                </Button>
                </CardSection>
            </Card>
        );
    }
}

const styles = {
    textStyle: {
        fontSize: 18,
        paddingLeft: 20,

    }
}

const mapStateToProps = (state) => {
    const {name, phone, shift} = state.employeeForm;

    return {name, phone, shift};
}

export default connect(mapStateToProps, {employeeUpdate, employeeCreate})(EmployeeCreate);