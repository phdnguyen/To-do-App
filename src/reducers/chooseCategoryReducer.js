import { CHOOSE_CATEGORY } from '../actions/type'

export default function (state = 'To do', action) {
  switch (action.type) {
    case CHOOSE_CATEGORY:
      console.log(`pre State ${state}, action ${action}`)
      return action.payload

    default:
      return state
  }
}