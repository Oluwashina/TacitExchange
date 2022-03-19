import React,{useState} from 'react';
import Sidebar from '../../../components/UserSideBar/Sidebar';
import './bills.css'
import briefcase from '../../../assets/images/briefcase.svg'
import eye_fill from '../../../assets/images/ri-eye-fill.svg'
import { connect } from 'react-redux';
import {Form, Formik} from 'formik'
import {cableValidator} from '../../../validationSchema/validator'


const CablesPage = ({walletBalance}) => {
    
    const [walletShow, setWalletShow] = useState(false)

    const [prov, setProv] = useState(null)


    const handleProv = (val) =>{
        setProv(val)

         // find the amount of the subscription from resp and set it for display from the get all cables endpoint resp
        // let amount = cablesSub.find(resp => resp.biller_name === val).amount 
        // let fee = cablesSub.find(resp => resp.biller_name === val).fee 
    }

    const toggleWalletAmount = () =>{
        setWalletShow(walletShow ? false : true );
     }
     
     const handleToFixed = (val) =>{
        return parseFloat(val).toFixed(2)
    }

    const handleSubmit = async (values, setSubmitting,)  =>{
        console.log(values)
     }

    return ( 
        <>
        <Sidebar title="TV Subscription" />
            <div className="usermain">
                <div className="contain" style={{width: '100%', paddingLeft: '20px', paddingRight: '20px'}}>

                <div className='row mt-5 mb-5'>
                     <div className='col-lg-8'>

                        <div className='bills_card'>

                        <Formik
                            onSubmit={(values, {setSubmitting}) =>
                                handleSubmit(values, setSubmitting)
                                }
                            validationSchema={cableValidator}
                            initialValues={{provider: "", decoderNumber: "",}}
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
                                        <label htmlFor="provider">Select Plan</label>
                                        <select
                                        value={values.provider}
                                        onChange={(e) => {
                                            handleChange(e)
                                            handleProv(e.currentTarget.value);
                                        }}
                                        onBlur={handleBlur}
                                        id="provider"
                                        className="form-control select-style"
                                        placeholder="NGN 0.00"
                                        style={{border: '1px solid rgba(8, 152, 215, 0.2)'}}
                                        type="tel"
                                        >
                                        <option value="" disabled>
                                            Select a Plan
                                            </option>

                                            <option value="DSTV ACCESS">
                                            DSTV ACCESS
                                            </option>
                                            <option value="DSTV COMPASS">
                                           DSTV COMPASS
                                            </option> 
                                            <option value="STARTIMES">
                                            STARTIMES
                                            </option> 
                                            <option value="GOTV">
                                            GOTV
                                            </option>      
                                            </select>
                                            <small style={{ color: "#dc3545" }}>
                                        {touched.provider && errors.provider}
                                                </small>
                                    </div>



                                    <div className="form-group input-container">
                                        <label htmlFor="decoderNumber">Decoder Number</label>
                                         <input
                                            value={values.decoderNumber}
                                            onChange={(e) => {
                                                handleChange(e)
                                            }}
                                            onBlur={handleBlur}
                                            id="decoderNumber"
                                            className="form-control input-style"
                                            placeholder="Enter your decoder number"
                                            style={{border: '1px solid rgba(8, 152, 215, 0.2)'}}
                                            type="tel"
                                            />
                                        <small style={{ color: "#dc3545" }}>
                                        {touched.decoderNumber && errors.decoderNumber}
                                    </small>
                                    </div>
        

                                    <div className="form-group input-container mt-lg-4 mt-0">
                                        <label htmlFor="amount">Amount</label>
                                        <input
                                        value="2000"
                                        onChange={(e) => {
                                            handleChange(e)
                                        }}
                                        onBlur={handleBlur}
                                        id="amount"
                                        className="form-control input-style"
                                        placeholder="NGN 0.00"
                                        style={{border: '1px solid rgba(8, 152, 215, 0.2)'}}
                                        type="text"
                                        disabled
                                        />
                                        
                                     
                                    </div>

                                  

                                    <div className="text-center mt-4">
                                    <button
                                        type="submit"
                                        className="btn btn-withdraw"
                                        style={{ fontWeight: "normal" }}
                                        disabled={isSubmitting}
                                        >
                                        Buy Subscription
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
                                    <p className='summary_value'>NGN 2100</p>
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
        walletBalance: state.auth.walletBalance
    }
}

const mapDispatchToProps = (dispatch) =>{
    return{
    }
}
 
export default connect(mapStateToProps, mapDispatchToProps)(CablesPage);