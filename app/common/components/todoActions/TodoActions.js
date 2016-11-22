import React, {PropTypes} from 'react'
import FilterTodos from './filterTodos/FilterTodos'
import AddTodoButton from './addTodoButton/AddTodoButton'
import './todoActions.scss'

export default class TodoActions extends React.Component {
  _renderAddButton () {
    if (this.props.showAddBtn) {
      return (
        <div className='col-md-1'>
          <AddTodoButton actions={this.props.actions} />
        </div>
      )
    }
  }
  render () {
    const rowClass = (this.props.showAddBtn)
      ? 'col-md-11'
      : 'col-md-12'
    return (
      <div className='row todo-actions'>
        <div className={rowClass}>
          <FilterTodos actions={this.props.actions} />
        </div>
        {this._renderAddButton()}
      </div>
    )
  }
}

TodoActions.propTypes = {
  showAddBtn: PropTypes.bool,
  actions: PropTypes.object.isRequired
}

TodoActions.defaultProps = {
  showAddBtn: false
}
