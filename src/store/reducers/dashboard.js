

const initState = {
    count: {},
    pendingTransaction: []
  };
  
  const dashboardReducer = (state = initState, action) => {
    switch (action.type) {
      case 'UserCount':
          return{
              ...state,
              count: action.data
          }
    case 'UserPendingTransaction':
        return{
            ...state,
            pendingTransaction: action.data
        }
      default:
        return state;
    }
  };
  
  export default dashboardReducer;
  