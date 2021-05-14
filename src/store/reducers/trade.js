

const initState = {
    firstCard: "",
    secondCard: "",
    thirdCard: "",
    confirmed: false,
    trade_success: false,
  };
  
  const tradeReducer = (state = initState, action) => {
    switch (action.type) {
   case 'firstCard':  
        return{
            ...state,
            firstCard: action.image
        }
    case 'secondCard':  
        return{
            ...state,
            secondCard: action.image
        }
    case 'thirdCard':  
        return{
            ...state,
            thirdCard: action.image
        }
    case 'clearCardImages':
        return{
            ...state,
            firstCard: "",
            secondCard: "",
            thirdCard: "",
            trade_success: false
        }
    case 'clearConfirmStatus':
        return{
            ...state,
            confirmed: false
        }
    case 'TRADE_START':
        return{
            ...state,
            confirmed: true
        }
    case 'TRADE_SUCCESS':
        return{
            ...state,
            confirmed: false,
            trade_success: true
        }
    case 'TRADE_ERROR':
        return{
            ...state
        }
      default:
        return state;
    }
  };
  
  export default tradeReducer;
  