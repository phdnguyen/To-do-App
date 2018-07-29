import React, {Component} from 'react';
import {Platform, Text, View, StyleSheet} from 'react-native';
import {gray} from '../styles';

class ItemDate extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    render() {
        const dayOfWeek = this.props.date.substring(0,this.props.date.indexOf(' '));
        const date      = this.props.date.substring(this.props.date.indexOf(' ') + 1);
        return (
            <View style = {{flexDirection: 'row', paddingVertical: 10, marginStart: 20, alignItems: 'baseline'}}>
                <Text style = {styles.dayOfWeek}>{dayOfWeek}</Text>
                <Text style = {styles.date}>{date}</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({

    dayOfWeek: {
        fontSize: 20,
        fontWeight: 'bold'
    },

    date: {
        color: gray,
        fontSize: 12,
        marginStart: 20

    }

})
export default ItemDate;