import React from 'react'
import { connect } from 'react-redux'
import BottomBar from '../BottomBar/BottomBar.jsx'
import Home from '../home/Home'
class IndexMain extends React.Component {
      constructor(props) {
            super(props)
      }
      render() {
            return (
                  <div>
                        <Home />
                        <BottomBar />
                  </div>
            )
      }
}

const stateToProps = (state) => {
      return {
            state
      }
}
const dispatchToProps = (dispatch) => {
      return {
            dispatch
      }
}

export default connect(stateToProps, dispatchToProps)(IndexMain)