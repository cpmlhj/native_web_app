import './BottomBar.scss';
import React from 'react';
import { connect } from 'react-redux';
import { changeTab } from '../actions/tabAction'
/**
 * @constructor <BottomBar>
 * @description 首页底部tab栏
 */

class BottomBar extends React.Component {
      constructor(props) {
            super(props)
      }
      changeTab = (item) => {
            this.props.dispatch(changeTab(item.key))
      }
      renderItems = () => {
            let { tabs, activeKey } = this.props.state
            return tabs.map(item => {
                  let cls = item.key + ' btn-item';
                  if (item.key === activeKey) {
                        cls += ' action'
                  }
                  return (
                        <div key={item.key} className={cls} onClick={() => this.changeTab(item)}>
                              <div className="tab-icon"></div>
                              <div className="btn-name">{item.name}</div>
                        </div>
                  )
            })
      }
      render() {
            return (
                  <div className='bottom-bar'>
                        {this.renderItems()}
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

export default connect(stateToProps, dispatchToProps)(BottomBar)