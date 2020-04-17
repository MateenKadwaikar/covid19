import { applyMiddleware, combineReducers, compose, createStore } from 'redux';
import thunk from 'redux-thunk';
import { getDropDownListReducer, getWorldDataReducer } from '../redux/reducer';

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const appReducer = combineReducers({
  getDropDownListReducer,
  getWorldDataReducer
});

const rootReducer = (state, action) => {
  return appReducer(state, action)
}

const store = createStore(
  rootReducer,
  composeEnhancer(applyMiddleware(thunk))
);

export default store;