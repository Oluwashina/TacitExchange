import React from 'react'
import Logo from "../../assets/images/logo.png";
import WelcomeImg from "../../assets/images/adminlogin.png";
import { Form, Formik } from "formik";
import { forgotPasswordValidator } from "../../validationSchema/validator";
import {HashLink as Link,} from 'react-router-hash-link'
import { forgotPassword } from '../../store/actions/auth';
import { connect } from 'react-redux';

const MobileForgotPage = ({forgot}) => {


    // login func
    const handleSubmit = async (values) =>{
       await forgot(values)
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
                <h2>Don't worry</h2>
                <h6 style={{fontWeight: 'bold'}}> Try resetting your password to receive a
              recovery link.</h6>

              </div>

              {/* form submission */}
              <Formik
                onSubmit={(values, {setSubmitting}) =>
                    handleSubmit(values, setSubmitting)
                    }
                validationSchema={forgotPasswordValidator}
                initialValues={{email: ""}}
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
                          {/* email */}
                             <div className="form-group input-container mt-4">
                                <input
                                    className="form-control input-style"
                                    type="text"
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
                        
                
                            <div className="">
                                <button 
                                type="submit"
                                disabled={isSubmitting}
                                style={{width: '100%'}}
                                className="btn btn-blueTacit">Submit</button>
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


const mapDispatchToProps =(dispatch) =>{
    return{
        forgot: (val) => dispatch(forgotPassword(val)),
    }
}
 
export default connect(null, mapDispatchToProps)(MobileForgotPage);