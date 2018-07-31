import React, { Component } from 'react';
import {
  Text,  FlatList,
  View, TouchableOpacity, StyleSheet
} from 'react-native';

import { chooseColorByCategory } from '../utils'
import {
  calendarHighlight, gray, categoryBirthday, white,
  categoryEvent, categoryPersonal, categoryShopping, categoryTodo
} from '../styles';

const categories = ['To do', 'Personal', 'Birthday', 'Event', 'Shopping'];

class PickCategory extends Component {
  state = {  }

  onPickCategory = (item) => {
    
  }

  _renderItem = ({ item }) => (
    <TouchableOpacity onPress={() => this.onPickCategory(item)} >
      <View style={[styles.itemCategory, { backgroundColor: chooseColorByCategory(item) }]}>
        <Text style={styles.textItemCategory}>{item}</Text>
      </View>
    </TouchableOpacity>
  );

  render() {
    return (
      <View>
        <FlatList
          style={{ marginStart: 20, marginVertical: 10 }}
          data={categories}
          keyExtractor={(index) => index}
          renderItem={this._renderItem}
          horizontal={true}
        />
        <Text style={styles.textCurrentCategory}>
          {`This task belongs to ... category`}
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  itemCategory: {
    width: 80,
    height: 80,
    marginEnd: 5,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center'
  },
  textCurrentCategory: {
    fontSize: 18,
    fontWeight: 'bold',
    marginStart: 20
  },
  textItemCategory: {
    fontWeight: 'bold',
    color: white,
    fontSize: 14,
  }
})

export default PickCategory;