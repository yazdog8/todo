import React from 'react'
import ReactDom from 'react-dom'
import { Provider } from 'react-redux'
import { HashRouter, Match } from 'react-router'
import Header from './layout/Header'
import ActiveTodos from './active/ActiveTodos'
import ResolvedTodos from './resolved/ResolvedTodos'
import AllTodos from './all/AllTodos'
import Info from './info/Info'
import routes from './constants/routes'
import store from './data/store'

ReactDom.render((
  <Provider store={store}>
    <HashRouter>
      <div>
        <Header />
        <Match exactly pattern={routes.HOME} component={ActiveTodos} />
        <Match exactly pattern={`${routes.INFO}:id`} component={Info} />
        <Match exactly pattern={routes.RESOLVED} component={ResolvedTodos} />
        <Match exactly pattern={routes.ALL} component={AllTodos} />
      </div>
    </HashRouter>
  </Provider>
), document.getElementById('app'))
