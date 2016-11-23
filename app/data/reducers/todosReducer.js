import {actionTypes} from '../actions/actionTypes'
import {uniqueId} from '../../common/utils/commonUtils'
import todoStatus from '../../constants/todoStatus'

const toggleTodoStatus = (todos, id) => {
  return todos.map((todo) => {
    if (todo.id === id) {
      todo.status = (todo.status === todoStatus.ACTIVE) ? todoStatus.RESOLVED : todoStatus.ACTIVE
    }
    return todo
  })
}

const editTodo = (todos, {id, description, title}) => {
  console.log('edit todo')
  console.log(todos)
  return todos.map((todo) => {
    if (todo.id === id) {
      todo = Object.assign({}, todo, {id, description, title})
    }
    return todo
  })
}

const todosReducer = (state = [], action) => {
  switch (action.type) {
    case actionTypes.ADD:
      return [
        ...state,
        {
          id: uniqueId(),
          title: action.title,
          description: action.description,
          status: 'ACTIVE'
        }
      ]
    case actionTypes.EDIT_TODO:
      return editTodo(state, action)
    case actionTypes.TOGGLE:
      return toggleTodoStatus(state, action.id)
    default:
      return state
  }
}

export default todosReducer
