import {PostApi, GetApi} from '../helpers'
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
export const ApproveTradePayment = (id) =>{
  return async (dispatch, getState) => {
    dispatch({ type: "approve_loader", });
    try {
      const res = await PostApi(`payment/action/${id}?status=Completed`, '', getToken());
      if (res.status === 200) {
          
          dispatch({ type: "StopApproveLoader" });
        cogoToast.success('Trade successfully approved', { position: 'top-center', })
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
export const DeclineTradePayment = (id) =>{
  return async (dispatch, getState) => {
    dispatch({ type: "decline_loader", });
    try {
      const res = await PostApi(`payment/action/${id}?status=Declined`, '', getToken());
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



 

