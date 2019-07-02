import { createStore, applyMiddleware, compose } from 'redux'
// import createSagaMiddleware from 'redux-saga'
import rootReducer from '../reducers'
// import rootSaga from './sagas'

// const sagaMiddleware = createSagaMiddleware()
const enhancers = []
const middlewares = [
  // sagaMiddleware,
  // checkTokenMiddleware,
]

// if (process.env.NODE_ENV === 'development') {
  const devToolsExtension = window['__REDUX_DEVTOOLS_EXTENSION__'] || (() => (noop) => noop)

  if (typeof devToolsExtension === 'function') {
    enhancers.push(devToolsExtension())
  }
// }

const composedEnhancers = compose(
  applyMiddleware(...middlewares),
  ...enhancers
)

const initialState = {}



const store = createStore(
  rootReducer,
  initialState,
  composedEnhancers
)

// sagaMiddleware.run(rootSaga)

export default store
