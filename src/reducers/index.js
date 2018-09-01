import { combineReducers } from 'redux';

// custom reducers
import contactReducer from './contactReducer';

// this is similiar to Consumer export from Context.api
export default combineReducers({
  contact: contactReducer
});
