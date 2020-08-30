const isEmpty = require("is-empty");

const INITIAL_STATE = {
  user: {},
  isAuthenticated: false,
  loading: false,
};

const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "SET_CURRENT_USER":
      return {
        ...state,
        isAuthenticated: !isEmpty(action.payload),
        user: { ...action.payload },
      };
    case "USER_LOADING":
      return {
        ...state,
        loading: true,
      };
    case "USER_LOADED":
      return {
        ...state,
        loading: false,
      };
    default:
      return state;
  }
};

export default userReducer;
