import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import promiseMiddleware from 'redux-promise';
import Reducers from './reducers';

const applicationInitialState = {
    user:[]
}

export const initializeStore = (preloadedState = applicationInitialState) => {
  return createStore(
    Reducers,
    preloadedState,
    composeWithDevTools(applyMiddleware(promiseMiddleware))
  )
}