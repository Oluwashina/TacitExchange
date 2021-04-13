

const initState = {
  isAuthenticated: false,
  token: '',
};

const authReducer = (state = initState, action) => {
  switch (action.type) {
    case 'LOGIN_SUCCESS':
      localStorage.setItem("token", action.data.token)
        return {
              ...state,
              isAuthenticated: true,
              token: action.data.token,
          }
    case 'logout':
          return {
              ...state,
              isAuthenticated: false,
              token: '',
          }
    default:
      return state;
  }
};

export default authReducer;
