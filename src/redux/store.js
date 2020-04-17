import { applyMiddleware, combineReducers, compose, createStore } from 'redux';
import thunk from 'redux-thunk';
import { getDropDownListReducer, getWorldDataReducer, errorMessageReducer } from '../redux/reducer';

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const appReducer = combineReducers({
  getDropDownListReducer,
  getWorldDataReducer,
  errorMessageReducer
});

const rootReducer = (state, action) => {
  return appReducer(state, action)
}

const store = createStore(
  rootReducer,
  composeEnhancer(applyMiddleware(thunk))
);

export default store;