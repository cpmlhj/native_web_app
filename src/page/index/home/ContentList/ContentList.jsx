import React from 'react'
import { connect } from 'react-redux'
import { getContentList } from '../../actions/tabAction'
import ListItem from './ListItem/ListItem'
import './ContentList.scss'
/**
 * @constructor <ContentList/>
 * @description shangjialibiao
 */

class ContentList extends React.Component {
      constructor(props) {
            super(props)
            this.page = 0;
            this.props.dispatch(getContentList(this.page))
            window.addEventListener('scroll', this.onloadDis)
            this.state = {
                  isend: false
            }
      }
      componentWillUnmount() {
            window.removeEventListener('scroll', this.onloadDis)
      }
      onloadDis() {
            let clientHeight = document.documentElement.clientHeight;
            let scrollHeight = document.body.scrollHeight;
            let scroll = document.documentElement.scrollTop;
            let proload = 30;
            if ((scroll + clientHeight) >= (scrollHeight - proload)) {
                  this.page++;
                  if (this.page > 3) {
                        this.setState({
                              isend: true
                        })
                  } else {
                        console.log(this.page)
                        this.props.dispatch(getContentList(this.page))
                  }
            }
      }
      renderItems = () => {
            const { contentList } = this.props.state
            return contentList.map(i => {
                  return <ListItem key={i.id} data={i} />
            })
      }
      render() {
            return (
                  <div className='list-content'>
                        <h4 className='list-title'>
                              <span className="title-line"></span>
                              <span className="title">附近商家</span>
                              <span className="title-line"></span>
                        </h4>
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

export default connect(stateToProps, dispatchToProps)(ContentList)