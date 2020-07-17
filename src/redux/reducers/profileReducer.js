/* eslint-disable prettier/prettier */
// Initial State
const initialState = {
  profile_data: null,
  profile_inbox_data: null,
  profile_loading: false,
  profile_err: false,
  errMsg: null,
};

// Reducers (Modifies The State And Returns A New State)
const authReducer = (state = initialState, action) => {
  switch (action.type) {
    // GET PROFILE
    case 'GET_PROFILE_PENDING': {
      return {
        ...state,
        ...{
          profile_loading: true,
          profile_err: false,
          errMsg: '',
        },
      };
    }
    case 'GET_PROFILE_REJECTED': {
      return {
        ...state,
        profile_loading: false,
        profile_err: true,
      };
    }
    case 'GET_PROFILE_FULFILLED': {
      const { result } = action.payload.data;
      return {
        ...state,
        ...{
          profile_data: result,
          profile_loading: false,
          profile_err: false,
          errMsg: '',
        },
      };
    }
    // GET INBOX
    case 'GET_INBOX_PENDING': {
      return {
        ...state,
        ...{
          profile_loading: true,
          profile_err: false,
          errMsg: '',
        },
      };
    }
    case 'GET_INBOX_REJECTED': {
      const { message } = action.payload.data;
      return {
        ...state,
        profile_loading: false,
        profile_err: true,
        errMsg: message
      };
    }
    case 'GET_INBOX_FULFILLED': {
      const { result } = action.payload.data;
      return {
        ...state,
        ...{
          profile_inbox_data: result[0],
          profile_loading: false,
          profile_err: false,
          errMsg: '',
        },
      };
    }
    // EDIT PROFILE, PIN, AND AVATAR
    case 'EDIT_PROFILE_PENDING': {
      return {
        ...state,
        ...{
          profile_loading: true,
          profile_err: false,
          errMsg: '',
        },
      };
    }
    case 'EDIT_PROFILE_REJECTED': {
      const { message } = action.payload.data;
      return {
        ...state,
        profile_loading: false,
        profile_err: true,
        errMsg: message
      };
    }
    case 'EDIT_PROFILE_FULFILLED': {
      return {
        ...state,
        ...{
          profile_loading: false,
          profile_err: false,
          errMsg: '',
        },
      };
    }
    // DELETE PROFILE
    case 'DELETE_PROFILE_PENDING': {
      return {
        ...state,
        ...{
          profile_loading: true,
          profile_err: false,
          errMsg: '',
        },
      };
    }
    case 'DELETE_PROFILE_REJECTED': {
      const { message } = action.payload.data;
      return {
        ...state,
        profile_loading: false,
        profile_err: true,
        errMsg: message
      };
    }
    case 'DELETE_PROFILE_FULFILLED': {
      return {
        ...state,
        ...{
          profile_loading: false,
          profile_err: false,
          errMsg: '',
        },
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
