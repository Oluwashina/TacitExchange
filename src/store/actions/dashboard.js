import {GetApi} from '../helpers'



const getToken = () => {
	const token = localStorage.getItem("token");
	return token
}

// get counts on user's dashboard (exchanger)
export const getUserDashboardCount = () => {
    return async (dispatch, getState) => {
      try {
        const res = await GetApi("dashboard/count/exchanger", getToken());
        if (res.status === 200) {
          dispatch({ type: "UserCount", data: res.data});
        }
        if(res.status === 400){
          dispatch({ type: "Count_Error", err: res.data });
        }
      } catch (err) {
       console.log(err)
      }
    };
  };

export const getUserPendingTransaction = () => {
    return async (dispatch, getState) => {
      try {
        const res = await GetApi("exchanger/trade/pending", getToken());
        if (res.status === 200) {
          dispatch({ type: "UserPendingTransaction", data: res.data});
        }
        if(res.status === 400){
          dispatch({ type: "PendingTradeError", err: res.data });
        }
      } catch (err) {
       console.log(err)
      }
    };
  };

