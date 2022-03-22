import React,{useState, useEffect} from 'react';
import Sidebar from '../../../components/UserSideBar/Sidebar';
import './bills.css'
import briefcase from '../../../assets/images/briefcase.svg'
import eye_fill from '../../../assets/images/ri-eye-fill.svg'
import { connect } from 'react-redux';
import {Form, Formik} from 'formik'
import {airtimeValidator} from '../../../validationSchema/validator'
import Nigeria from  '../../../assets/images/nigerialogo.svg'
import { getWalletBalance } from '../../../store/actions/wallet';


const AirtimePage = ({walletBalance, fetchWallet}) => {

    const [walletShow, setWalletShow] = useState(false)

    useEffect(()=>{
        fetchWallet()
    },[fetchWallet])

    const [prov, setProv] = useState(null)

    const [amt, setAmt] = useState("")

    const handleProv = (val) =>{
        setProv(val)
    }

    const handleAmount = (val) =>{
        setAmt(val)
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
        <Sidebar title="Buy Airtime" />
            <div className="usermain">
                <div className="contain" style={{width: '100%', paddingLeft: '20px', paddingRight: '20px'}}>

                <div className='row mt-5 mb-5'>
                     <div className='col-lg-8'>

                        <div className='bills_card'>

                        <Formik
                            onSubmit={(values, {setSubmitting}) =>
                                handleSubmit(values, setSubmitting)
                                }
                            validationSchema={airtimeValidator}
                            initialValues={{amount: "", provider: "", phoneNumber: ""}}
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
                                            Select a Provider
                                            </option>

                                            <option value="MTN">
                                               MTN
                                            </option>
                                            <option value="AIRTEL">
                                               AIRTEL
                                            </option>
                                            <option value="GLO">
                                               GLO
                                            </option>
                                            <option value="9MOBILE">
                                               9MOBILE
                                            </option>       
                                            </select>
                                            <small style={{ color: "#dc3545" }}>
                                        {touched.provider && errors.provider}
                                                </small>
                                    </div>

                                    <div className="form-group input-container">
                                        <label htmlFor="phoneNumber">Phone Number</label>
                                        <div className="phone_style">
                                                <div className="amount-div">
                                                    <div>
                                                        <img src={Nigeria} style={{width: '25px', height:"25px"}} alt="nigeria" />
                                                    </div>
                                                    <div className="ml-2">
                                                        <p className="mb-0" style={{color: '#2C3A50', fontWeight: 'bold'}}>+234</p>
                                                    </div>
                                                </div>
                                        </div>
                                         <input
                                            value={values.phoneNumber}
                                            onChange={(e) => {
                                                handleChange(e)
                                            }}
                                            onBlur={handleBlur}
                                            id="phoneNumber"
                                            className="form-control phone_input_style"
                                            placeholder="80 0000 0000"
                                            style={{border: '1px solid rgba(8, 152, 215, 0.2)'}}
                                            type="tel"
                                            />
                                        <small style={{ color: "#dc3545" }}>
                                        {touched.phoneNumber && errors.phoneNumber}
                                    </small>
                                    </div>
        
                                    <div className="form-group input-container mt-lg-4 mt-0">
                                        <label htmlFor="amount">Amount</label>
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
                                        Buy Airtime
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
                                    <p className='summary_value'>NGN {amt === "" ? '0' : amt}</p>
                                </div>

                                <div className='summary_div mt-4'>
                                    <p className='summary_title'>Provider</p>
                                    <p className='summary_value'>{prov === null ? 'None' : prov}</p>
                                </div>

                                <div className='summary_div mt-4'>
                                    <p className='summary_title'>You Get</p>
                                    <p className='summary_value'>NGN {amt === "" ? '0' : amt}</p>
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
        walletBalance: state.wallet.walletBalance
    }
}

const mapDispatchToProps = (dispatch) =>{
    return{
        fetchWallet: () => dispatch(getWalletBalance()),
    }
}
 
export default connect(mapStateToProps, mapDispatchToProps)(AirtimePage);