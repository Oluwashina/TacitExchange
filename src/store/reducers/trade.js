

const initState = {
    firstCard: "",
    secondCard: "",
    thirdCard: ""
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
      default:
        return state;
    }
  };
  
  export default tradeReducer;
  