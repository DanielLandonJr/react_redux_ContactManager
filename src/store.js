import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers';

// should be empty by default
const initialState = {};

// setup middlwWare?????
const middleWare = [thunk];

// create the store itself...compose allows multiple things to happen at once ... the window. stuff comes from redux instructions found in the chrome devtool
const store = createStore(
  rootReducer,
  initialState,
  compose(
    applyMiddleware(...middleWare),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

export default store;
