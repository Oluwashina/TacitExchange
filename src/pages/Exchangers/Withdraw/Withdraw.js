import React,{useState, useEffect} from 'react';
import Sidebar from '../../../components/UserSideBar/Sidebar';
import './Withdraw.css'
import briefcase from '../../../assets/images/briefcase.svg'
import eye_fill from '../../../assets/images/ri-eye-fill.svg'
import {Form, Formik} from 'formik'
import {withdrawValidator} from '../../../validationSchema/validator'
import { connect } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import { clearWithdrawal, getWalletBalance, WithdrawFunds } from '../../../store/actions/wallet';

const UserWithdraw = ({accountDetails, walletBalance, withdraw, clearWithdrawSuccess, withdrawsuccess, fetchWallet}) => {
    

    useEffect(()=>{
        fetchWallet()
    },[fetchWallet])
    
    const [walletShow, setWalletShow] = useState(false)

    const history = useHistory()

    const [bankInfo, setBankInfo] = useState({});

    const toggleWalletAmount = () =>{
        setWalletShow(walletShow ? false : true );
     }
     
     const handleToFixed = (val) =>{
        return parseFloat(val).toFixed(2)
    }

    const handleType = (id) => {
        var val = accountDetails.find((pro) => pro.id === id);
        setBankInfo(val);
    };


     const handleSubmit = async (values, setSubmitting,)  =>{
        const creds = {
            ...values,
            accountNumber: bankInfo.accountNumber,
            accountName: bankInfo.accountName,
            bankName: bankInfo.bankName,
            bankCode: bankInfo.bankCode
        }
        await withdraw(creds)

     }


  useEffect(() => {
    if (withdrawsuccess) {
      setTimeout(() => {
        clearWithdrawSuccess();
        history.push('/dashboard')
      }, 3000);
    }
  }, [withdrawsuccess, clearWithdrawSuccess, history]);

    return ( 
        <>
         <Sidebar title="Withdraw" />
            <div className="usermain">
                <div className="contain" style={{width: '100%', paddingLeft: '20px', paddingRight: '20px'}}>

                    <div className='row mt-5 mb-5'>
                        <div className='col-lg-8'>

                            <div className='withdraw_card'>

                                {
                                    accountDetails && accountDetails.length > 0 ?
                                    (
                                        <Formik
                                        onSubmit={(values, {setSubmitting}) =>
                                            handleSubmit(values, setSubmitting)
                                            }
                                        validationSchema={withdrawValidator}
                                        initialValues={{amount: "", password: "", narration: "", accountType: ""}}
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
                                                <label htmlFor="accountType">Select account to withdraw into</label>
                                                <select
                                                value={values.accountType}
                                                onChange={(e) => {
                                                    handleChange(e)
                                                    handleType(e.currentTarget.value);
                                                }}
                                                onBlur={handleBlur}
                                                id="accountType"
                                                className="form-control select-style"
                                                placeholder="NGN 0.00"
                                                style={{border: '1px solid rgba(8, 152, 215, 0.2)'}}
                                                type="tel"
                                                >
                                                <option value="" disabled>
                                                        --Select--
                                                    </option>
                                                    {accountDetails.map((opt, index) => {
                                                    return (
                                                    <option key={index} value={opt.id}>
                                                        {opt.accountNumber}{" "}
                                                        -{" "}
                                                        {opt.bankName
                                                        }
                                                    </option>
                                                    );
                                                })}
                                                 </select>
                                                 <small style={{ color: "#dc3545" }}>
                                                {touched.accountType && errors.accountType}
                                                     </small>
                                            </div>
        
                                            <div className="form-group input-container">
                                                <label htmlFor="bank">Bank</label>
                                                <input
                                                 value={
                                                    bankInfo && bankInfo.bankName
                                                      ? bankInfo.bankName
                                                      : ""
                                                  }
                                                onChange={(e) => {
                                                    handleChange(e)
                                                }}
                                                onBlur={handleBlur}
                                                id="bank"
                                                className="form-control input-style"
                                                placeholder="Bank"
                                              
                                                type="text"
                                                disabled
                                                />
                                               
                                            </div>
        
                                            <div className="form-group input-container">
                                                <label htmlFor="email">Account Number</label>
                                                <input
                                                 value={
                                                    bankInfo && bankInfo.accountNumber
                                                      ? bankInfo.accountNumber
                                                      : ""
                                                  }
                                                onChange={(e) => {
                                                    handleChange(e)
                                                }}
                                                onBlur={handleBlur}
                                                id="accountNumber"
                                                className="form-control input-style"
                                                placeholder="Account Number"
                                                type="text"
                                                disabled
                                                />
                                               
                                            </div>
                                            <div className="form-group input-container">
                                                <label htmlFor="email">Withdrawal Amount</label>
                                                <input
                                                value={values.amount}
                                                onChange={(e) => {
                                                    handleChange(e)
                                                }}
                                                onBlur={handleBlur}
                                                id="amount"
                                                className="form-control input-style"
                                                placeholder="NGN 0.00"
                                                style={{border: '1px solid rgba(8, 152, 215, 0.2)'}}
                                                type="tel"
                                                />
                                                <small style={{ color: "#dc3545" }}>
                                                {touched.amount && errors.amount}
                                            </small>
                                            </div>
        
                                            <div className="form-group input-container mt-lg-4 mt-0">
                                                <label htmlFor="email">Narration</label>
                                                <textarea
                                                rows="4"
                                                value={values.narration}
                                                onChange={(e) => {
                                                    handleChange(e)
                                                }}
                                                onBlur={handleBlur}
                                                id="narration"
                                                className="form-control input-style"
                                                placeholder="Narration"
                                                style={{border: '1px solid rgba(8, 152, 215, 0.2)', resize: 'none'}}
                                                type="text"
                                                />
                                                <small style={{ color: "#dc3545" }}>
                                                {touched.narration && errors.narration}
                                            </small>
                                            </div>
        
                                            <div className="form-group input-container mt-lg-4 mt-0">
                                                <label htmlFor="password">Confirm your Password</label>
                                                <input
                                                value={values.pin}
                                                onChange={(e) => {
                                                    handleChange(e)
                                                }}
                                                onBlur={handleBlur}
                                                id="password"
                                                className="form-control input-style"
                                                placeholder="Enter your password"
                                                style={{border: '1px solid rgba(8, 152, 215, 0.2)'}}
                                                type="password"
                                                />
                                                <small style={{ color: "#dc3545" }}>
                                                {touched.password && errors.password}
                                            </small>
                                            </div>
        
                                            <div className="text-center mt-4">
                                            <button
                                                type="submit"
                                                className="btn btn-withdraw"
                                                style={{ fontWeight: "normal" }}
                                                disabled={isSubmitting}
                                                >
                                             Withdraw
                                            </button>
                                        </div>
        
                                        </Form>
                                        )}
                                        </Formik>
                                    )
                                    :
                                    (
                                        <div className='no_withdraw_div'>
                                        <div className='no_withdraw_title'>
                                            <h4>No account added yet</h4>
                                        </div>
                                        <div className='no_withdraw_subtitle'>
                                            <p>Kindly add an account to allow withdrawal of funds</p>
                                        </div>
                                        <div className='mt-2 text-center'>
                                            <Link
                                            to="/account"
                                            className="btn btn-addaccount"
                                            style={{ fontWeight: "normal" }}
                                            >
                                            Add Account
                                        </Link>
                                        </div>

                                    </div>
                                    )
                                }
                            </div>


                        </div>

                        <div className='col-lg-4 d-none d-lg-block'>

                             <div className="withdrawBalanceCard">
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
        withdrawsuccess: state.wallet.withdrawsuccess
    }
}

const mapDispatchToProps = (dispatch) =>{
    return{
     withdraw: (val) => dispatch(WithdrawFunds(val)),   
     clearWithdrawSuccess: () => dispatch(clearWithdrawal()), 
     fetchWallet: () => dispatch(getWalletBalance()),
    }
}
 
export default connect(mapStateToProps, mapDispatchToProps)(UserWithdraw);