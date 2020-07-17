/* eslint-disable prettier/prettier */
// Initial State
const initialState = {
  transaction_data: null,
  transaction_loading: false,
  transaction_err: false,
  errMsg: null,
};

// Reducers (Modifies The State And Returns A New State)
const transactionReducer = (state = initialState, action) => {
  switch (action.type) {
    // GET HISTORY TRANSACTION
    case 'GET_HISTORY_PENDING': {
      return {
        ...state,
        ...{
          transaction_loading: true,
          transaction_err: false,
          errMsg: '',
        },
      };
    }
    case 'GET_HISTORY_REJECTED': {
      return {
        ...state,
        transaction_loading: false,
        transaction_err: true,
      };
    }
    case 'GET_HISTORY_FULFILLED': {
      const { result } = action.payload.data;
      return {
        ...state,
        ...{
          transaction_data: result,
          transaction_loading: false,
          transaction_err: false,
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
export default transactionReducer;
