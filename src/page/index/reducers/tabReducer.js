import { CHANGE_TAB, HEADER_DATA, CONTENT_LIST } from '../actions/actionTypes'
import { TABKEY } from '../config'
const initState = {
      tabs: [
            {
                  name: '首页',
                  key: TABKEY.home
            },
            {
                  name: '订单',
                  key: TABKEY.order
            },
            {
                  name: '我的',
                  key: TABKEY.my
            }
      ],
      activeKey: TABKEY.home,
      categoryData: [],
      contentList: []
}
export default {
      tabs: (state = initState.tabs, action) => {
            switch (action.type) {
                  default:
                        return state
            }
      },
      activeKey: (state = initState.activeKey, action) => {
            switch (action.type) {
                  case CHANGE_TAB:
                        return action.payload
                  default:
                        return state
            }
      },
      categoryData: (state = initState.categoryData, action) => {
            switch (action.type) {
                  case HEADER_DATA:
                        return action.payload.data.primary_filter
                  default:
                        return state
            }
      },
      contentList: (state = initState.contentList, action) => {
            switch (action.type) {
                  case CONTENT_LIST:
                        if (action.currentPage === 0) {
                              return action.payload.data.poilist
                        } else {
                              let list = state.contentList;
                              list.concat(action.payload.data.poilist)
                              return list
                        }
                  default:
                        return state
            }
      }
}