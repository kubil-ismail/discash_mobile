/* eslint-disable prettier/prettier */
// Imports: Dependencies
import { combineReducers } from 'redux';

// Imports: Reducers
import authReducer from './auth.reducer';
import profileReducer from './profile.reducer';


// Redux: Root Reducer
const rootReducer = combineReducers({
  authReducer,
  profileReducer,
});

// Exports
export default rootReducer;
