import { ADD_TODO } from '../actions/actionTypes'
export default {
      num: (state = 0, action) => {
            switch(action.type) {
                  case ADD_TODO:
                        const n = state
                        return n + action.obj.num
                  default:
                        return state      
            }
      }
}