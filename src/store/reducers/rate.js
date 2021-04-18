

const initState = {
    category: [],
    subcategory: [],
    amount: 0
  };
  
  const rateReducer = (state = initState, action) => {
    switch (action.type) {
      case 'Category':
          return {
                ...state,
                category: action.data
            }
        case 'subCategory':
            return{
                ...state,
                subcategory: action.data
            }
        case 'RateCalculation':
            // first find the object of category selected
            let categoryDetails = state.subcategory.find(pro=> pro.id === action.data.id)

            // Then do some checks with the amount sent for minimum and maximum
            let rate = categoryDetails.nairarate

            // Do yor calcluation by mulitplyig the amount times * the rate
            let amount = parseFloat(rate) * parseFloat(action.data.amount)

            return{
                ...state,
                amount: amount
            }
      default:
        return state;
    }
  };
  
  export default rateReducer;
  