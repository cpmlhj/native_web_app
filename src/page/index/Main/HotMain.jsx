import React from 'react'
import { hot } from 'react-hot-loader'
import Main from './Main'

class HotMain extends React.Component {
      render() {
            return <Main />
      }
}

export default hot(module)(HotMain)