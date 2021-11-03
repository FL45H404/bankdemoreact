const initialstate = {
  isLogin: false
};
export const LoginReducer = (state = initialstate, action) => {
  switch (action.type) {
    case "LOGIN":
      return { ...state, isLogin: !state.isLogin };
    default:
      return state;
  }
};
