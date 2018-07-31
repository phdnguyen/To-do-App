import { StyleSheet } from 'react-native'

export const calendarHighlight = "#4e6fbf";
export const categoryPersonal = "#7acbbd";
export const categoryShopping = "#ffb629";
export const categoryTodo = "#865dbf";
export const categoryEvent = "#eb4886";
export const categoryBirthday = "#ff8736";

export const calendarBackground = '#f4f5f7';

export const gray = "#adb0bd";
export const white = "#ffffff";

export const commonStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: white
  },
  calendar: {
    height: 100,
    paddingTop: 5
  }
})