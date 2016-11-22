import React from 'react'
import { Link } from 'react-router'
import routes from '../constants/routes'

const Header = () => {
  return (
    <nav className='navbar navbar-fixed-top navbar-inverse'>
      <Link to={routes.HOME} className='navbar-brand'>Joe's Todos</Link>
      <ul className='nav navbar-nav'>
        <li className='nav-item'>
          <Link to={routes.HOME} activeClassName='active' className='nav-link'>Active</Link>
        </li>
        <li className='nav-item'>
          <Link
            to={routes.RESOLVED}
            activeClassName='active'
            className='nav-link'>Resolved</Link>
        </li>
        <li className='nav-item'>
          <Link
            to={routes.ALL}
            activeClassName='active'
            className='nav-link'>All</Link>
        </li>
      </ul>
    </nav>
  )
}

export default Header
