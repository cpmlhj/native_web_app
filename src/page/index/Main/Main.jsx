import React from 'react'
import { connect } from 'react-redux'


class IndexMain extends React.Component {
      constructor(props) {
            super(props)
      }
      render() {
            return (
                  <div></div>
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