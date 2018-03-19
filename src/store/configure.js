import { createStore, applyMiddleware, compose } from 'redux';
import modules from './modules';

import ReduxThunk from 'redux-thunk'

const configure = () => {
  // const store = createStore(modules);
  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  const store = createStore(modules, composeEnhancers(
    applyMiddleware(ReduxThunk)
  ));
  return store;
}

export default configure;