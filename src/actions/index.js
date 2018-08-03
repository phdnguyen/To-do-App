import { CHOOSE_CATEGORY, ADD_TASK } from './type'

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