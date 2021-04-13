import axios from 'axios'

export const getRateCategory = ()  =>{
    return async function(dispatch) {
         try {
        const res = await axios.get("https://api.cardtonic.com/api/admincategorylisting");
        if (res.status === 200) {
          dispatch({ type: "Category", data: res.data.data});
        }
         } catch (err) {
       console.log(err)
      }
    };
 }

 export const getRateSubCategory = (id)  =>{
    return async function(dispatch) {
         try {
        const res = await axios.get("https://api.cardtonic.com/api/adminSubCategoryListing?categoryId="+id);
        if (res.status === 200) {
          dispatch({ type: "subCategory", data: res.data.data});
        }
         } catch (err) {
       console.log(err)
      }
    };
 }


export const getRateValue = (amount, id) =>{
    return dispatch =>{
        dispatch({type: 'RateCalculation', data: {
            amount,
            id
        }})
    }
}