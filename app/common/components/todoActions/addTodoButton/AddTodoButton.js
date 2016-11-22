import React, {PropTypes} from 'react'
import BaseIcon from '../../baseIcon/BaseIcon'
import {Button} from 'react-bootstrap'

export default class AddTodoButton extends React.Component {
  constructor (props) {
    super(props)

    this._updateModalState = this._updateModalState.bind(this)
  }
  _updateModalState () {
    this.props.actions.changeModalState(true)
  }
  render () {
    return (
      <div>
        <Button bsStyle='primary' onClick={this._updateModalState}>
          <BaseIcon iconType={this.props.iconType} />
        </Button>
      </div>
    )
  }
}

AddTodoButton.propTypes = {
  iconType: PropTypes.string,
  actions: PropTypes.object.isRequired
}

AddTodoButton.defaultProps = {
  iconType: 'fa-plus'
}
