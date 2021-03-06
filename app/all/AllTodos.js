import React, {PropTypes} from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import TodoList from '../common/components/todoList/TodoList'
import MainLayout from '../layout/mainLayout'
import TodoActions from '../common/components/todoActions/TodoActions'
import TodoModal from '../common/components/todoModal/TodoModal'
import * as Actions from '../data/actions/todoReduxActions'
import * as NewTodoActions from '../data/actions/newTodoActions'
import * as FilterTodoActions from '../data/actions/filterTodoActions'

class AllTodos extends React.Component {
  constructor (props) {
    super(props)

    this._setTodosList = this._setTodosList.bind(this)
    this._closeModal = this._closeModal.bind(this)
    this._addTodo = this._addTodo.bind(this)
    this._titleChange = this._titleChange.bind(this)
    this._descriptionChange = this._descriptionChange.bind(this)
  }
  componentWillUnmount () {
    this.props.actions.clearTodosFilter()
  }
  _setTodosList (props, filterVal = '') {
    const {todos, filterTodos} = this.props
    return todos.filter(({status, title}) => title.includes(filterTodos.filterText))
  }
  _closeModal () {
    this.props.actions.changeModalState(false)
  }
  _addTodo () {
    this.props.actions.submitNewTodo()
  }
  _titleChange (e) {
    this.props.actions.updateTitle(e.target.value)
  }
  _descriptionChange (e) {
    this.props.actions.updateDescription(e.target.value)
  }
  _renderAddTodoModal () {
    return (
      <TodoModal
        showModal={this.props.newTodo.showModal}
        onTitleChange={this._titleChange}
        onDescriptionChange={this._descriptionChange}
        onCancel={this._closeModal}
        onSubmit={this._addTodo}
        />
    )
  }
  render () {
    return (
      <MainLayout>
        <h2>All Todos</h2>
        <TodoActions
          actions={this.props.actions}
          showAddBtn />
        <TodoList
          toggleAction={this.props.actions.toggleTodo}
          todos={this._setTodosList()}
          />
        {this._renderAddTodoModal()}
      </MainLayout>
    )
  }
}

AllTodos.propTypes = {
  todos: PropTypes.array.isRequired,
  newTodo: PropTypes.object.isRequired,
  filterTodos: PropTypes.object.isRequired,
  actions: PropTypes.object.isRequired
}

const mapStateToProps = (state) => {
  return {
    todos: state.todos,
    newTodo: state.newTodo,
    filterTodos: state.filterTodos
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators(Object.assign({}, Actions, NewTodoActions, FilterTodoActions), dispatch)
  }
}

const MappedAllTodos = connect(
  mapStateToProps,
  mapDispatchToProps
)(AllTodos)

export default MappedAllTodos
