import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, SectionList} from 'react-native';
import { white, calendarBackground, calendarHighlight} from "../styles";
import CalendarStrip from 'react-native-calendar-strip';
import ItemDate from '../components/ItemDate';
import ItemTask from '../components/ItemTask';
import {data} from '../database.json';

class ScheduleScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }

    renderItem = ({item} ) => <ItemTask task = {item}/>
    renderSectionHeader = ({section : {date}}) => <ItemDate date = {date}/>


    render() {
        return (
            <View style={styles.container}>
                <CalendarStrip 
                style = {styles.calendar}
                calendarColor= {calendarBackground}
                highlightDateNumberStyle = {{color: calendarHighlight}}
                highlightDateNameStyle = {{color: calendarHighlight}}/>
                <SectionList
                renderItem = {this.renderItem}
                renderSectionHeader = {this.renderSectionHeader}
                sections = {data}
                keyExtractor = {(item) => item.id}               
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        color: white
    },
    calendar: {
        height: 100,
        padding: 10
    }
});

export default ScheduleScreen;