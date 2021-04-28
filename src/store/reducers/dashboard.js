

const initState = {
    count: {},
    Transaction: [],
    chartData: []
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
    case 'ChartData':
      return{
        ...state,
        chartData: action.data
      }
      default:
        return state;
    }
  };
  
  export default dashboardReducer;
  