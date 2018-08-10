import React, { Component } from 'react';
import {
  Text,
  View, StyleSheet, TouchableOpacity
} from 'react-native';
import RoundCheckbox from 'rn-round-checkbox';
import { connect } from 'react-redux'

import { gray, white, calendarHighlight } from '../styles'
import { chooseColorByCategory } from '../utils'
import { toogleTask, delTask } from '../actions'

class ItemTask extends Component {
  state = {
    taskDone: this.props.task.completed
  }

  toogleTask = newValue => {
    this.setState({ taskDone: newValue })
    console.log(this.props.task)
    this.props.toogleTask({
      dayId: this.props.dayId,
      timeId: this.props.task.id,
    })
  }

  delTask = () => {

    this.props.delTask({
      id: this.props.dayId,
      timeId: this.props.task.id
    })

  }

  render() {
    return (
      <View style={styles.container}>
        <RoundCheckbox
          checked={this.state.taskDone}
          onValueChange={this.toogleTask}
          backgroundColor={calendarHighlight}
        />
        <Text style={styles.time}>{this.props.task.time}</Text>
        <TouchableOpacity
          onLongPress = {this.delTask}
          style={[{ backgroundColor: chooseColorByCategory(this.props.task.category) },
          styles.task]}>
          <Text style={styles.content}>{this.props.task.content}</Text>
          <Text style={styles.category}>{this.props.task.category}</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginVertical: 10,
    marginHorizontal: 20,
    alignItems: 'center'
  },
  time: {
    color: gray,
    marginStart: 20,
    width: 40
  },
  task: {
    borderRadius: 10,
    padding: 15,
    marginStart: 20,
    flex: 1
  },
  content: {
    fontWeight: 'bold',
    color: white,
    fontSize: 16
  },
  category: {
    color: white,
    marginTop: 5,
    fontSize: 12,
    opacity: 0.8
  }
})

export default connect(null, { toogleTask, delTask })(ItemTask);