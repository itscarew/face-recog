const INITIAL_STATE = {
  status: false,
};

const viewPasswordReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "SET_VIEW_PASSWORD":
      return {
        ...state,
        status: !state.status,
      };
    default:
      return state;
  }
};

export default viewPasswordReducer;
