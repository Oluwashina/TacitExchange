import React, {useState} from 'react';
import './Home.css';
import registerCircle from '../../assets/images/registerCircle.svg'
import closeIcon from '../../assets/images/closeIcon.svg'
import {Form, Formik} from 'formik'
import { registerValidator } from "../../validationSchema/validator";
import Modal from 'react-bootstrap/Modal'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import { signUp } from '../../store/actions/auth';

const HeroSection = (props) => {

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
                    <img alt="register" src={registerCircle} width="350" height="140" />
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


            <div className="hero">
                <div className="container">
                    <div className="hero-title">
                        <h1>Sell All Your Gift Cards At Amazing Rates.</h1>    
                    
                        <div className="mt-3">
                            <button 
                            onClick={handleShowRegister}
                            className="btn btn-pinkTacit">Register</button>
                        </div>  
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
 
export default connect(mapStateToProps, mapDispatchToProps)(HeroSection);