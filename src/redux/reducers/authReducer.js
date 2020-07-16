/* eslint-disable prettier/prettier */
// Initial State
const initialState = {
  apikey: null,
  loggedIn: false,
  pinRequired: false,
  userId: null,
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
        isError: false,
        errMsg: '',
      };
    }
    case 'LOGIN_REJECTED': {
      return {
        ...state,
        isLoading: false,
        isError: true,
        errMsg: action.payload.message,
      };
    }
    case 'LOGIN_FULFILLED': {
      const { status, message, result } = action.payload.data;
      if (status) {
        return {
          ...state,
          isLoading: false,
          isError: false,
          errMsg: message,
          userId: result.userId,
          apikey: result.apiKey,
          loggedIn: status,
        };
      } else {
        return {
          ...state,
          isLoading: false,
          isError: true,
          errMsg: message,
        };
      }
    }
    // Logout reducer
    case 'LOGOUT': {
      return {
        ...state,
        isLoading: false,
        isError: false,
        errMsg: '',
        userId: null,
        apikey: null,
        loggedIn: false,
      };
    }
    // Default
    default: {
      return state;
    }
  }
};

// Exports
export default authReducer;
