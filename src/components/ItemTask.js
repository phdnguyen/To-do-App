import React, {Component} from 'react';
import {Platform, Text, View, StyleSheet, TouchableOpacity} from 'react-native';
import RoundCheckbox from 'rn-round-checkbox';
import {gray, categoryBirthday, white} from '../styles';


class ItemTask extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    render() {
        return (
            <View style={{ flexDirection: 'row', marginVertical: 10, marginHorizontal: 20, alignItems: 'center' }}>
                <RoundCheckbox />
                <Text style = {styles.time}>{this.props.task.time}</Text>
                <TouchableOpacity style={styles.task}>
                    <Text style = {{color: white, fontWeight: 'bold', fontSize: 16}}>{this.props.task.content}</Text>
                    <Text style = {{color: white, marginTop: 5, fontSize: 12, opacity: 0.8}}>{this.props.task.category}</Text>
                </TouchableOpacity>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    task: {
        backgroundColor: categoryBirthday,
        borderRadius: 10,
        padding: 15,
        marginStart: 20,
        flex: 1
    },
    time: {
        color: gray,
        marginStart: 10,
        width: 40
    }
})
export default ItemTask;