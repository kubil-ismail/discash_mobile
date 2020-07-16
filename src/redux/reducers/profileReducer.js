/* eslint-disable prettier/prettier */
// Initial State
const initialState = {
  profile_data: [],
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
    case 'GET_PROFILE_FULFILLED': {
      const { result } = action.payload.data;
      return {
        ...state,
        ...{
          profile_data: result[0],
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
