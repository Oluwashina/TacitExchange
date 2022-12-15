import React,{useEffect} from 'react'
import Logo from "../../assets/images/logo.png";
import WelcomeImg from "../../assets/images/adminlogin.png";
import { Form, Formik } from "formik";
import { loginValidator } from "../../validationSchema/validator";
import {HashLink as Link,} from 'react-router-hash-link'
import { loginUser } from '../../store/actions/auth';
import { connect } from 'react-redux';
import { useHistory} from 'react-router-dom'


const MobileLoginPage = ({login, isAuthenticated}) => {

    const history = useHistory()



     // login func
     const handleSubmit = async (values) =>{
        await login(values);
      }

      useEffect(() =>{
        if(isAuthenticated){
          history.push("/dashboard")
        }
      },[isAuthenticated, history])



    return ( 
        <>
 <div className="">
      <div className="row no-gutters">
        <div className="col-lg-5">

          <div className="container">
            <div className="login-div">
              <img src={Logo} className="img-fluid" alt="logo" />

              <div className="mt-5">
                <h2>Sign In</h2>
                <h6 style={{fontWeight: 'bold'}}>With your TacitExchange Credentials</h6>

              </div>

              {/* form submission */}
              <Formik
                onSubmit={(values, {setSubmitting}) =>
                    handleSubmit(values, setSubmitting)
                    }
                validationSchema={loginValidator}
                initialValues={{email: "", password: ""}}
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
                        
                            {/* password */}
                            <div className="form-group input-container mt-3">
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
                          
                            <Link to="/forgot" style={{textDecoration: 'none', color: '#2C3A50'}}>
                              <p style={{fontWeight: 600,fontStyle: 'italic', fontSize: 14}}>Forgot Password?</p>
                            </Link>

                            <div className="">
                                <button 
                                type="submit"
                                disabled={isSubmitting}
                                style={{width: '100%'}}
                                className="btn btn-blueTacit">Login</button>
                            </div>
                            
                      </Form>
                  )}

              </Formik>

              <div className="text-center mt-3">
                <p style={{color:'#2C3A50', fontSize: 14}} className="mb-0">Don't have an account yet? <Link to="/register" style={{textDecoration: 'none', color:'#0898D7'}}>Register</Link></p>
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
        login: (creds) => dispatch(loginUser(creds))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MobileLoginPage);