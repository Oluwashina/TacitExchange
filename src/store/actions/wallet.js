import {GetApi, PostApi} from '../helpers'
import cogoToast from "cogo-toast";


const getToken = () => {
	const token = localStorage.getItem("token");
	return token
}


export const getWalletTransactions = (val) => {
    return async (dispatch, getState) => {
        dispatch({ type: "LoadTransactions" });
      try {
        const res = await GetApi("transactions/exchanger", getToken());
        if (res.status === 200) {
            dispatch({ type: "LoadStop" });
          dispatch({ type: "Transactions", data: res.data.message});
        }
        if(res.status === 400){
            dispatch({ type: "LoadStop" });
          dispatch({ type: "Transaction_Error", err: res.data });
        }
      } catch (err) {
       console.log(err)
      }
    };
};


// get wallet balance
export const getWalletBalance = (val) => {
  return async (dispatch, getState) => {
    try {
      const res = await GetApi("walletbalance", getToken());
      if (res.status === 200) {
        dispatch({ type: "WalletBalance", data: res.data.message});
      }
      if(res.status === 400){
        dispatch({ type: "Balance_Error", err: res.data });
      }
    } catch (err) {
     console.log(err)
    }
  };
};



// Search transactions by type or amount
export const searchTransaction = (val) =>{
    return dispatch =>{
        dispatch({ type: "searchTransaction", data: val });
    }
  }

  
// filter transactions by id
export const filterTransactionDetails = (id) => {
    return (dispatch, getState) => {
      dispatch({ type: "filterTransactions", data: id });
    };
};

// filter transactions by date,status and amount
export const filterTransactions = (val) => {
    var status = val.status;
    var from_date = val.from_date;
    var to_date = val.to_date;
    return async (dispatch, getState) => {
      dispatch({ type: "LoadTransactions" });
      try {
        const res = await GetApi(
          `transactions/exchanger?status=${status}&from_date=${from_date}&to_date=${to_date}`,
          getToken()
        );
        if (res.status === 200) {
          dispatch({ type: "LoadStop" });
          dispatch({ type: "Transactions", data: res.data.message });
        }
        if (res.status === 400) {
          dispatch({ type: "LoadStop" });
          dispatch({ type: "Transaction_Error", err: res.data });
        }
      } catch (err) {
        console.log(err);
      }
    };
  };


  // make a withdrawal request
export const WithdrawFunds = (val) => {
    return async (dispatch, getState) => {
      try {
        const res = await PostApi(
          "withdraw",
          { 
            password: val.password,
            amount: val.amount,
            accountName: val.accountName,
            accountNumber: val.accountNumber,
            bankName: val.bankName,
            bankCode: val.bankCode,
            narration: val.narration
           },
          getToken(),
          "application/json"
        );
        if (res.status === 200) {
          dispatch({ type: "WithdrawSuccess" });
          cogoToast.success("Request Successful, Your payment is on the way!");
        }
        if (res.status === 400) {
          var msg = res.data.message;
          dispatch({ type: "Withdraw_Error", err: res.data });
          cogoToast.error(`${msg}`);
        }
      } catch (err) {
        console.log(err);
      }
    };
  };

  // clear withdrawal success
export const clearWithdrawal = () => {
  return (dispatch, getState) => {
    dispatch({ type: "clearWithdrawal" });
  };
};



