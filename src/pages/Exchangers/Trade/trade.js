import React, {useEffect, useRef} from 'react';
import UserSideBar from '../../../components/UserSideBar/Sidebar';
import {Form, Formik} from 'formik'
import {tradeValidator} from '../../../validationSchema/validator'
import Nigeria from  '../../../assets/images/nigerialogo.svg'
import camera from '../../../assets/images/camera.svg'
import {connect} from 'react-redux'
import { getRateCategory, getRateSubCategory, getRateValue } from '../../../store/actions/rate';
import './trade.css'
import cogoToast from "cogo-toast";
import { clearCardImages, createTrade, UploadGiftCardImage } from '../../../store/actions/trade';
import {useHistory} from 'react-router-dom'

const UserTrade = (props) => {

    const {fetchCategory, category, fetchSubCategory, subcategory, amount, calcRate,
         handleCard, firstcard, secondcard, thirdcard, handleStartTrade, emptyImage} = props

    const fileRef = useRef(null)
    const fileRef2 = useRef(null)
    const fileRef3 = useRef(null)

    const history = useHistory()

    useEffect(() =>{
        fetchCategory()
  }, [fetchCategory])

   //   upload front image of card
   const handleFrontImage = (index) =>{
    var file = fileRef.current.files[0]
    console.log(file)
    handleCard(file, index)
}

// upload back image of card
const handleBackImage = (index) =>{
    var file = fileRef2.current.files[0]
    console.log(file)
    handleCard(file, index)
}

// handle receipt of card
const handleReceiptImage = (index) =>{
    var file = fileRef3.current.files[0]
    console.log(file)
    handleCard(file, index)
}


//   submit a trade
  const handleSubmit = async (values, setSubmitting,)  =>{
    console.log(values)
    // check if at least an image of the card is added
    if(firstcard === ''){
        cogoToast.warn('Front and Back images are compulsory for a trade initialization')
    }
    else if(secondcard === ''){
      cogoToast.warn('Front and Back images are compulsory for a trade initialization')
    }
    else{
        await handleStartTrade(values) 

        setTimeout(() => {
            history.push('/user/transactions')
          }, 2000);  
          
        //   clear gift card images uploaded
        emptyImage()
    }
  }

  const handleSubCategory = (val) =>{
    fetchSubCategory(val)
}

const handleCalculation = (amount, categoryId, giftname) =>{
    if(giftname === ""){
        cogoToast.warn("Oops!, looks like you haven't selected a giftcard")
    }
    else if(categoryId === ""){
        cogoToast.warn("Oops!, looks like you haven't selected a category")
    }
    else{
        calcRate(amount, categoryId)

    }
    
}


    return ( 
        <>
        <UserSideBar />
        <div className="usermain">
            <div className="contain" style={{width: '100%', paddingLeft: '20px', paddingRight: '20px'}}>

                {/* trade layout */}
                <div className="tradeSection mt-4 mb-5">

                        
              <Formik
                onSubmit={(values, {setSubmitting}) =>
                    handleSubmit(values, setSubmitting)
                    }
                validationSchema={tradeValidator}
                initialValues={{giftname: "", category: "", amount: "", comment: ""}}
              >
                  {({
                      handleChange,
                      isSubmitting,
                      handleSubmit,
                      handleBlur,
                      handleReset,
                      setFieldValue,
                      values,
                      touched,
                      errors
                  })=>(
                      <Form onSubmit={handleSubmit}>

                        <div className="row">
                            <div className="col-lg-6">
                             <div className="form-group mt-lg-3 mt-3">
                              <label htmlFor="category">Gift Card Name</label>
                                <select
                                 name="giftname"
                                 values={values.giftname}
                                 onChange={(e) => {
                                    handleChange(e, setFieldValue("category", ""))
                                    handleSubCategory(e.currentTarget.value);
                                  }}
                                 onBlur={handleBlur}
                                 className="form-control select-style" 
                                 id="giftname">
                                    <option defaultValue="" >Select</option>
                                    {category.map((opt, index) => {
                                            return <option key={index} value={opt.id}>{opt.categoryname}</option>
                                        })}
                                    
                                </select>
                                <small style={{ color: "#dc3545" }}>
                                  {touched.giftname && errors.giftname}
                              </small>
                            </div>
                        </div>

                        <div className="col-lg-6">
                            <div className="form-group mt-lg-3 mt-0">
                              <label htmlFor="category">Gift Card Category</label>
                                <select 
                                name="category"
                                value={values.category}
                                onBlur={handleBlur}
                                onChange={handleChange}
                                className="form-control select-style"
                                 id="category">
                                    <option defaultValue="">Select</option>
                                    {subcategory.map((opt, index) => {
                                            return <option key={index} value={opt.id}>{opt.subcategoryname}</option>
                                        })}
                                </select>
                                <small style={{ color: "#dc3545" }}>
                                  {touched.category && errors.category}
                              </small>
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-lg-6">
                            <div className="form-group mt-lg-3 mt-0">
                                <label htmlFor="email">Amount</label>
                                <input
                                value={values.amount}
                                onChange={(e) => {
                                    handleChange(e)
                                    handleCalculation(e.currentTarget.value, values.category, values.giftname);
                                  }}
                                onBlur={handleBlur}
                                id="amount"
                                className="form-control input-style"
                                placeholder="Amount in USD"
                                style={{border: '1px solid rgba(8, 152, 215, 0.2)'}}
                                type="tel"
                                />
                                <small style={{ color: "#dc3545" }}>
                                  {touched.amount && errors.amount}
                              </small>
                            </div>
                        </div>

                        <div className="col-lg-6">
                            <div className="form-group input-container mt-lg-3 mt-0">
                              <label htmlFor="category">You Get</label>
                              <div className="amount-style">
                                    <div className="amount-div">
                                        <div>
                                            <img src={Nigeria} style={{width: '25px', height:"25px"}} alt="nigeria" />
                                        </div>
                                        <div className="ml-2">
                                            <p className="mb-0" style={{color: '#2C3A50', fontWeight: 'bold'}}>NGN</p>
                                        </div>
                                    </div>
                                </div>
                              <input
                                className="form-control input-style amount-disabled"
                                style={{color: '#2C3A50', fontWeight: 'bold', fontSize: '1.3rem', border: '1px solid rgba(8, 152, 215, 0.2)'}}
                                placeholder="0.00"
                                disabled
                                
                                value={amount.toFixed(2).replace(
                                    /\B(?=(\d{3})+(?!\d))/g,
                                    ","
                                  )}
                                type="text"
                                />
                            </div>
                        </div>
                    </div>

                    {/* image upload and comment section */}
                    <div className="row">
                        <div className="col-lg-6">

                        {/* images to upload */}
                            <div className="row mt-lg-3 mt-0">
                                    <div className="col-lg-6">
                                        <p className="mb-0">Upload card image (Front)</p>

                                        {/* image div */}
                                        <div className="tradeImage mt-2">
                                            <img 
                                             src={firstcard ? firstcard : camera}
                                             className={
                                                 firstcard ? "cameraUploadStyle" : "cameraStyle"
                                             }
                                             alt="Default" />
                                            <label>
                                            <input type="file"
                                                className="file_upload"
                                                ref={fileRef}
                                                accept="image/*"
                                                onChange={() => handleFrontImage(0)}
                                                />
                                            </label>
                                        </div>

                                    </div>

                                    <div className="col-lg-6 mt-3 mt-lg-0">
                                         <p className="mb-0">Upload card image (Back)</p>

                                          {/* image div */}
                                        <div className="tradeImage mt-2">
                                            <img 
                                             src={secondcard ? secondcard : camera}
                                             className={
                                                 secondcard ? "cameraUploadStyle" : "cameraStyle"
                                             }
                                          alt="Default" />
                                            <label>
                                            <input type="file"
                                                className="file_upload"
                                                ref={fileRef2}
                                                accept="image/*"
                                                onChange={() => handleBackImage(1)}
                                                />
                                            </label>
                                        </div>

                                    </div>
                            </div>    

                            <div className="row mt-lg-3 mt-3">
                                    <div className="col-lg-6">
                                        <p className="mb-0">Purchase Receipt</p>

                                        {/* image div */}
                                        <div className="tradeImage mt-2">
                                            <img 
                                             src={thirdcard ? thirdcard : camera}
                                             className={
                                                 thirdcard ? "cameraUploadStyle" : "cameraStyle"
                                             }
                                             alt="Default" />
                                            <label>
                                            <input type="file"
                                                className="file_upload"
                                                accept="image/*"
                                                ref={fileRef3}
                                                onChange={() => handleReceiptImage(2)}
                                                />
                                            </label>
                                        </div>

                                    </div>
                            </div>        
                            
                        </div>
                        
                            {/* comment */}
                        <div className="col-lg-6">
                            <div className="form-group mt-lg-3 mt-3">
                                <label htmlFor="password">Comment</label>
                                <textarea className="form-control input-style"
                                id="comment"
                                rows="6"
                                style={{resize: 'none', border: '1px solid rgba(8, 152, 215, 0.2)'}}
                                value={values.comment}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                placeholder="Enter code(s) here if you are trading ecode or if your card is not clear." />
                                <small style={{ color: "#dc3545" }}>
                                    {touched.comment && errors.comment}
                                </small>
                            </div>
                        </div>
                    </div>

                    <div className="text-center mt-lg-5 mt-2">
                     <button 
                      type="submit"
                      disabled={isSubmitting}
                                        
                     className="btn btn-pinkTacit trade-size">Start Trade</button>
                    </div>
                 </Form>
                  )}

                </Formik>

            </div>

            </div>
        </div>

        </>
     );
}

const mapStateToProps = (state) =>{
    return{
        category: state.rate.category,
        subcategory: state.rate.subcategory,
        amount: state.rate.amount,
        firstcard: state.trade.firstCard,
        secondcard: state.trade.secondCard,
        thirdcard: state.trade.thirdCard
    }
}

const mapDispatchToProps = (dispatch) =>{
    return{
        fetchCategory: () => dispatch(getRateCategory()),
        fetchSubCategory: (id) => dispatch(getRateSubCategory(id)),
        calcRate: (amount, id) => dispatch(getRateValue(amount, id)),
        handleCard: (values, index) => dispatch(UploadGiftCardImage(values, index)),
        handleStartTrade: (values) => dispatch(createTrade(values)),
        emptyImage: () => dispatch(clearCardImages())
    }
}
 
export default connect(mapStateToProps, mapDispatchToProps)(UserTrade);