import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import profile from '../reducers/profile';
import repository from '../reducers/repository';
import filter from '../reducers/filter';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default () => {
  const store = createStore(combineReducers({
    profile,
    repository,
    filter
  }),
    composeEnhancers(applyMiddleware(thunk))
  );
  return store;
};