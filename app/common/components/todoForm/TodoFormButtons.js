import React, {PropTypes} from 'react'
import { Button } from 'react-bootstrap'
import './todoForm.scss'

const TodoFormButtons = (props) => {
  return (
    <div className='todo-form-buttons'>
      <Button onClick={props.onCancel}>
        Cancel
      </Button>
      <Button bsStyle='primary' onClick={props.onSubmit}>
        Submit
      </Button>
    </div>
  )
}

TodoFormButtons.propTypes = {
  onSubmit: PropTypes.func,
  onCancel: PropTypes.func
}

export default TodoFormButtons
