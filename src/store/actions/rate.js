import {GetApi} from '../helpers'



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