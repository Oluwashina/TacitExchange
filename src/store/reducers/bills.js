

const initState = {
    categories: [],
    paysuccess: false,
    meterdetails: {},
    validMeter: false,
    invalidMeter: false,
    loader: false
  };
  
  const billReducer = (state = initState, action) => {
    switch (action.type) {
    case 'Categories':
        let category = action.data.filter(pro=> pro.country === "NG")
        return{
            ...state,
            categories: category
        }
    case 'PaySuccess':
        return{
            ...state,
            paysuccess: true
        }
    case 'clearPaySuccess':
        return{
            ...state,
            paysuccess: false
        }
    case 'clearMeterDetails':
        return{
            ...state,
            validMeter: false,
            invalidMeter: false,
            meterdetails: {}
        }
    case 'startMeterCheck':
        return{
            ...state,
            validMeter: false,
            invalidMeter: false,
            loader: true
        }
    case 'validMeter':
        return{
            ...state,
            validMeter: true,
            loader: false
        }
    case 'InvalidMeter':
        return{
            ...state,
            invalidMeter: true,
            loader: false
        }
    case 'MeterDetails':
        return{
            ...state,
            meterdetails: action.data
        }
    case 'MeterDetailsError':
        return{
            ...state,
            meterdetails: action.err
        }
      default:
        return state;
    }
  };
  
  export default billReducer;
  