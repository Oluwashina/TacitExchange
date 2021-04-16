

const initState = {
  isAuthenticated: false,
  token: '',
  firstname: "",
  lastname: "",
  email: "",
  id: "",
  phoneNumber: "",
  isVerified: false,
  walletBalance: "",
  resetcode: false,
  validlink: false
};

const authReducer = (state = initState, action) => {
  switch (action.type) {
    case 'LOGIN_SUCCESS':
      localStorage.setItem("token", action.data.token)
        return {
              ...state,
              isAuthenticated: true,
              token: action.data.token,
              firstname: action.data.profile.firstName,
              lastname: action.data.profile.lastName,
              email: action.data.profile.email,
              id: action.data.profile.id,
              phoneNumber: action.data.profile.phoneNumber,
              isVerified: action.data.profile.isVerified,
              walletBalance: action.data.profile.walletBalance,
          }
    case 'logout':
          return {
              ...state,
              isAuthenticated: false,
              token: '',
          }
   case 'SIGNUP_SUCCESS':
            return{
              ...state,
            }
    case 'SIGNUP_FAIL':
          return{
            ...state
          }
    case 'VALID_RESETCODE':
      return{
        ...state,
        resetcode: false
      }
    case 'INVALID_RESETCODE':
      return{
        ...state,
        resetcode: true
      }
    case 'VALID_LINK':
      return{
        ...state,
        validlink: false
      }
    case 'INVALID_LINK':
      return{
        ...state,
        validlink: true
      }
    default:
      return state;
  }
};

export default authReducer;
