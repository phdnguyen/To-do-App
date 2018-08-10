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
    time: new Date().toTimeString().substring(0, 5),
    dayId: Math.floor(new Date().getTime() / (1000 * 60 * 60 *24)),
    timeId: new Date().getTime()
  }

  componentDidMount() {
    this.props.navigation.setParams({ addTask: this.handleAddTask })
  }

  handleAddTask = () => {
    this.props.addTask({
      id: this.state.dayId,
      date: this.state.selectedDate,
      task: {
        id: this.state.timeId,
        category: this.props.category,
        content: this.state.content,
        time: this.state.time,
        completed: false
      }
    })
    this.props.navigation.navigate('Schedule')
  }

  onDateSelected = (date) => {
    //log date ra de xem cau truc
    this.setState({
      selectedDate: getDateStringFromDate(date._d),
      dayId: Math.floor(date._d.getTime() / (1000 * 60 * 60 *24))
    })
  }

  showTimePicker = () => this.setState({ isTimePickerVisible: true });

  hideTimePicker = () => this.setState({ isTimePickerVisible: false });

  handleTimePicked = (time) => {
    this.setState({
      time: time.toTimeString().substring(0, 5),
      timeId: time.getTime()
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

const mapStateToProps = ({category}) => ({category})

export default connect(mapStateToProps, { addTask })(AddTaskScreen);