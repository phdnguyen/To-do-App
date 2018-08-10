import { CHOOSE_CATEGORY, ADD_TASK, TOGGLE_TASK, DEL_TASK } from './type'

//chooseCategory('Birthday')
export const chooseCategory = (category) => ({
  type: CHOOSE_CATEGORY,
  payload: category
})

export const addTask = (data) => ({
  type: ADD_TASK,
  //data: {id:..., date:,... task...}
  payload: data
})

export const toogleTask = (data) => ({
  type: TOGGLE_TASK,
  //data: {dayId:..., timeId:,...}
  payload: data
})

export const delTask = (data) => ({
  type: DEL_TASK,
  //data: {dayId:..., timeId:,...}
  payload: data
})