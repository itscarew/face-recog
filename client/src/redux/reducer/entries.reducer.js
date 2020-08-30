const INITIAL_STATE = {
  entries: [],
  loading: false,
  clarifaiData: {},
};

const entriesReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "SET_CURRENT_USER_ENTRIES":
      return {
        ...state,
        entries: [...action.payload],
      };
    case "CREATE_ENTRIES":
      return {
        ...state,
        entries: [action.payload, ...state.entries],
      };

    case "ADD_CLARIFAI_RESPONSE":
      return {
        ...state,
        clarifaiData: action.payload,
      };

    case "DELETE_ENTRIES":
      return {
        ...state,
        entries: state.entries.filter((entry) => entry._id !== action.payload),
      };

    case "ENTRY_LOADING":
      return {
        ...state,
        loading: true,
      };
    case "ENTRY_LOADED":
      return {
        ...state,
        loading: false,
      };
    default:
      return state;
  }
};

export default entriesReducer;
