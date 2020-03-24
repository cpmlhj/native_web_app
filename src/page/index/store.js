import { createStore, applyMiddleware } from 'redux'
import mainReducer from './reducers/main'
import thunk from 'redux-thunk'

const store = createStore(
      mainReducer,
      applyMiddleware(thunk)
)

if (module.hot) {
      module.hot.accept('./reducers/main', () => {
            const nextRoorReducer = require('./reducers/main').default;
            store.replaceReducer(nextRoorReducer)
      })
}
export default store