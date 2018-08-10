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
import { getDateStringFromDate } from '../utils';

const listRef = 'listRef'

class ScheduleScreen extends Component {
  state = {
  }
  onDateSelected = (date) => {
    const index = this.props.tasks.map(dayTasks => dayTasks.date).indexOf(getDateStringFromDate(date._d))
    index !== -1 && this.scrollSectionList(index)
  }

  scrollSectionList = (index) => {
    this.refs.listRef.scrollToLocation({
      sectionIndex: index,
      itemIndex: 0,
      viewOffset: 40
    })
  }

  renderItem = ({ item, section }) => <ItemTask task={item} dayId={section.id} />

  renderSectionHeader = ({ section }) => section.data.length !== 0 && <ItemDate date={section.date} />

  render() {
    return (
      <View style={commonStyles.container}>
        <CalendarStrip
          style={commonStyles.calendar}
          calendarColor={calendarBackground}
          highlightDateNumberStyle={{ color: calendarHighlight }}
          highlightDateNameStyle={{ color: calendarHighlight }}
          onDateSelected = {this.onDateSelected}
        />
        <SectionList
          renderItem={this.renderItem}
          renderSectionHeader={this.renderSectionHeader}
          sections={this.props.tasks}
          keyExtractor={(item) => item.id}
          ref = {listRef}
        />
      </View>
    );
  }
}

const mapStateToProps = ({ tasks }) => ({ tasks })

//connect(state, action)
export default connect(mapStateToProps)(ScheduleScreen);