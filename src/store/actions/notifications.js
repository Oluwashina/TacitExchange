import {GetApi} from '../helpers'



const getToken = () => {
	const token = localStorage.getItem("token");
	return token
}

export const getUserNotifications = (val) => {
    return async (dispatch, getState) => {
      try {
        const res = await GetApi("user/notifications", getToken());
        if (res.status === 200) {
          dispatch({ type: "UserNotifications", data: res.data});
        }
        if(res.status === 400){
          dispatch({ type: "NotifyError", err: res.data });
        }
      } catch (err) {
       console.log(err)
      }
    };
  };

