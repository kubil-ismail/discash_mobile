/* eslint-disable prettier/prettier */
// Initial State
const initialState = {
  loggedIn: false,
  apikey: null,
  profile: [],
  isLoading: false,
  isError: false,
  errMsg: null,
};

// Reducers (Modifies The State And Returns A New State)
const authReducer = (state = initialState, action) => {
  switch (action.type) {
    // LOGIN reducer
    case 'LOGIN_PENDING': {
      return {
        ...state,
        isLoading: true,
        isError: false
      }
    }
    case 'LOGIN_REJECTED': {
      return {
        ...state,
        isLoading: false,
        isError: true,
        errMsg: action.payload.message
      }
    }
    case 'LOGIN_FULFILLED': {
      const { message, result } = action.payload
      return {
        ...state,
        isLoading: false,
        isError: false,
        errMsg: message,
        apikey: result.apikey,
        loggedIn: true
      }
    }
    // Default
    default: {
      return state;
    }
  }
};

// Exports
export default authReducer;
