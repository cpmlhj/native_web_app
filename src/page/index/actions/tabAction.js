import { CHANGE_TAB } from './actionTypes'


export const changeTab = (type) => {
      return {
            type: CHANGE_TAB,
            payload: type
      }
}