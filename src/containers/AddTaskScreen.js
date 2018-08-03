import React, { Component } from 'react';
import {
  Text,
  View, TextInput, TouchableOpacity, StyleSheet
} from 'react-native';
import CalendarStrip from 'react-native-calendar-strip'
import DateTimePicker from 'react-native-modal-datetime-picker'
import { connect } from 'react-redux'

import { white, gray, calendarHighlight, calendarBackground, commonStyles } from '../styles'
import ItemDate from '../components/ItemDate'
import { getDateStringFromDate } from '../utils'
import ChooseCategory from '../components/ChooseCategory';
import { addTask } from '../actions';

class AddTaskScreen extends Component {
  state = {
    selectedDate: getDateStringFromDate(new Date()),
    isTimePickerVisible: false,
    time: new Date().toTimeString().substring(0, 5)
  }

  componentDidMount() {
    this.props.navigation.setParams({ addTask: this.handleAddTask })
  }

  handleAddTask = () => {
    this.props.addTask({
      id: 1234,
      date: 'Junvu2vn',
      task: {
        id: 12345,
        category: 'To do',
        content: 'abc',
        time: '09:00',
        completed: false
      }
    })
    this.props.navigation.navigate('Schedule')
  }

  onDateSelected = (date) => {
    //log date ra de xem cau truc
    this.setState({
      selectedDate: getDateStringFromDate(date._d)
    })
  }

  showTimePicker = () => this.setState({ isTimePickerVisible: true });

  hideTimePicker = () => this.setState({ isTimePickerVisible: false });

  handleTimePicked = (time) => {
    this.setState({
      time: time.toTimeString().substring(0, 5)
    });
    this.hideTimePicker();
  };

  render() {
    return (
      <View style={commonStyles.container}>
        <CalendarStrip
          style={commonStyles.calendar}
          calendarColor={calendarBackground}
          highlightDateNumberStyle={{ color: calendarHighlight }}
          highlightDateNameStyle={{ color: calendarHighlight }}
          onDateSelected={this.onDateSelected}
        />
        <ItemDate date={this.state.selectedDate} />
        <Text style={styles.title}>Content</Text>
        <TextInput style={styles.input} underlineColorAndroid={'rgba(0,0,0,0)'}
          onChangeText={(content) => this.setState({ content })} />
        <Text style={styles.title}>Time</Text>
        <TouchableOpacity onPress={this.showTimePicker}>
          <Text style={styles.time}>{this.state.time}</Text>
        </TouchableOpacity>
        <DateTimePicker
          isVisible={this.state.isTimePickerVisible}
          onConfirm={this.handleTimePicked}
          onCancel={this.hideTimePicker}
          mode='time' />
        <Text style={styles.title}>Category</Text>
        <ChooseCategory />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginStart: 20,
    color: gray,
    marginTop: 10,
  },
  input: {
    fontSize: 18,
    backgroundColor: white,
    marginVertical: 10,
    marginHorizontal: 20,
    borderRadius: 10,
    padding: 15,
    shadowOpacity: 0.5,
    shadowRadius: 10,
    shadowColor: gray,
    elevation: 5
  },
  time: {
    fontSize: 20,
    color: calendarHighlight,
    fontWeight: 'bold',
    marginStart: 20,
    marginVertical: 10
  }
});

export default connect(null, { addTask })(AddTaskScreen);