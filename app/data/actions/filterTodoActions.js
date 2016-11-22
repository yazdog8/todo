import {actionTypes} from './actionTypes'

export const filterTodos = (text) => {
  return {
    type: actionTypes.FILTER_TODOS,
    text
  }
}

export const clearTodosFilter = () => {
  const text = ''
  return {
    type: actionTypes.FILTER_TODOS,
    text
  }
}
