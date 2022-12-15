import React from 'react'
import Logo from "../../assets/images/logo.png";
import WelcomeImg from "../../assets/images/adminlogin.png";
import { Form, Formik } from "formik";
import { registerValidator } from "../../validationSchema/validator";
import {HashLink as Link,} from 'react-router-hash-link'
import { signUp } from '../../store/actions/auth';
import { connect } from 'react-redux';


const MobileRegisterPage = ({register}) => {


    // login func
    const handleSubmit = async (values) =>{
        const creds = {
            ...values,
        }
        await register(creds)
      }

    return ( 
        <>
      <div className="">
      <div className="row no-gutters">
        <div className="col-lg-5">

          <div className="container">
            <div className="login-div">
              <img src={Logo} className="img-fluid" alt="logo" />

              <div className="mt-5">
                <h2>Register</h2>
                <h6 style={{fontWeight: 'bold'}}> It's easy and straight forward</h6>

              </div>

              {/* form submission */}
              <Formik
                onSubmit={(values, {setSubmitting}) =>
                handleSubmit(values, setSubmitting)
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

                            <div className="text-center mt-4">
                                <p style={{color:'#2C3A50', fontSize: 14}} className="mb-0">By clicking the REGISTER button below, you agree to TacitExchange <Link to="/terms" style={{textDecoration: 'none', color:'#0898D7'}}>Terms of use.</Link></p>
                            </div>

                            <div className="text-center mt-2">
                            <button 
                            type="submit"
                            style={{width: '100%'}}
                            disabled={isSubmitting}
                            className="btn btn-pinkTacit mt-1">Register</button>
                            </div>
                            
                      </Form>
                  )}

              </Formik>

             

            <div className="text-center mt-3">
              <p style={{color:'#2C3A50', fontSize: 14}} className="mb-0">Already have an account? <Link to="/login"  style={{textDecoration: 'none', color:'#0898D7'}}>Login</Link></p>
            </div>
             
            </div>
          </div>
        </div>
        <div className="col-lg-7 d-none d-lg-block">
          <img src={WelcomeImg} alt="oyap" className="img-fluid" style={{width: '100%'}} />
        </div>
      </div>
    </div>  
        </>
     );
}
 

const mapStateToProps = (state) =>{
    return{
        isAuthenticated: state.auth.isAuthenticated,
    }
}

const mapDispatchToProps =(dispatch) =>{
    return{
        register: (val) => dispatch(signUp(val)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MobileRegisterPage);