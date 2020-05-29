import {
  createStore,
  applyMiddleware,
} from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './redusers/index';

const middleware = applyMiddleware(thunk);

function getStore() {
  const store = createStore(
    rootReducer,
    middleware,
  );
  return store;
}


export default getStore;
