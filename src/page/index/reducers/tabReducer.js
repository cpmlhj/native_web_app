import { CHANGE_TAB } from '../actions/actionTypes'
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
      activeKey: TABKEY.home
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
      }
}