import React from 'react'
import { connect } from 'react-redux'
import BottomBar from '../BottomBar/BottomBar.jsx'

class IndexMain extends React.Component {
      constructor(props) {
            super(props)
      }
      render() {
            return (
                  <div>
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