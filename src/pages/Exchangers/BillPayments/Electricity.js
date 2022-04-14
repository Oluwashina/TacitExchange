import React,{useEffect, useState} from 'react';
import Sidebar from '../../../components/UserSideBar/Sidebar';
import './bills.css'
import briefcase from '../../../assets/images/briefcase.svg'
import eye_fill from '../../../assets/images/ri-eye-fill.svg'
import { connect } from 'react-redux';
import {Form, Formik} from 'formik'
import {buyElecValidator} from '../../../validationSchema/validator'
import { getWalletBalance } from '../../../store/actions/wallet';
import { clearMeterDetails, clearPayStatus, getBillerCategories, PayBill, validateMeterDetails } from '../../../store/actions/bills';
import { useHistory } from 'react-router-dom';
import cogoToast from 'cogo-toast';

const BuyElectricityPage = ({walletBalance, fetchWallet, fetchCategory, category, pay, clearPay, paysuccess, validateMeter, meterdetails, validMeter, invalidMeter, loader, clearDetails}) => {

    const history = useHistory();

    useEffect(()=>{
        clearDetails()
        fetchWallet()
        fetchCategory('power')
    },[fetchWallet, fetchCategory, clearDetails])

    const [walletShow, setWalletShow] = useState(false)

    const [prov, setProv] = useState(null)

    const [billerCode, setBillerCode] = useState('')


    const [itemCode, setItemCode] = useState('')

    const [amt, setAmt] = useState(0)

    const handleProv = (val, amount) =>{
        setProv(val)

        // get biller code, and item code of the provided selected
        let billerCode = category.find(resp => resp.short_name === val).biller_code 
        setBillerCode(billerCode)

        let itemCode = category.find(resp => resp.short_name === val).item_code 
        setItemCode(itemCode)
      
         if(amount === ""){
             setAmt(0) 
         }
         else{
            //  set amount and fee
            setAmt(parseFloat(amount))
         }
    }

    const handleMeterNumber = (customerId, provider) =>{
        if(provider === ''){
            cogoToast.warn('Please select a provider')
        }
        else{
            validateMeter(itemCode, billerCode, customerId)
        }
    }

    const handleAmount = (val) =>{
        let res;
        if(val === ""){
            res = 0
        }
        else{
        res = parseFloat(val)
        }
  
        setAmt(res)
    }


    const toggleWalletAmount = () =>{
        setWalletShow(walletShow ? false : true );
     }
     
     const handleToFixed = (val) =>{
        return parseFloat(val).toFixed(2)
    }

    const handleSubmit = async (values)  =>{
        let type = category.find(resp => resp.short_name === values.provider).biller_name 
        const creds = {
            ...values,
            customer: values.customer,
            provider: type,
            billPaymentType: "Electricity",
            amount: amt
        }
         await pay(creds)
     }

     useEffect(()=>{
        if(paysuccess){
            setTimeout(()=>{
                history.push('/my-wallet')
            },3000)
        clearPay()
        }
    },[history, paysuccess, clearPay])


    return (  
        <>
         <Sidebar title="Buy Electricity" />
            <div className="usermain">
                <div className="contain" style={{width: '100%', paddingLeft: '20px', paddingRight: '20px'}}>

                <div className='row mt-5 mb-5'>
                     <div className='col-lg-8'>

                        <div className='bills_card'>

                        <Formik
                            onSubmit={(values, {setSubmitting}) =>
                                handleSubmit(values, setSubmitting)
                                }
                            validationSchema={buyElecValidator}
                            initialValues={{provider: "", customer: "", amount: ""}}
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

                                    <div className="form-group input-container">
                                        <label htmlFor="provider">Select Provider</label>
                                        <select
                                        defaultValue=""
                                        value={values.provider}
                                        onChange={(e) => {
                                            handleChange(e)
                                            handleProv(e.currentTarget.value, values.amount);
                                        }}
                                        onBlur={handleBlur}
                                        id="provider"
                                        className="form-control select-style"
                                        placeholder="NGN 0.00"
                                        style={{border: '1px solid rgba(8, 152, 215, 0.2)'}}
                                        type="tel"
                                        >
                                        <option value="" disabled>
                                            Select a Provider
                                            </option>

                                            {category.map((opt) => {
                                                    return <option key={opt.id} value={opt.short_name}>{opt.short_name}</option>
                                                    })}          
                                            </select>
                                            <small style={{ color: "#dc3545" }}>
                                        {touched.provider && errors.provider}
                                                </small>
                                    </div>


                                    <div className="form-group input-container">
                                        <label htmlFor="customer">Meter Number</label>
                                         
                                         <div className='meterDiv'>
                                            <input
                                                value={values.customer}
                                                onChange={(e) => {
                                                    handleChange(e)
                                                }}
                                                onBlur={handleBlur}
                                                id="customer"
                                                className="form-control input-style"
                                                placeholder="Enter your meter number"
                                                style={{border: '1px solid rgba(8, 152, 215, 0.2)'}}
                                                type="tel"
                                                />
                                                <p onClick={() => handleMeterNumber(values.customer, values.provider)} 
                                                className={
                                                    loader ? 'getBtn disabled' : 'getBtn'
                                                }
                                                
                                                >Get Details</p>
                                         </div>

                                         {
                                            errors.customer &&
                                            <small style={{ color: "#dc3545" }}>
                                              {touched.customer && errors.customer}
                                            </small>
                                        }

                                        { 
                                          validMeter &&                                          
                                          <small style={{ color: "#0d92d5" }}>
                                              {validMeter ? meterdetails.name : ""}
                                          </small>
                                        }

                                        { 
                                          invalidMeter &&                                          
                                          <small style={{ color: "#dc3545" }}>
                                              {invalidMeter ? "Invalid customer id": ""}
                                          </small>
                                        }

                                    </div>
        

                                    <div className="form-group input-container mt-lg-4 mt-0">
                                        <label htmlFor="amount">Amount </label>
                                        <input
                                        value={values.amount}
                                        onChange={(e) => {
                                            handleChange(e)
                                            handleAmount(e.currentTarget.value);
                                        }}
                                        onBlur={handleBlur}
                                        id="amount"
                                        className="form-control input-style"
                                        placeholder="NGN 0.00"
                                        style={{border: '1px solid rgba(8, 152, 215, 0.2)'}}
                                        type="text"
                                        />

                                        <small style={{ color: "#dc3545" }}>
                                            {touched.amount && errors.amount}
                                        </small>
                                     
                                    </div>

                                  

                                <div className="text-center mt-4">
                                    <button
                                        type="submit"
                                        className="btn btn-withdraw"
                                        style={{ fontWeight: "normal" }}
                                        disabled={isSubmitting}
                                        >
                                        Buy Electricity
                                    </button>
                                </div>
        
                            </Form>
                            )}
                            </Formik>


                        </div>

                    </div>

                    <div className='col-lg-4'>

                        <div className="withdrawBalanceCard d-none d-lg-flex">
                            <div className='wallet_div'>
                                    <div>
                                        <img src={briefcase} alt="brief" className='img-fluid' />
                                    </div>
                                    <div>
                                    <p className='wallet_title'>Wallet Balance</p> 
                                    </div>                                
                                </div>  

                                <div className='wallet_div'>
                                
                                    <div>
                                    <h4 className='wallet_amount'>NGN {walletShow ? handleToFixed(walletBalance) : "XXXX.XX"}</h4> 
                                    </div>   

                                    <div>
                                        <img src={eye_fill} onClick={toggleWalletAmount} alt="brief" className='img-fluid eye' />
                                    </div>                             
                                </div> 
                            </div>

                            <div className='summary_card mt-4'>

                                <h6>Summary</h6>

                                <div className='summary_div mt-4'>
                                    <p className='summary_title'>You Pay</p>
                                    <p className='summary_value'>NGN {amt === 0 ? 0 : amt}</p>
                                </div>

                                <div className='summary_div mt-4'>
                                    <p className='summary_title'>Provider</p>
                                    <p className='summary_value'>{prov === null ? 'None' : prov}</p>
                                </div>


                            </div>
                    </div>


                </div>



                </div>
        </div>
        </>
    );
}

const mapStateToProps = (state) =>{
    return{
        accountDetails: state.auth.accountDetails,
        walletBalance: state.wallet.walletBalance,
        category: state.bill.categories,
        paysuccess: state.bill.paysuccess,
        meterdetails: state.bill.meterdetails,
        validMeter: state.bill.validMeter,
        invalidMeter: state.bill.invalidMeter,
        loader: state.bill.loader
    }
}

const mapDispatchToProps = (dispatch) =>{
    return{
        fetchWallet: () => dispatch(getWalletBalance()),
        fetchCategory: (val) => dispatch(getBillerCategories(val)),
        pay: (creds) => dispatch(PayBill(creds)),
        clearPay: () => dispatch(clearPayStatus()),
        clearDetails: () => dispatch(clearMeterDetails()),
        validateMeter: (itemCode, code, customerID) =>  dispatch(validateMeterDetails(itemCode, code, customerID))
    }
}
 
export default connect(mapStateToProps, mapDispatchToProps)(BuyElectricityPage);