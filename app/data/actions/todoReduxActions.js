import {actionTypes} from './actionTypes'

export const addTodo = (description, title) => {
  return {
    type: actionTypes.ADD,
    description,
    title
  }
}

export const toggleTodo = (id) => {
  return {
    type: actionTypes.TOGGLE,
    id
  }
}

export const editTodo = (title, description, id) => {
  return {
    type: actionTypes.EDIT_TODO,
    title,
    description,
    id
  }
}
