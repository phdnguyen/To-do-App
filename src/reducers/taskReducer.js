import { ADD_TASK, TOGGLE_TASK } from '../actions/type'

export default function (state = [], action) {
  switch (action.type) {
    case ADD_TASK:
      //1. check xem ngay do da co task chua
      //2. add task
      //3. sort

      const tasksInThisDay = state
        .filter(item => item.id === action.payload.id)
      if (tasksInThisDay.length === 0) {
        return [
          ...state,
          {
            id: action.payload.id,
            date: action.payload.date,
            data: [action.payload.task]
          }
        ].sort((day1, day2) => day1.id - day2.id)
      } else {
        return [
          ...(state.filter(item => item.id !== action.payload.id)),
          {
            id: action.payload.id,
            date: action.payload.date,
            data: [
              ...(tasksInThisDay[0].data),
              action.payload.task
            ].sort((task1, task2) => task1.id - task2.id)
          }
        ].sort((day1, day2) => day1.id - day2.id)
      }
    
    case TOGGLE_TASK:

      console.log(`preState ${state}`)

      return state.map(dayTasks => (dayTasks.id === action.payload.dayId)
        ? {
          id: dayTasks.id.action,
          date: dayTasks.id,
          data: dayTasks.data.map(task => (task.id === action.payload.timeId)
            ? { ...task, completed: !task.completed }
            : task)
        }
        : dayTasks)

    default: return state
  }
}