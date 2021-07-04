const Reducer = (state, action) => {
  switch (action.type) {
    case "LOGIN_START":
      return {
        user: null,
        isFetching: true,
        error: false,
        search: "",
      };
    case "LOGIN_SUCCESS":
      return {
        user: action.payload,
        isFetching: false,
        error: false,
        search: "",
      };
    case "LOGIN_FAILURE":
      return {
        user: null,
        isFetching: false,
        error: true,
        search: "",
      };
    case "UPDATE_START":
      return {
        ...state,
        isFetching: true,
      };
    case "UPDATE_SUCCESS":
      return {
        user: action.payload,
        isFetching: false,
        error: false,
        search: "",
      };
    case "UPDATE_FAILURE":
      return {
        user: state.user,
        isFetching: false,
        error: true,
        search: "",
      };
    case "LOGOUT":
      return {
        user: null,
        isFetching: false,
        error: false,
        search: "",
      };
    case "SEARCH":
      return {
        ...state,
        search: action.payload,
      };
    default:
      return state;
  }
};

export default Reducer;
