/* eslint-disable prettier/prettier */
// Imports: Dependencies
import { combineReducers } from 'redux';

// Imports: Reducers
import authReducer from './authReducer';
import profileReducer from './profileReducer';
import transactionReducer from './transactionReducer';


// Redux: Root Reducer
const rootReducer = combineReducers({
  authReducer,
  profileReducer,
  transactionReducer,
});

// Exports
export default rootReducer;
