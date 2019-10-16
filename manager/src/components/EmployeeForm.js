import React, {Component} from 'react';
import {View, Text, Picker} from 'react-native';
import {connect} from 'react-redux';
import {employeeUpdate, employeeEdit} from '../actions';
import {CardSection, InputElement} from './common';

class EmployeeForm extends Component{
    render(){
        return(
            <View>
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
            </View>
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
};

export default connect(mapStateToProps, {employeeUpdate, employeeEdit})(EmployeeForm);