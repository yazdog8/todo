import {actionTypes} from '../actions/actionTypes'

const initialState = {
  title: '',
  description: '',
  showModal: false
}

const newTodoReducer = (state = initialState, action) => {
  console.log('newTodoReducer was called with state', state, 'and action', action)
  console.log(Object.assign({}, state))
  switch (action.type) {
    case actionTypes.UPDATE_NEW_TODO_TITLE:
      return Object.assign({}, state, {title: action.title})
    case actionTypes.UPDATE_NEW_TODO_DESCRIPTION:
      return Object.assign({}, state, {description: action.description})
    case actionTypes.SHOW_NEW_TODO_MODAL:
      return Object.assign({}, state, {showModal: action.showModal})
    case actionTypes.RESET_NEW_TODO:
      return Object.assign({}, initialState)
    default:
      return state
  }
}

export default newTodoReducer
