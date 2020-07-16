/* eslint-disable prettier/prettier */
// Imports: Dependencies
import { combineReducers } from 'redux';

// Imports: Reducers
import authReducer from './auth.reducer';

// Redux: Root Reducer
const rootReducer = combineReducers({
  authReducer,
});

// Exports
export default rootReducer;
