import React, { PropTypes } from 'react'
import { Grid } from 'react-bootstrap'
import './mainLayout.scss'

class MainLayout extends React.Component {
  render () {
    return (
      <Grid bsClass='container main-layout'>
        {this.props.children}
      </Grid>
    )
  }
}

MainLayout.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(React.PropTypes.node),
    PropTypes.node
  ])
}

export default MainLayout
