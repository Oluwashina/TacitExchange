

const initState = {
    transactions: [],
    transactionsSearch: [],
    transaction: {},
    loader: false,
    withdrawsuccess: false,
    walletBalance: 0
  };
  
  const walletReducer = (state = initState, action) => {
    switch (action.type) {
    case 'Transactions':
        return{
            ...state,
            transactions: action.data,
            transactionsSearch: action.data,
        }
    case "searchTransaction":
        let res = state.transactionsSearch.filter((val) => {
            return (
            val.type.toLowerCase().includes(action.data.toLowerCase()) ||
            val.amount.toString().includes(action.data)
            );
        });
        return {
            ...state,
            transactions: res
        }
    case "filterTransactions":
        const transaction = state.transactions.find((val) => val.id === action.data);
        return {
            ...state,
            transaction,
        };
    case "LoadTransactions":
        return {
            ...state,
            loader: true,
        };
        case "LoadStop":
        return {
            ...state,
            loader: false,
        };
    case "WithdrawSuccess":
        return {
            ...state,
            withdrawsuccess: true,
        };
    case "Withdraw_Error":
      return {
        ...state,
        withdrawsuccess: false,
      };
    case "clearWithdrawal":
      return {
        ...state,
        withdrawsuccess: false,
      };
    case "WalletBalance":
        return{
            ...state,
            walletBalance: action.data.walletBalance
        }
      default:
        return state;
    }
  };
  
  export default walletReducer;
  