
const initState = {
    users: [],
    admins: [],
    susloader: false,
    count: {},
    userTrade: [],
    Trades: [],
    declineloader: false,
    approveloader: false
  };
  
  const adminReducer = (state = initState, action) => {
    switch (action.type) {
      case 'Users':
          return{
              ...state,
              users: action.data   
        }
      case 'Admins':
        return{
          ...state,
          admins: action.data
        }
      case 'Suspend_Loader':
            return{
                ...state,
                susloader: true
            }
        case 'StopSuspendLoader':
            return{
                ...state,
                susloader: false
            }
        case 'SuccessLoad':
            let result;
          switch(action.name){
            case 'Suspend':
              result =  state.users.map((item)=> item.id === action.id ? {...item, isEnabled: false} : [...state.users])
              break;
            case 'Restore':
              result =  state.users.map((item)=> item.id === action.id ? {...item, isEnabled: true} : [...state.users])
              break;
            default:
              break;
          }
          return{
              ...state,  
              users: result
          }
        case 'AdminSuccess':
          let res;
          switch(action.name){
            case 'Suspend':
              res =  state.admins.map((item)=> item.id === action.id ? {...item, isEnabled: false} : [...state.admins])
              break;
            case 'Restore':
              res =  state.admins.map((item)=> item.id === action.id ? {...item, isEnabled: true} : [...state.admins])
              break;
            default:
              break;
          }
          return{
            ...state,
            admins: res
          }
        case 'Count':
          return{
            ...state,
            count: action.data
          }
        case 'UserTradeHistory':
          return{
            ...state,
            userTrade: action.data
          }
        case 'Trades':
          return{
            ...state,
            Trades: action.data
          }
      case 'approve_loader':
        return{
          ...state,
          approveloader: true
        }
      case 'StopApproveLoader':
        return{
          ...state,
          approveloader: false
        }
        case 'decline_loader':
          return{
            ...state,
            declineloader: true
          }
      case 'StopDeclineLoader':
        return{
          ...state,
          declineloader: false
        }
      default:
        return state;
    }
  };
  
  export default adminReducer;
  