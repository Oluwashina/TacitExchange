import {PostApi} from '../helpers'
import cogoToast from 'cogo-toast'


const getToken = () => {
	const token = localStorage.getItem("token");
	return token
}


// Upload a giftcard image
export const UploadGiftCardImage = (value, index) => {
    return async (dispatch, getState) => {
      // show a spinner or progress bar
      dispatch({ type: "StartCardLoader"});
        let formdata = new FormData()
        formdata.append("file", value);
      try {
        const res = await PostApi("card/image", formdata, getToken(), "multipart/form-data");
        if (res.status === 201) {
              var image = res.data.imageUrl
              // stop loader after success
              cogoToast.success('Card uploaded successfully!')

                   // check for index and upload
              switch(index){
                case 0:
                  dispatch({type: "firstCard", image, index})
                  break;
                case 1:
                  dispatch({type: "secondCard", image, index})
                  break;
                case 2:
                  dispatch({type: "thirdCard", image, index})
                  break;
                default:
                  break;
              }
             
          }
          if(res.status === 400 || res.status === 404){
            // stop loader for error
            cogoToast.error('Error while uploading image!')
            dispatch({ type: "StopCardLoader"});
          }
      } catch (err) {
        // var message = err.response.data
          console.log(err)
      }
    };
  };


  // clear the card images
export const clearCardImages = () =>{
    return dispatch =>{
        dispatch({type: 'clearCardImages'})
    }
  }

  // clear confirm status
  export const clearConfirmStatus = () =>{
    return dispatch =>{
        dispatch({type: 'clearConfirmStatus'})
    }
  }
  

export const createTrade = (val) => {
    return async (dispatch, getState) => {
        // let image = [];
        // var result = [
        //   ...image,
        //   getState().trade.firstCard,
        //   getState().trade.secondCard,
        //   getState().trade.thirdCard,
        // ]
        dispatch({ type: 'TRADE_START' });
      try {
        const res = await PostApi("trade", {
            cardAmount: val.amount,
            amount: getState().rate.tradeamount,
            categoryId: val.giftname,
            subCategoryId: val.category,
            imageUrl: val.imageUrl,
            comment: val.comment
        }, getToken(), "application/json")
        if (res.status === 201) {
          dispatch({ type: 'TRADE_SUCCESS' });
          cogoToast.success('Trade created successfully!')
        }
        if(res.status === 400){
          // invalid trade
          dispatch({ type: 'TRADE_ERROR' });
          cogoToast.error('Ooops!, looks like something went wrong with this trade. Please try with another card upload')
        }
      } catch (err) {
        console.log(err)
      }
    };
  };


