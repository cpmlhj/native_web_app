import React from 'react'
import ReactDom from 'react-dom'
import { Provider } from 'react-redux'
import HotMain from './Main/HotMain.jsx'
import store from './store'

ReactDom.render(
      <Provider store={store}>
            <HotMain />
      </Provider>,
      document.getElementById('root')
)