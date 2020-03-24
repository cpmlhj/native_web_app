import { CHANGE_TAB, HEADER_DATA, CONTENT_LIST } from './actionTypes'
import axios from 'axios'

export const changeTab = (type) => {
      return {
            type: CHANGE_TAB,
            payload: type
      }
}

export const HeaderData = data => {
      return {
            type: HEADER_DATA,
            payload: data
      }
}

export const getHeaderData = () => {
      return dispatch => {
            axios({
                  method: 'get',
                  url: '/json/head.json'
            }).then(res => {
                  dispatch(HeaderData(res.data))
            })
      }
}

export const getContentList = (page) => {
      return dispatch => {
            axios({
                  method: 'get',
                  url: '/json/list.json'
            }).then(res => {
                  dispatch({
                        type: CONTENT_LIST,
                        currentPage: page,
                        payload : res.data
                  })
            })
      }
}