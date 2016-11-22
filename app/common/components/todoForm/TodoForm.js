import React, {PropTypes} from 'react'
import { FormGroup, FormControl } from 'react-bootstrap'

const TodoForm = (props) => {
  const {title, description, titleChange, descriptionChange} = props

  return (
    <form>
      <FormGroup>
        <FormControl
          type='text'
          defaultValue={title}
          onBlur={titleChange}
          placeholder='Enter text'
          />
      </FormGroup>
      <FormGroup>
        <FormControl
          componentClass='textarea'
          defaultValue={description}
          onBlur={descriptionChange}
          placeholder='Enter Text'
          />
      </FormGroup>
    </form>
  )
}

TodoForm.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  titleChange: PropTypes.func,
  descriptionChange: PropTypes.func
}

TodoForm.defaultProps = {
  title: '',
  description: ''
}

export default TodoForm
