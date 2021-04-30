

const initState = {
    firstCard: "",
    secondCard: "",
    thirdCard: "",
    confirmed: false
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
            thirdCard: ""
        }
    case 'TRADE_START':
        return{
            ...state,
            confirmed: true
        }
    case 'TRADE_SUCCESS':
        return{
            ...state,
            confirmed: false
        }
      default:
        return state;
    }
  };
  
  export default tradeReducer;
  