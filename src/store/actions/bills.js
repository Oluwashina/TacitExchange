import {GetApi,PostApi} from '../helpers'
import cogoToast from 'cogo-toast';



const getToken = () => {
	const token = localStorage.getItem("token");
	return token
}

export const getBillerCategories = (type) => {
    return async (dispatch, getState) => {
      try {
        const res = await GetApi(`pay/bill/categories/${type}`, getToken());
        if (res.status === 200) {
          dispatch({ type: "Categories", data: res.data.bankCode.data});
        }
        if(res.status === 400){
          dispatch({ type: "Category_Error", err: res.data });
        }
      } catch (err) {
       console.log(err)
      }
    };
  };


  // validate meter details
  export const validateMeterDetails = (itemCode, code, customerID) => {
    return async (dispatch, getState) => {
      dispatch({ type: "startMeterCheck"})
      try {
        const res = await GetApi(`validate/bill/customer?item_code=${itemCode}&code=${code}&customer=${customerID}`, getToken());
        if (res.status === 200) {
          dispatch({ type: "validMeter"})
          dispatch({ type: "MeterDetails", data: res.data.message.data});
        }
        if(res.status === 400){
          dispatch({ type: "InvalidMeter"})
          dispatch({ type: "MeterDetailsError", err: res.data });
        }
      } catch (err) {
       console.log(err)
      }
    };
  };


// bill payments
export const PayBill = (val) =>{
    return async (dispatch, getState) => {
      try {
        const res = await PostApi("pay/bill", 
        { 
           amount: parseFloat(val.amount),
           customer: val.customer,
           type: val.provider,
           bill_payment_type: val.billPaymentType
        },
         getToken());
        if (res.status === 200) {
            dispatch({ type: "PaySuccess"});
          cogoToast.success('Your request is been processed!', { position: 'top-center', })
        }
        if(res.status === 400){
            var msg = res.data.message;
            dispatch({ type: "Pay_Error", err: res.data });
            cogoToast.error(`${msg}`);
        }
      } catch (err) {  
        console.log(err)
      }
    };
  }

// clear mater details
  export const clearMeterDetails = () =>{
    return dispatch =>{
        dispatch({type: 'clearMeterDetails'})
    }
  }

  // clear  billpayment status
  export const clearPayStatus = () =>{
    return dispatch =>{
        dispatch({type: 'clearPaySuccess'})
    }
  }


