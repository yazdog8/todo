import React, {PropTypes} from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import MainLayout from '../layout/mainLayout'
import TodoInfo from '../common/components/todoInfo/TodoInfo'
import * as Actions from '../data/actions/todoReduxActions'

class Info extends React.Component {
  _findTodoFromTodos () {
    let { id } = this.props.params
    return this.props.todos.find((todo) => {
      return ~~id === todo.id
    })
  }
  render () {
    return (
      <MainLayout>
        <TodoInfo
          editTodoAction={this.props.actions.editTodo}
          todo={this._findTodoFromTodos()} />
      </MainLayout>
    )
  }
}

Info.propTypes = {
  todos: PropTypes.array,
  params: PropTypes.object,
  actions: PropTypes.object.isRequired
}

const mapStateToProps = (state) => {
  return {
    todos: state.todos
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators(Object.assign({}, Actions), dispatch)
  }
}

const MappedInfo = connect(
  mapStateToProps,
  mapDispatchToProps
)(Info)

export default MappedInfo
