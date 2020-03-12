import React from 'react'
import { connect } from 'react-redux'

/**
 * @constructor <BottomBar>
 * @description 首页底部tab栏
 */

class BottomBar extends React.Component {
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

export default connect(stateToProps, dispatchToProps)(BottomBar)