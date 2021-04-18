import React from 'react';
import {Form, Formik} from 'formik'
import {connect } from 'react-redux'
import { forgotPasswordValidator } from "../../../validationSchema/validator";
import Logo from '../../../assets/images/logo.png'
import Hero from '../../../assets/images/adminlogin.png'
import {Link} from 'react-router-dom'

const AdminForgotPassword = () => {

    const handleSubmit = async (values) =>{
        console.log(values)
      }

    return ( 
        <>
            <div className="row no-gutters">
        <div className="col-lg-6">
          <div className="container">
            <div className="login-div">
              <img src={Logo} className="img-fluid" alt="logo" />

              <div style={{marginTop: '100px'}}>
                <h4 style={{ color: "#0898D7", fontWeight: 600 }}>Forgot Password?</h4>
                <p className="mt-2" style={{fontStyle: "italic", fontWeight: 600}}>Please type in your e-mail Address</p>
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
                                <i className="mdi mdi-email icon"></i>
                                <input
                                    className="form-control admininput"
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
                         
                         
                            <button 
                            type="submit"
                            disabled={isSubmitting}
                            className="btn btn-blueTacit">Submit</button>
                      </Form>
                  )}

              </Formik>

              <div className="mt-5">
                <p style={{fontWeight: 500}}>Already have an account? <Link to="/admin" style={{textDecoration: 'none', color:'#0898D7'}}>Sign In</Link></p>
              </div>
             
            </div>
          </div>
        </div>
        <div className="col-lg-6 d-none d-md-block">
          <div style={{ position: "relative" }}>
            <img src={Hero} className="img-fluid" alt="login" />

            <div className="whiteLogo">
              <img src={Logo} className="img-fluid" alt="logo" />
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

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AdminForgotPassword);