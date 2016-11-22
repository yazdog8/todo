import React, {PropTypes} from 'react'
import classnames from 'classnames'

const BaseIcon = (props) => {
  const classNames = classnames({
    [`fa ${props.iconType}`]: true,
    'pull-right': props.alignRight
  })
  return (<i className={classNames} />)
}

BaseIcon.propTypes = {
  iconType: PropTypes.string.isRequired,
  alignRight: PropTypes.bool
}

BaseIcon.defaultProps = {
  alignRight: false
}

export default BaseIcon
