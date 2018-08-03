import React, { Component } from 'react';
import {
  Text,
  View, StyleSheet, SectionList
} from 'react-native';
import CalendarStrip from 'react-native-calendar-strip'
import { connect } from 'react-redux'

import { white, calendarBackground, calendarHighlight, commonStyles } from '../styles';
import ItemDate from '../components/ItemDate';
import ItemTask from '../components/ItemTask';
import { data } from '../database.json'

class ScheduleScreen extends Component {
  state = {
  }

  renderItem = ({ item }) => <ItemTask task={item} />

  renderSectionHeader = ({ section: { date } }) => <ItemDate date={date} />

  render() {
    return (
      <View style={commonStyles.container}>
        <CalendarStrip
          style={commonStyles.calendar}
          calendarColor={calendarBackground}
          highlightDateNumberStyle={{ color: calendarHighlight }}
          highlightDateNameStyle={{ color: calendarHighlight }}
        />
        <SectionList
          renderItem={this.renderItem}
          renderSectionHeader={this.renderSectionHeader}
          sections={this.props.tasks}
          keyExtractor={(item) => item.id}
        />
      </View>
    );
  }
}

const mapStateToProps = ({ tasks }) => ({ tasks })

//connect(state, action)
export default connect(mapStateToProps)(ScheduleScreen);