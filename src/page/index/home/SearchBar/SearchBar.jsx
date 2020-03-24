import React from 'react'
import { connect } from 'react-redux'
import './SearchBar.scss'
/**
 * @constructor <SearchBar/>
 * @description 顶部搜索
 */

class SearchBar extends React.Component {
      render() {
            return (
                  <div className='search-bar'>
                        <div className="bar-location">
                            <div className="location-icon"></div>
                            <div className="location-text">佛山</div>
                        </div>
                        <div className="search-btn">
                            <p className="place-holder">汉堡</p>
                        </div>
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

export default connect(stateToProps, dispatchToProps)(SearchBar)