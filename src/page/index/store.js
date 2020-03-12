import { createStore, applyMiddleware } from 'redux'
import mainReducer from './reducers/main'


const store = createStore(mainReducer)

export default store