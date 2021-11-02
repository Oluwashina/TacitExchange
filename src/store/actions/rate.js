import {GetApi, PostApi} from '../helpers'
import cogoToast from "cogo-toast";



// get all rates category
export const getRateCategory = (val) => {
  return async (dispatch, getState) => {
    try {
      const res = await GetApi("category/listing", "tacitshayo");
      if (res.status === 200) {
        dispatch({ type: "Category", data: res.data});
      }
      if(res.status === 400){
        dispatch({ type: "Category_Error", err: res.data });
      }
    } catch (err) {
     console.log(err)
    }
  };
};

// export const getRateCategory = ()  =>{
//     return async function(dispatch) {
//          try {
//         const res = await axios.get("https://api.cardtonic.com/api/admincategorylisting");
//         if (res.status === 200) {
//           dispatch({ type: "Category", data: res.data.data});
//         }
//          } catch (err) {
//        console.log(err)
//       }
//     };
//  }

// get all rates subcategory
export const getRateSubCategory = (val) => {
  return async (dispatch, getState) => {
    try {
      const res = await GetApi("subcategory/listing/"+val, "tacitshayo");
      if (res.status === 200) {
        dispatch({ type: "subCategory", data: res.data});
      }
      if(res.status === 400){
        dispatch({ type: "subCategory_Error", err: res.data });
      }
    } catch (err) {
     console.log(err)
    }
  };
};

//  export const getRateSubCategory = (id)  =>{
//     return async function(dispatch) {
//          try {
//         const res = await axios.get("https://api.cardtonic.com/api/adminSubCategoryListing?categoryId="+id);
//         if (res.status === 200) {
//           dispatch({ type: "subCategory", data: res.data.data});
//         }
//          } catch (err) {
//        console.log(err)
//       }
//     };
//  }


export const getRateValue = (amount, id) =>{
    return dispatch =>{
        dispatch({type: 'RateCalculation', data: {
            amount,
            id
        }})
    }
}

// clear user trade amount to zero after successful trade
export const clearTradeAmount = () =>{
  return dispatch =>{
      dispatch({type: 'clearTradeAmount'})
  }
}


export const getUserRateValue = (amount, id) =>{
  return dispatch =>{
      dispatch({type: 'UserRateCalculation', data: {
          amount,
          id
      }})
  }
}


export const getTermsAndConditions = (id) =>{
  return dispatch =>{
      dispatch({type: 'Terms', data: id})
  }
}


// api call for contact functionality on landing page
export const contactSupport = (user) => {
  return async (dispatch, getState) => {
    try {
      const res = await PostApi("support", {...user}, "", "application/json")
      if (res.status === 200) {
         dispatch({ type: "CONTACT_SUCCESS" });
         cogoToast.success('Thanks for getting across to us!', { position: 'top-right', })
      }
      if(res.status === 400){
        dispatch({ type: "CONTACT_ERROR", err: res.data});
        cogoToast.error('Error sending message!')
      }
    } catch (err) {
      console.log(err)
    }
  };
};