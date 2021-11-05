import {PostApi, GetApi, DeleteApi, PutApi} from '../helpers'
import cogoToast from "cogo-toast";


const getToken = () => {
	const token = localStorage.getItem("token");
	return token
}

// get all users on the platform
export const getAllUsers = (val) => {
    return async (dispatch, getState) => {
      try {
        const res = await GetApi("member?role="+val, getToken());
        if (res.status === 200) {
          dispatch({ type: "Users", data: res.data});
        }
        if(res.status === 400){
          dispatch({ type: "Users_Error", err: res.data });
        }
      } catch (err) {
       console.log(err)
      }
    };
  };

  // get all admins on the platform
export const getAllAdmins = (val) => {
  return async (dispatch, getState) => {
    try {
      const res = await GetApi("member?role="+val, getToken());
      if (res.status === 200) {
        dispatch({ type: "Admins", data: res.data});
      }
      if(res.status === 400){
        dispatch({ type: "Admin_Error", err: res.data });
      }
    } catch (err) {
     console.log(err)
    }
  };
};


  // disable a user functionality
  export const SuspendUser = (user) =>{
    return async (dispatch, getState) => {
      dispatch({ type: "Suspend_Loader", });
      let id  = user.userId
      let name = 'Suspend'
      try {
        const res = await PostApi("disableuser", { ...user }, getToken());
        if (res.status === 200) {
            
            dispatch({ type: "StopSuspendLoader" });
            dispatch({type: "SuccessLoad", id, name})
          cogoToast.success('User successfully suspended!', { position: 'top-center', })
        }
        if(res.status === 400){
          dispatch({ type: "StopSuspendLoader" });
          cogoToast.error('Error while suspending user')
        }
      } catch (err) {
        // var message = err.response.data
        console.log(err)
      }
    };
  }

  // activate a user
  export const ActivateUser = (user) =>{
    return async (dispatch, getState) => {
      dispatch({ type: "Suspend_Loader", });
      let id  = user.userId
      console.log(id)
      let name = 'Restore'
      try {
        const res = await PostApi("enableuser", { ...user }, getToken());
        if (res.status === 200) {
            
            dispatch({ type: "StopSuspendLoader" });
            dispatch({type: "SuccessLoad", id, name})
          cogoToast.success('User successfully activated!', { position: 'top-center', })
        }
        if(res.status === 400){
          dispatch({ type: "StopSuspendLoader" });
          cogoToast.error('Error while activating user')
        }
      } catch (err) {
       console.log(err)
      }
    }
  }

// suspend admin functionality
  export const SuspendAdmin = (user) =>{
    return async (dispatch, getState) => {
      dispatch({ type: "Suspend_Loader", });
      let id  = user.userId
      let name = 'Suspend'
      try {
        const res = await PostApi("disableuser", { ...user }, getToken());
        if (res.status === 200) {
            
            dispatch({ type: "StopSuspendLoader" });
            dispatch({type: "AdminSuccess", id, name})
          cogoToast.success('Admin successfully suspended!', { position: 'top-center', })
        }
        if(res.status === 400){
          dispatch({ type: "StopSuspendLoader" });
          cogoToast.error('Error while suspending admin')
        }
      } catch (err) {
        // var message = err.response.data
        console.log(err)
      }
    };
  }

  // activate admin functionality
  export const ActivateAdmin = (user) =>{
    return async (dispatch, getState) => {
      dispatch({ type: "Suspend_Loader", });
      let id  = user.userId
      let name = 'Restore'
      try {
        const res = await PostApi("enableuser", { ...user }, getToken());
        if (res.status === 200) {
            
            dispatch({ type: "StopSuspendLoader" });
            dispatch({type: "AdminSuccess", id, name})
          cogoToast.success('Admin successfully activated!', { position: 'top-center', })
        }
        if(res.status === 400){
          dispatch({ type: "StopSuspendLoader" });
          cogoToast.error('Error while activating admin')
        }
      } catch (err) {
       console.log(err)
      }
    }
  }

// admin dashboard count
export const getDashboardCount = () => {
  return async (dispatch, getState) => {
    try {
      const res = await GetApi("dashboard/count", getToken());
      if (res.status === 200) {
        dispatch({ type: "Count", data: res.data});
      }
      if(res.status === 400){
        dispatch({ type: "Count_Error", err: res.data });
      }
    } catch (err) {
     console.log(err)
    }
  };
};


// get the droplet balance from digital oceans
export const getDropletBalance = () => {
  return async (dispatch, getState) => {
    try {
      const res = await GetApi("droplet/balance", "tacitshayo");
      if (res.status === 200) {
        console.log(res)
        dispatch({ type: "Droplet", data: res.data});
      }
      if(res.status === 400){
        dispatch({ type: "Droplet_Error", err: res.data });
      }
    } catch (err) {
     console.log(err)
    }
  };
};


// get all pending trades
export const getTrades = (val) => {
  return async (dispatch, getState) => {
    try {
      const res = await GetApi(`trade?status=${val}`, getToken());
      if (res.status === 200) {
        dispatch({ type: "Trades", data: res.data});
      }
      if(res.status === 400){
        dispatch({ type: "Trade_Error", err: res.data });
      }
    } catch (err) {
     console.log(err)
    }
  };
};

// get a user trade history
export const getUserTradeHistory = (val) => {
  return async (dispatch, getState) => {
    let day = val.time
    let id = val.id
    try {
      const res = await GetApi(`user/trade/${id}?time=${day}`, getToken());
      if (res.status === 200) {
        dispatch({ type: "UserTradeHistory", data: res.data});
      }
      if(res.status === 400){
        dispatch({ type: "Trade_Error", err: res.data });
      }
    } catch (err) {
     console.log(err)
    }
  };
};

// approve a trade payment
export const ApproveTradePayment = (val, id) =>{
  return async (dispatch, getState) => {
    dispatch({ type: "approve_loader", });
    try {
      const res = await PostApi(`payment/action/${id}`, {...val}, getToken());
      if (res.status === 200) {
          dispatch({ type: "StopApproveLoader" });
          cogoToast.success('Your request is now been processed!', { position: 'top-center', })
      }
      if(res.status === 400){
        dispatch({ type: "StopApproveLoader" });
        cogoToast.error('Error while approving trade')
      }
    } catch (err) {
      // var message = err.response.data
      console.log(err)
    }
  };
}

// decline a trade payment
export const DeclineTradePayment = (val,id) =>{
  return async (dispatch, getState) => {
    dispatch({ type: "decline_loader", });
    try {
      const res = await PostApi(`decline/trade/${id}`, { ...val }, getToken());
      if (res.status === 200) {
          
          dispatch({ type: "StopDeclineLoader" });
        cogoToast.success('Trade successfully declined!!!', { position: 'top-center', })
      }
      if(res.status === 400){
        dispatch({ type: "StopDeclineLoader" });
        cogoToast.error('Error while approving trade')
      }
    } catch (err) {
      // var message = err.response.data
      console.log(err)
    }
  };
}


// Get all giftcards functionality
export const getGiftCards = (val) => {
  return async (dispatch, getState) => {
    try {
      const res = await GetApi(`subcategory/listing`, getToken());
      if (res.status === 200) {
        dispatch({ type: "GiftCards", data: res.data});
      }
      if(res.status === 400){
        dispatch({ type: "Card_Error", err: res.data });
      }
    } catch (err) {
     console.log(err)
    }
  };
};


// add new giftcards functionality
export const AddGiftCard = (val) =>{
  return async (dispatch, getState) => {
    // filter by id and get category name
    let categoryname = getState().rate.category.find(pro=> pro.id === val.categoryId).categoryname
    try {
      const res = await PostApi("category/subcategory", 
      { 
        ...val,
        categoryname: categoryname
      },
       getToken());
      if (res.status === 201) {
          dispatch({type: "Card_Success"})
        cogoToast.success('Giftcard successfully added!', { position: 'top-center', })
      }
      if(res.status === 400){
        dispatch({ type: "Card_Error" });
        cogoToast.error('Error while adding card')
      }
    } catch (err) {
      // var message = err.response.data
      console.log(err)
    }
  };
}

// add a new category of giftcards
export const AddNewGiftCard = (val) =>{
  return async (dispatch, getState) => {
    try {
      const res = await PostApi("category/subcategory", 
      { 
        ...val,
      },
       getToken());
      if (res.status === 201) {
          dispatch({type: "Card_Success"})
        cogoToast.success('Giftcard successfully created to list!', { position: 'top-center', })
      }
      if(res.status === 400){
        dispatch({ type: "Card_Error" });
        cogoToast.error('Error while adding card')
      }
    } catch (err) {
      // var message = err.response.data
      console.log(err)
    }
  };
}

// update a giftcard category or rate functionality
export const updateGiftCards = (val, id) => {
  return async (dispatch, getState) => {
       // filter by id and get category name
       let categoryname = getState().rate.category.find(pro=> pro.id === val.categoryId).categoryname
    try {
      const res = await PutApi("subcategory/listing/"+id, {
        ...val,
        categoryname: categoryname
      }, getToken(), "application/json")
      if (res.status === 201) {
        dispatch({type: "Card_Success"})
        cogoToast.success('Giftcard successfully updated!', { position: 'top-center', })
      }
      if(res.status === 400){
        dispatch({ type: "Card_Error" });
        cogoToast.error('Error while updating card')
      }
    } catch (err) {
      console.log(err)
    }
  };
};


// delete a giftcard category
export const deleteGiftCards = (id, categoryId) => {
  return async (dispatch, getState) => {
    try {
      const res = await DeleteApi(`subcategory/listing/${id}?categoryId=${categoryId}`, getToken());
      if (res.status === 200) {
        dispatch({ type: "GiftCards"});
        cogoToast.success('Giftcard deleted successfully!')
      }
      if(res.status === 400){
        dispatch({ type: "Card_Error", err: res.data });
      }
    } catch (err) {
     console.log(err)
    }
  };
};


export const SearchUser = (value) => {
  return (dispatch, getState) => {
    dispatch({ type: "SearchUser", data: value });
  };
};



 

