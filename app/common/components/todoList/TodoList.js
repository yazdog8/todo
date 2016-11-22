import React, {PropTypes} from 'react'
import {Button} from 'react-bootstrap'
import { Link } from 'react-router'
import classnames from 'classnames'
import BaseIcon from '../baseIcon/BaseIcon'
import routes from '../../../constants/routes'
import todoStatus from '../../../constants/todoStatus'

const TodoList = (props) => {
  function toggleTodo (id) {
    props.toggleAction(id)
  }

  function renderNoTodos () {
    return (
      <div>Please add a Todo.</div>
    )
  }

  function renderTodoButton (status, id) {
    const btnStyle = classnames({
      'success': status === todoStatus.RESOLVED,
      'danger': status === todoStatus.ACTIVE
    })
    const iconType = (status === todoStatus.RESOLVED) ? 'fa-pencil' : 'fa-times'
    const clickAction = () => toggleTodo(id)
    return (
      <Button className='pull-right' bsStyle={btnStyle} onClick={clickAction}>
        <BaseIcon iconType={iconType} />
      </Button>
    )
  }

  function renderTodos () {
    const todos = props.todos.map((todo) => {
      const {id, title, status} = todo
      const className = classnames({
        'list-group-item': true,
        'list-group-item-danger': status === todoStatus.RESOLVED
      })
      return (
        <li key={id} style={{clear: 'both'}} className={className}>
          <div className='row'>
            <div className='col-md-10'>
              <h4>
                <Link to={`${routes.INFO}${id}`}>{title}</Link>
              </h4>
            </div>
            <div className='col-md-2'>
              {renderTodoButton(status, id)}
            </div>
          </div>
        </li>)
    })
    return (
      <ul className='list-group'>{todos}</ul>
    )
  }

  const todos = props.todos.length
    ? renderTodos()
    : renderNoTodos()

  return (
    <div>{todos}</div>
  )
}

TodoList.propTypes = {
  todos: PropTypes.array.isRequired,
  toggleAction: PropTypes.func.isRequired
}

export default TodoList
