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

export const getUserTransaction = (val) => {
    return async (dispatch, getState) => {
      try {
        const res = await GetApi("exchanger/trade?status="+val, getToken());
        if (res.status === 200) {
          dispatch({ type: "UserTransaction", data: res.data});
        }
        if(res.status === 400){
          dispatch({ type: "TradeError", err: res.data });
        }
      } catch (err) {
       console.log(err)
      }
    };
  };
  

    // Get ouflow chart data for month,year, and week functionality
export const ChartRequest = (value) => {
  return async (dispatch, getState) => {
    try {
        const time = value
      const res = await GetApi("graph/admin?time="+time, getToken());
      if (res.status === 200) {
          
        dispatch({ type: "ChartData", data: res.data});
      }
      if(res.status === 400){
        dispatch({ type: "Chart_Error", err: res.data });
      }
    } catch (err) {
      console.log(err)
    }
  };
};

