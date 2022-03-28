

const initState = {
    categories: [],
    paysuccess: false
  };
  
  const billReducer = (state = initState, action) => {
    switch (action.type) {
    case 'Categories':
        let category = action.data.filter(pro=> pro.country === "NG")
        return{
            ...state,
            categories: category
        }
    case 'PaySuccess':
        return{
            ...state,
            paysuccess: true
        }
    case 'clearPaySuccess':
        return{
            ...state,
            paysuccess: false
        }
      default:
        return state;
    }
  };
  
  export default billReducer;
  