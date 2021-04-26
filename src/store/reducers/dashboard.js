

const initState = {
    count: {},
    Transaction: []
  };
  
  const dashboardReducer = (state = initState, action) => {
    switch (action.type) {
      case 'UserCount':
          return{
              ...state,
              count: action.data
          }
    case 'UserTransaction':
        return{
            ...state,
            Transaction: action.data
        }
      default:
        return state;
    }
  };
  
  export default dashboardReducer;
  