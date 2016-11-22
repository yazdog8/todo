import React, {PropTypes} from 'react'
import {Modal} from 'react-bootstrap'
import TodoForm from '../todoForm/TodoForm'
import TodoFormButtons from '../todoForm/TodoFormButtons'

const TodoModal = (props) => {
  return (
    <Modal show={props.showModal} onHide={props.onCancel}>
      <Modal.Header closeButton>
        <Modal.Title>Add a todo</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <TodoForm
          titleChange={props.onTitleChange}
          descriptionChange={props.onDescriptionChange}
          />
      </Modal.Body>
      <Modal.Footer>
        <TodoFormButtons
          onCancel={props.onCancel}
          onSubmit={props.onSubmit}
          />
      </Modal.Footer>
    </Modal>
  )
}

TodoModal.propTypes = {
  showModal: PropTypes.bool.isRequired,
  onTitleChange: PropTypes.func.isRequired,
  onDescriptionChange: PropTypes.func.isRequired,
  onCancel: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired
}

export default TodoModal
