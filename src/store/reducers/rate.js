import cogoToast from "cogo-toast";

const initState = {
    category: [],
    subcategory: [],
    amount: 0,
    terms: "",
    minAmount: 0,
    maxAmount: 0,
    tradeamount: 0,
    userminAmount: 0,
    usermaxAmount: 0
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
        case 'Terms':
            let terms = state.subcategory.find(pro=> pro.id === action.data)
            return{
                ...state,
                terms: terms.termsandconditions
            }
        case 'RateCalculation':
            let amount;
            // first find the object of category selected
            let categoryDetails = state.subcategory.find(pro=> pro.id === action.data.id)

            // Then do some checks with the amount sent for minimum and maximum
            let minAmount = categoryDetails.minimumAmount
            let maxAmount = categoryDetails.maximumAmount

            if(parseFloat(action.data.amount) < parseFloat(minAmount)){
                cogoToast.info(`The minimum amount for this subcategory is $${minAmount}`)
                amount = 0
            }
            else if(parseFloat(action.data.amount) > parseFloat(maxAmount)){
                cogoToast.info(`The maximum amount for this subcategory is $${maxAmount}`)
                amount = 0
            }
            else{

                let rate = categoryDetails.nairarate

            // Do yor calcluation by mulitplyig the amount times * the rate
             amount = parseFloat(rate) * parseFloat(action.data.amount)
            
            }

            return{
                ...state,
                amount: amount,
                minAmount: minAmount,
                maxAmount: maxAmount
            }
        case 'UserRateCalculation':
            let tradeamount;
            // first find the object of category selected
            let usercategoryDetails = state.subcategory.find(pro=> pro.id === action.data.id)

            // Then do some checks with the amount sent for minimum and maximum
            let userminAmount = usercategoryDetails.minimumAmount
            let usermaxAmount = usercategoryDetails.maximumAmount

            if(parseFloat(action.data.amount) < parseFloat(userminAmount)){
                cogoToast.info(`The minimum amount for this subcategory is $${userminAmount}`)
                tradeamount = 0
            }
            else if(parseFloat(action.data.amount) > parseFloat(usermaxAmount)){
                cogoToast.info(`The maximum amount for this subcategory is $${usermaxAmount}`)
                tradeamount = 0
            }
            else{

                let rate = usercategoryDetails.nairarate

            // Do yor calcluation by mulitplyig the amount times * the rate
             tradeamount = parseFloat(rate) * parseFloat(action.data.amount)
            
            }

            return{
                ...state,
                tradeamount: tradeamount,
                userminAmount: userminAmount,
                usermaxAmount: usermaxAmount
            }
        case 'clearTradeAmount':
            return{
                ...state,
                tradeamount: 0
            }
      default:
        return state;
    }
  };
  
  export default rateReducer;
  