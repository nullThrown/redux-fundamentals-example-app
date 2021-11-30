import { createStore, applyMiddleware } from 'redux'
import rootReducer from './rootReducer'
import { composeWithDevTools } from 'redux-devtools-extension'
const middleware = composeWithDevTools()
const store = createStore(rootReducer, middleware)

export default store
