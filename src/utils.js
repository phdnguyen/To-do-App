import {
    categoryBirthday, categoryEvent, categoryPersonal, 
    categoryShopping, categoryTodo, white
  } from './styles';
  
  getDayOfWeek = (number) => {
    switch (number) {
      case 0: return 'Sunday';
      case 1: return 'Monday';
      case 2: return 'Tuesday';
      case 3: return 'Wednesday';
      case 4: return 'Thursday';
      case 5: return 'Friday';
      case 6: return 'Saturday';
    }
  }
  
  getMonth = (number) => {
    switch (number) {
      case 0: return 'January';
      case 1: return 'February';
      case 2: return 'March';
      case 3: return 'April';
      case 4: return 'May';
      case 5: return 'June';
      case 6: return 'July';
      case 7: return 'July';
      case 8: return 'September';
      case 9: return 'October';
      case 10: return 'November';
      case 11: return 'December';
    }
  }
  
  export const getDateStringFromDate = (date) => `${this.getDayOfWeek(date.getDay())} ${date.getDate()} ${this.getMonth(date.getMonth())} ${date.getFullYear()}`
  
  export const chooseColorByCategory = (category) => {
    switch (category) {
      case 'To do': return categoryTodo;
      case 'Shopping': return categoryShopping;
      case 'Birthday': return categoryBirthday;
      case 'Event': return categoryEvent;
      case 'Personal': return categoryPersonal;
    }
  }