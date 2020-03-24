import React from 'react'
import { connect } from 'react-redux'
import SearchBar from '../SearchBar/SearchBar'
import './Header.scss'
/**
 * @constructor <HomeHeader/>
 * @description 首页
 */

class HomeHeader extends React.Component {
      constructor(props) {
            super(props)
      }
      render() {
            return (
                  <div className='home-header'>
                        <SearchBar />
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


export default connect(stateToProps, dispatchToProps)(HomeHeader)