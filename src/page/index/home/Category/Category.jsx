import React from 'react'
import { connect } from 'react-redux'
import { getHeaderData } from '../../actions/tabAction'
import './Category.scss'
/**
 * @constructor <Category/>
 * @description waimaileibie
 */

class Category extends React.Component {
      constructor(props) {
            super(props)
            this.fetchData()
      }
      fetchData = () => {
            this.props.dispatch(getHeaderData())
      }
      renderItems = () => {
            let { categoryData } = this.props.state
            categoryData = categoryData.slice(0, 10)
            return categoryData.map(e => {
                  return <div key={e.name} className='category-item'>
                        <img src={e.url} alt="" className="item-icon" />
                        <p className='item-name'>{e.name}</p>
                  </div>
            })
      }
      render() {
            return (
                  <div className='category clearfix'>
                        {
                              this.renderItems()
                        }
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

export default connect(stateToProps, dispatchToProps)(Category)