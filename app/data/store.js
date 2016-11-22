import { applyMiddleware, createStore, combineReducers } from 'redux'
import thunk from 'redux-thunk'
import createLogger from 'redux-logger'
import todosReducer from './reducers/todosReducer'
import newTodoReducer from './reducers/newTodoReducer'
import filterTodosReducer from './reducers/filterTodosReducer'

const logger = createLogger()

const reducer = combineReducers({
  todos: todosReducer,
  newTodo: newTodoReducer,
  filterTodos: filterTodosReducer
})

const store = createStore(
  reducer,
  applyMiddleware(thunk, logger)
)

export default store
