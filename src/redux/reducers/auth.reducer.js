/* eslint-disable prettier/prettier */
// Initial State
const initialState = {
  apikey: 1234,
  loggedIn: true,
  pinRequired: false,
  userId: 30,
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
