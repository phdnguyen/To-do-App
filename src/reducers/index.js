import { combineReducers } from 'redux'
import chooseCategoryReducer from './chooseCategoryReducer';
import taskReducer from './taskReducer';

//state: {data: []}
//rootReducer: {category: 'Todo', tasks: []}
export default combineReducers({
  category: chooseCategoryReducer,
  tasks: taskReducer
})