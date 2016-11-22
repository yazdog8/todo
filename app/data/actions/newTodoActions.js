import {actionTypes} from './actionTypes'
import {addTodo} from './todoReduxActions'

export const updateTitle = (title) => {
  return {
    type: actionTypes.UPDATE_NEW_TODO_TITLE,
    title
  }
}

export const updateDescription = (description) => {
  return {
    type: actionTypes.UPDATE_NEW_TODO_DESCRIPTION,
    description
  }
}

export const changeModalState = (showModal) => {
  return {
    type: actionTypes.SHOW_NEW_TODO_MODAL,
    showModal
  }
}

export const resetNewTodo = () => {
  return {
    type: actionTypes.RESET_NEW_TODO
  }
}

export const submitNewTodo = () => {
  return (dispatch, getStore) => {
    const store = getStore()
    const {description, title} = store.newTodo
    dispatch(addTodo(description, title))
    dispatch(resetNewTodo())
  }
}
