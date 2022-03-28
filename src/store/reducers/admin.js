
const initState = {
    users: [],
    usersSearch: [],
    admins: [],
    susloader: false,
    count: {},
    droplet: {},
    userTrade: [],
    Trades: [],
    declineloader: false,
    approveloader: false,
    giftcards: []
  };
  
  
  const adminReducer = (state = initState, action) => {
    switch (action.type) {
      case 'Users':
          return{
              ...state,
              users: action.data,
              usersSearch: action.data   
        }
     case 'SearchUser':
          var word = action.data
          let user = state.usersSearch.filter(function (item) {
              return item.firstName.toLowerCase().includes(word.toLowerCase());
          });
          return{
              ...state,
              users: user
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
        case 'Droplet':
          return{
            ...state,
            droplet: action.data.Balance
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
      case 'GiftCards':
        return{
          ...state,
          giftcards: action.data
        }
      default:
        return state;
    }
  };
  
  export default adminReducer;
  