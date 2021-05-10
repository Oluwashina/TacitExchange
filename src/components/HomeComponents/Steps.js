import React, {useState} from 'react';
import registerCircle from '../../assets/images/registerCircle.svg'
import closeIcon from '../../assets/images/closeIcon.svg'
import {Form, Formik} from 'formik'
import { registerValidator } from "../../validationSchema/validator";
import Modal from 'react-bootstrap/Modal'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import { signUp } from '../../store/actions/auth';


const Steps = (props) => {

    const {register} = props

    const [showRegister, setShowRegister] = useState(false);

    const [role] = useState("Exchanger")

    //   register modal
  const handleCloseRegister = () => setShowRegister(false);
  const handleShowRegister = () => {
    // setShow(false)
    setShowRegister(true);
  }

   //   register func
   const handleRegisterSubmit = async (values) =>{
    console.log(values)
    const creds = {
        ...values,
        role
    }
    await register(creds)
    setShowRegister(false)
}

    return ( 
        <>
        {/* modal dialog for register page */}
      <Modal show={showRegister}
        className="registerDialog"
       onHide={handleCloseRegister}>

           <Modal.Header >
             <div onClick={handleCloseRegister} style={{position: 'absolute', right: '35px', top: '20px', cursor: 'pointer'}}>
                <img src={closeIcon} alt="close" width="40" height="40" />
            </div>
             </Modal.Header>
             
            {/* login container */}
            <div className="d-none d-md-block registerImage">
                    <img alt="login" src={registerCircle} width="350" height="140" />
             </div>
            

            <div className="text-center contain-head mt-3 mt-lg-5" style={{position: 'relative'}}>
                <h3 className="login-text">Register</h3>
            </div>

            {/* login section */}
            <div className="container modal-contain">
                <div className="text-center">
                    <h6 style={{fontWeight: 'bold'}}>It's easy and straight forward</h6>
                </div>
                <div>
                    <hr style={{borderTop: '1px solid #CDCDCD'}} />
                </div>

                {/* form login submission */}
                 {/* form submission */}
              <Formik
                onSubmit={(values, {setSubmitting}) =>
                    handleRegisterSubmit(values, setSubmitting)
                    }
                validationSchema={registerValidator}
                initialValues={{firstName: "", lastName: "", phoneNumber: "",  email: "", password: "", confirm_password: ""}}
              >
                  {({
                      handleChange,
                      isSubmitting,
                      handleSubmit,
                      handleBlur,
                      values,
                      touched,
                      errors
                  })=>(
                      <Form onSubmit={handleSubmit}>

                          {/* Firstname */}
                             <div className="form-group input-container mt-4">
                                <input
                                    className="form-control input-style"
                                    type="text"
                                    placeholder="Firstname"
                                    onBlur={handleBlur}
                                    onChange={handleChange}
                                    id="firstName"
                                    value={values.firstName}
                                />
                                   <small style={{ color: "#dc3545" }}>
                                        {touched.firstName && errors.firstName}
                                    </small>
                            </div>

                            {/* Last name */}
                            <div className="form-group input-container mt-2">
                                <input
                                    className="form-control input-style"
                                    type="text"
                                    placeholder="Lastname"
                                    onBlur={handleBlur}
                                    onChange={handleChange}
                                    id="lastName"
                                    value={values.lastName}
                                />
                                   <small style={{ color: "#dc3545" }}>
                                        {touched.lastName && errors.lastName}
                                    </small>
                            </div>

                            {/* email */}
                            <div className="form-group input-container mt-2">
                                <input
                                    className="form-control input-style"
                                    type="email"
                                    placeholder="Email Address"
                                    onBlur={handleBlur}
                                    onChange={handleChange}
                                    id="email"
                                    value={values.email}
                                />
                                   <small style={{ color: "#dc3545" }}>
                                        {touched.email && errors.email}
                                    </small>
                            </div>

                            {/* Phone Number */}
                            <div className="form-group input-container mt-2">
                                <input
                                    className="form-control input-style"
                                    type="text"
                                    placeholder="Phone Number"
                                    onBlur={handleBlur}
                                    onChange={handleChange}
                                    id="phoneNumber"
                                    value={values.phoneNumber}
                                />
                                   <small style={{ color: "#dc3545" }}>
                                        {touched.phoneNumber && errors.phoneNumber}
                                    </small>
                            </div>
                        
                    
                            {/* password */}
                            <div className="form-group input-container mt-2">
                            <input
                                className="form-control input-style"
                                type="password"
                                placeholder="Password"
                                    id="password"
                                value={values.password}
                                onChange={handleChange}
                                onBlur={handleBlur}
                            />
                              <small style={{ color: "#dc3545" }}>
                              {touched.password && errors.password}
                           </small>
                            </div>

                             {/* password */}
                             <div className="form-group input-container mt-2">
                            <input
                                className="form-control input-style"
                                type="password"
                                placeholder="Confirm Password"
                                    id="confirm_password"
                                value={values.confirm_password}
                                onChange={handleChange}
                                onBlur={handleBlur}
                            />
                              <small style={{ color: "#dc3545" }}>
                              {touched.confirm_password && errors.confirm_password}
                           </small>
                            </div>
                
                

                            <div className="text-center">
                            <button 
                            type="submit"
                            disabled={isSubmitting}
                            className="btn btn-pinkTacit mt-1">Register</button>
                            </div>
                            
                      </Form>
                  )}

              </Formik>

              <div className="text-center mt-4">
                <p style={{color:'#2C3A50', fontSize: 14}} className="mb-0">By clicking the REGISTER button below, you agree to TacitExchange <Link to="/terms" style={{textDecoration: 'none', color:'#0898D7'}}>Terms of use.</Link></p>
            </div>
             
            </div>
        
      </Modal>
      {/* end of dialof for register */}

            <div className="steps">
   
                <div className="text-center">
                    <h3 className="steps-head">Follow This Steps To Exchange 
                        <br/> Your Gift Cards</h3>
                </div>

                <div className="row mt-5">
                    <div className="col-lg-6">
                        <div style={{display: 'flex'}}>
                            <div>
                                <h2 style={{color: '#0898D7', fontWeight: 'bold'}}>01</h2>
                            </div>
                            <div className="ml-4">
                                <h5 className="rate-text mt-1">Register An Account</h5>
                                <p className="steps-p">To start a trade on our platform, you need to sign up with you name, email address, phone number and a password to protect your account. You will receive a verification mail in your email address to confirm your registration. You can then login directly into your dashboard where you can initiate a trade.</p>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-6">
                        <div style={{display: 'flex'}}>
                            <div>
                                <h2 style={{color: '#0898D7', fontWeight: 'bold'}}>02</h2>
                            </div>
                            <div className="ml-4">
                                <h5 className="rate-text mt-1">Add Bank Account</h5>
                                <p className="steps-p">On your dashboard click on "account details" and "add account". You cannot initiate any trade if bank datails is not added. Kindly ensure correct bank details is added, this is where all your completed trades will be swiftly paid into.</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row mt-lg-5 mt-0">
                    <div className="col-lg-6">
                        <div style={{display: 'flex'}}>
                            <div>
                                <h2 style={{color: '#0898D7', fontWeight: 'bold'}}>03</h2>
                            </div>
                            <div className="ml-4">
                                <h5 className="rate-text mt-1">Initiate A Trade</h5>
                                <p className="steps-p">
                                Click on the "trade cards" button on your dashboard to start a trade.
                                Select the brand of card you want to sell in "Category". The "Subcategory" option is for you to be more specific with your type of card. Enter the total amount of the gift card you want to trade.
                                Once submitted, verification takes a few minutes or more depending on the type of card you are trading.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-6">
                        <div style={{display: 'flex'}}>
                            <div>
                                <h2 style={{color: '#0898D7', fontWeight: 'bold'}}>04</h2>
                            </div>
                            <div className="ml-4">
                                <h5 className="rate-text mt-1">Receive Your Cash</h5>
                                <p className="steps-p">
                                On clicking the "Submit Trade" button, the terms of trade will be displayed before you proceed. It is EXTREMELY important that you read this to be sure of what you are trading as the trade will be rejected if it doesn't go inline with the terms.
                                 Once approved, we'll process your payment and send you cash!
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="text-center mt-4">
                     <button
                     onClick={handleShowRegister}
                      className="btn btn-pinkTacit ">Register Now</button>
                     <div className="mt-2">
                         <p style={{color: '#2C3A50', fontSize: 14, fontWeight: 'bold'}}>To Start Earning</p>
                     </div>
                </div>

            </div>
        </>
     );
}



const mapStateToProps = (state) =>{
    return{

    }
}

const mapDispatchToProps = (dispatch) =>{
    return{
        register: (creds) => dispatch(signUp(creds)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Steps);
