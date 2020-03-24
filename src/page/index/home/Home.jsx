import React from 'react'
import { connect } from 'react-redux'
import HomeHeader from './Header/Header'
import Category from './Category/Category'
import ContentList from './ContentList/ContentList'
/**
 * @constructor <Home/>
 * @description 首页
 */

class Home extends React.Component {
      render() {
            return (
                  <div>
                        <HomeHeader />
                        <Category />
                        <ContentList />
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

export default connect(stateToProps, dispatchToProps)(Home)