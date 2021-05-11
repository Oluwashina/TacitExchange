import React, {useEffect, useRef, useState} from 'react';
import UserSideBar from '../../../components/UserSideBar/Sidebar';
import {Form, Formik} from 'formik'
import {tradeValidator} from '../../../validationSchema/validator'
import Nigeria from  '../../../assets/images/nigerialogo.svg'
import camera from '../../../assets/images/camera.svg'
import {connect} from 'react-redux'
import { clearTradeAmount, getRateCategory, getRateSubCategory, getTermsAndConditions, getUserRateValue } from '../../../store/actions/rate';
import './trade.css'
import cogoToast from "cogo-toast";
import { clearCardImages, createTrade, UploadGiftCardImage } from '../../../store/actions/trade';
import {useHistory} from 'react-router-dom'
import accountCircle from '../../../assets/images/accountCircle.svg'
import closeIcon from '../../../assets/images/closeIcon.svg'
import Modal from 'react-bootstrap/Modal'
import ReactHtmlParser from 'react-html-parser'

const UserTrade = (props) => {

    const {fetchCategory, category, fetchSubCategory, subcategory, amount, calcRate,
         handleCard, firstcard, secondcard, thirdcard, handleStartTrade, emptyImage, getTerms, 
         terms, accountDetails, minAmount, maxAmount, emptyamount, confirmed
        } = props

    const fileRef = useRef(null)
    const fileRef2 = useRef(null)
    const fileRef3 = useRef(null)

    const [editShow, setEditShow] = useState(false);

    const [successShow, setSuccessShow] = useState(false);

    const [tradeval, setTradeVal] = useState({});

    const [preview, setPreview] = useState([]);
    const fileobj= [];


    const handleEditClose = () => setEditShow(false);
    const handleEditShow = () => {
        setEditShow(true);
    }

    const handleSuccessClose = () => setSuccessShow(false);
    const handleSuccessShow = () => {
        setSuccessShow(true);
    }

    const ref = useRef()

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
const handleBackImage = () =>{
    var file = fileRef2.current.files[0]
    console.log(file)
    // handleCard(file, index)
}

const changedHandler = event => {
    let files = event.target.files;
    fileobj.push(files);
    let reader;

    for (var i = 0; i < fileobj[0].length; i++) {
        reader = new FileReader();
        reader.readAsDataURL(fileobj[0][i]);
        reader.onload = event => {
        preview.push(event.target.result);   // update the array instead of replacing the entire value of preview

        setPreview([...new Set(preview)]); // spread into a new array to trigger rerender
        } 
    } 
}

const removeImage = (index) =>{
  console.log(index)
  const result = [...preview];

  // removing the element using splice
  result.splice(index, 1);

  // updating the list
  setPreview(result);

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
    // check if amount entered is less than minimum expected or greater than maximum expected
    if(parseFloat(values.amount) < minAmount) {
        cogoToast.warn(`The minimum amount for this subcategory is $${minAmount}`)
    } 
    else if(parseFloat(values.amount) > maxAmount){
        cogoToast.warn(`The maximum amount for this subcategory is $${maxAmount}`)
    }
    // check if at least an image of the card is added
    else if(firstcard === ''){
        cogoToast.warn('Giftcard image(Front) is compulsory for a trade initialization')
    }
    else if(secondcard === ''){
      cogoToast.warn('Giftcard image(Back) is compulsory for a trade initialization')
    }
    else{
        // filter by category id and get terms and conditions for a trade
        let id = values.category
        getTerms(id)

        handleEditShow()
        setTradeVal(values)
    }
  }

//   confirm a trade
const confirmTrade = () =>{
    // check if user has a default account filled before starting trade
    if(accountDetails.length === 0){
        cogoToast.info('Please add a default account in the account details tab', {position: 'top-right'})
    }
    else{
        console.log(tradeval)

        handleStartTrade(tradeval) 
        
        setTimeout(() => {
            handleEditClose()

            // open success modal
            handleSuccessShow()
        }, 1000); 
         
          
    } 
}

// close a trade success dialog
const CloseTrade = () =>{

    setTimeout(() => {
        handleSuccessClose()
        //   clear gift card images uploaded
        emptyImage()   
        //    empty Amount you get too
        emptyamount()
        history.push('/user/transactions')
    }, 500); 
    
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
      {/* modal for displaying terms and conditions */}
      <Modal show={editShow}
            ref={ref}
            {...props}
         onHide={handleEditClose}>

              <Modal.Header >
             <div onClick={handleEditClose} style={{position: 'absolute', right: '35px', top: '20px', cursor: 'pointer'}}>
                <img src={closeIcon} alt="close" width="40" height="40" />
            </div>
             </Modal.Header>

            {/* login container */}
            <div className="d-none d-md-block" style={{position: 'absolute', left: '70px', top: '0px'}}>
                    <img alt="login" src={accountCircle} width="350" height="140" />
             </div>
            

            <div className="text-center contain-head mt-3 mt-lg-4" style={{position: 'relative'}}>
                <h3 className="login-text">Terms and
                <br /> Conditions</h3>
            </div>

            {/* login section */}
            <div className="container modal-contain">
                
                {/* terms and conditions layout */}
               
                { ReactHtmlParser(terms) }  


                {/* end of terms and conditions layout */}

                <div className="text-center mt-4">
                <button 
                type="submit"
                disabled={confirmed}
                onClick={confirmTrade}
                className="btn btn-blueTacit">Confirm Trade</button>
                </div>
             
            </div>
        
      </Modal>
      {/* end of edit account details modal */}

      {/* modal for displaying success fo trade */}
      <Modal show={successShow}
            ref={ref}
            {...props}
            
            backdrop="static"
         onHide={handleSuccessClose}>

            <div className="d-none d-md-block" style={{position: 'absolute', left: '70px', top: '0px'}}>
                    <img alt="login" src={accountCircle} width="350" height="140" />
             </div>

             <div className="text-center contain-head mt-4 mt-lg-5" style={{position: 'relative'}}>
                <h3 className="login-text">Trade Started
                </h3>
            </div>
           
            {/* login section */}
            <div className="modal-success">

                    <div className="text-center mt-3">
                        <h6 style={{fontWeight: 'bold', lineHeight: '22px'}}>You have successfully started a trade. <br /> We will get back to you shortly.</h6>
                    </div>

                <div className="text-center mt-lg-5 mt-4">
                <button 
                type="submit"
                onClick={CloseTrade}
                className="btn btn-blueTacit ">OK</button>
                </div>
             
            </div>
        
      </Modal>
      {/* end of successful trade */}


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
                            {/* <div className="row mt-lg-3 mt-0">
                                    <div className="col-lg-6">
                                        <p className="mb-0">Upload card image (Front)</p>

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
                                    
                            </div>     */}
{/* 
                            <div className="row mt-lg-3 mt-3">
                                    <div className="col-lg-6">
                                        <p className="mb-0">Purchase Receipt</p>

                                        
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
                            </div>   */}

                                  {/* upload image  */}
                                <div className="form-group mt-lg-3 mt-0">
                                       <label>Upload Cards</label>
                                       <div className="input-group cursor-pointer">
                                                <div className="custom-file">
                                                    <input accept="image/*"
                                                  
                                                     multiple
                                                     onChange={changedHandler}
                                                     className="custom-file-input" type="file" />
                                                    <label className="custom-file-label">
                                                        Add your file
                                                    </label>
                                                </div>
                                        </div>         
                                </div> 

                                <div className="fileupload">
                                    <div className="row">
                                        
                                        {(preview || []).map((url, index) => (
                                            <div className="col-3">
                                                 <div className="imageFile mb-3">
                                                    <span className="close-icon"
                                                     onClick={() => removeImage(index)}
                                                    ></span>
                                                    <img src={url} alt="..." key={index} 
                                                    style={{width: '75px',
                                                    height: '75px',
                                                    borderRadius: '4px'}} />
                                                </div>
                                             </div>
                                            ))}
                                        {/* <div className="imageFile">
                                            <span className="close-icon"></span>
                                            <img src={cardImg}
                                            style={{width: '75px',
                                                height: '75px',
                                                borderRadius: '4px'}}
                                            alt="d" />
                                            </div> */}

                                        
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
        amount: state.rate.tradeamount,
        minAmount: state.rate.userminAmount,
        maxAmount: state.rate.usermaxAmount,
        firstcard: state.trade.firstCard,
        secondcard: state.trade.secondCard,
        thirdcard: state.trade.thirdCard,
        terms: state.rate.terms,
        accountDetails: state.auth.accountDetails,
        confirmed: state.trade.confirmed
    }
}

const mapDispatchToProps = (dispatch) =>{
    return{
        fetchCategory: () => dispatch(getRateCategory()),
        fetchSubCategory: (id) => dispatch(getRateSubCategory(id)),
        calcRate: (amount, id) => dispatch(getUserRateValue(amount, id)),
        handleCard: (values, index) => dispatch(UploadGiftCardImage(values, index)),
        handleStartTrade: (values) => dispatch(createTrade(values)),
        emptyImage: () => dispatch(clearCardImages()),
        emptyamount: () => dispatch(clearTradeAmount()),
        getTerms: (id) => dispatch(getTermsAndConditions(id))
    }
}
 
export default connect(mapStateToProps, mapDispatchToProps)(UserTrade);