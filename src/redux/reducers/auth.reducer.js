/* eslint-disable prettier/prettier */
// Initial State
const initialState = {
  apikey: null,
  loggedIn: false,
  pinRequired: true,
  profile: [],
  isLoading: false,
  isError: false,
  errMsg: null,
};

// Reducers (Modifies The State And Returns A New State)
const authReducer = (state = initialState, action) => {
  switch (action.type) {
    // Default
    default: {
      return state;
    }
  }
};

// Exports
export default authReducer;
