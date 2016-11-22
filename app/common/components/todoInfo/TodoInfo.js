import React, {PropTypes} from 'react'
import { Row, Col, Button } from 'react-bootstrap'
import BaseIcon from '../baseIcon/BaseIcon'
import TodoForm from '../todoForm/TodoForm'
import TodoFormButtons from '../todoForm/TodoFormButtons'

class TodoInfo extends React.Component {
  constructor (props) {
    const {title, description, id} = props.todo

    super(props)

    this.state = {
      editMode: false,
      title,
      description,
      id
    }

    this._dispatchEditContent = this._dispatchEditContent.bind(this)
    this._setEditState = this._setEditState.bind(this)
    this._titleChange = this._titleChange.bind(this)
    this._descriptionChange = this._descriptionChange.bind(this)
  }
  _dispatchEditContent () {
    const {title, description, id} = this.state
    this.props.editTodoAction(title, description, id)
    this._setEditState()
  }
  _setEditState () {
    const editMode = this.state.editMode
    this.setState({editMode: !editMode})
  }
  _titleChange (e) {
    this.setState({
      title: e.target.value
    })
  }
  _descriptionChange (e) {
    this.setState({
      description: e.target.value
    })
  }
  _renderEditMode () {
    const { title, description } = this.state

    return (
      <div>
        <TodoForm
          title={title}
          description={description}
          titleChange={this._titleChange}
          descriptionChange={this._descriptionChange}
          />
        <TodoFormButtons
          onSubmit={this._dispatchEditContent}
          onCancel={this._setEditState}
          />
      </div>
    )
  }
  _renderDisplayMode () {
    const { title, description } = this.props.todo

    return (
      <div>
        <Row>
          <Col md={10}>
            <h2>{title}</h2>
          </Col>
          <Col md={2}>
            <Button bsStyle='primary' onClick={this._setEditState}>
              <BaseIcon iconType='fa-pencil-square-o' />
            </Button>
          </Col>
        </Row>
        <Row>
          <Col md={12}>
            <p>{description}</p>
          </Col>
        </Row>
      </div>
    )
  }
  render () {
    const info = (this.state.editMode)
      ? this._renderEditMode()
      : this._renderDisplayMode()

    return (
      <div>{info}</div>
    )
  }
}

TodoInfo.propTypes = {
  todo: PropTypes.object.isRequired,
  editTodoAction: PropTypes.func.isRequired
}

export default TodoInfo
