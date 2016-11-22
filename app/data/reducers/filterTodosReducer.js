import {actionTypes} from '../actions/actionTypes'

const initialState = {
  filterText: ''
}

const filterTodosReducer = (state = initialState, action) => {
  console.log('filterTodoReducer was called with state', state, 'and action', action)
  switch (action.type) {
    case actionTypes.FILTER_TODOS:
      return Object.assign({}, {filterText: action.text})
    default:
      return state
  }
}

export default filterTodosReducer
