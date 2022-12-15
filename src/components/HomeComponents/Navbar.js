import React, {useState, useEffect} from 'react';
import Logo from '../../assets/images/logo.png'
import {useLocation, useHistory} from 'react-router-dom'
import {HashLink as Link,} from 'react-router-hash-link'
import {Modal} from 'react-bootstrap/'
import loginCircle from '../../assets/images/loginCircle.svg'
import registerCircle from '../../assets/images/registerCircle.svg'
import closeIcon from '../../assets/images/closeIcon.svg'
import forgotCircle from '../../assets/images/forgotCircle.svg'
import {Form, Formik} from 'formik'
import { loginValidator, registerValidator, forgotPasswordValidator } from "../../validationSchema/validator";
import {connect} from 'react-redux'
import { forgotPassword, loginUser, signUp } from '../../store/actions/auth';

const Navbar = (props) => {

    const {login, register, forgot, isAuthenticated} = props

    const [navShow, setnavShow] = useState(false);

    const history = useHistory()
    


    // check for which path you are on
    const isActive = useLocation().pathname

    // login modal state
    const [showModal, setShow] = useState(false);

    const [showRegister, setShowRegister] = useState(false);

    const [showForgot, setShowForgot] = useState(false);

    // login modal
  const handleClose = () => setShow(false);
  const handleShow = () => {
      setShowForgot(false)
      setShow(true);
  }


//   register modal
  const handleCloseRegister = () => setShowRegister(false);
  const handleShowRegister = () => {
    setShow(false)
    setShowRegister(true);
  }

// forgot password modal
  const handleCloseForgot = () => setShowForgot(false);
  const handleShowForgot = () => {
    setShow(false)
    setShowForgot(true);
  }

    const handleToggle = () =>{
        setnavShow(navShow ? false : true);
        switch(navShow){
            case false:
                document.body.classList.add('body-hidden');
            break;
            case true:
                document.body.classList.remove('body-hidden');
                break;
            default:
                break;
        }
    }

    // login func
    const handleSubmit = async (values) =>{
        await login(values);
      }

    useEffect(() =>{
        if(isAuthenticated){
          history.push('/dashboard')
        }
      },[isAuthenticated, history])

    //   register func
    const handleRegisterSubmit = async (values) =>{
        const creds = {
            ...values,
        }
        await register(creds)
        setShowRegister(false)
    }

    // forgot password submit
    const handleForgotSubmit = async (values) =>{
        await forgot(values)
    }

    return ( 
        <>

        {/* modal display for login */}
        <Modal show={showModal}
         onHide={handleClose}>
            {/* login container */}

            <Modal.Header >
             <div onClick={handleClose} style={{position: 'absolute', right: '35px', top: '20px', cursor: 'pointer'}}>
                <img src={closeIcon} alt="close" width="40" height="40" />
            </div>
             </Modal.Header>

            <div className="d-none d-md-block" style={{position: 'absolute', left: '70px', top: '0px'}} >
                <img alt="loginicon " src={loginCircle} width="350" height="140" />
             </div>

            <div className="text-center contain-head mt-3 mt-lg-5" style={{position: 'relative'}}>
                <h3 className="login-text">Login</h3>
            </div>

            {/* login section */}
            <div className="container modal-contain">
                <div className="text-center">
                    <h6 style={{fontWeight: 'bold'}}>Welcome Back</h6>
                </div>
                <div>
                    <hr style={{borderTop: '1px solid #CDCDCD'}} />
                </div>

                {/* form login submission */}
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
                          
                            <Link to="/" onClick={handleShowForgot} style={{textDecoration: 'none', color: '#2C3A50'}}>
                              <p style={{fontWeight: 600,fontStyle: 'italic', fontSize: 14}}>Forgot Password?</p>
                            </Link>

                            <div className="text-center">
                            <button 
                            type="submit"
                            disabled={isSubmitting}
                            className="btn btn-blueTacit">Login</button>
                            </div>
                            
                      </Form>
                  )}

              </Formik>

              <div className="text-center mt-4">
                <p style={{color:'#2C3A50', fontSize: 14}} className="mb-0">Don't have an account yet? <Link to="/" onClick={handleShowRegister} style={{textDecoration: 'none', color:'#0898D7'}}>Register</Link></p>
            </div>
             
            </div>
        
      </Modal>
      {/* end of modal for login dialog */}


      {/* modal dialog for register page */}
      <Modal show={showRegister}
        className="registerDialog"
       onHide={handleCloseRegister}>
           
           <Modal.Header >
             <div onClick={handleCloseRegister} style={{position: 'absolute', right: '35px', top: '20px', cursor: 'pointer'}}>
                <img src={closeIcon} alt="close" width="40" height="40" />
            </div>
             </Modal.Header>

            {/* Register container */}
            <div className="d-none d-md-block registerImage">
                    <img alt="registerIcon" src={registerCircle} width="350" height="140" />
             </div>

            <div className="text-center contain-head mt-3 mt-lg-5" style={{position: 'relative'}}>
                <h3 className="login-text">Register</h3>
            </div>

            {/*    Register section */}
            <div className="container modal-contain">
                <div className="text-center">
                    <h6 style={{fontWeight: 'bold'}}>It's easy and straight forward</h6>
                </div>
                <div>
                    <hr style={{borderTop: '1px solid #CDCDCD'}} />
                </div>

                {/* form register submission */}
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

      {/* modal display for forgot password */}
      <Modal show={showForgot}
         onHide={handleCloseForgot}>
            {/* forgot container */}
            <div className="d-none d-md-block" style={{position: 'absolute', left: '70px', top: '0px'}}>
                    <img alt="login" src={forgotCircle} width="350" height="140" />
             </div>

             {/* close icon */}
             <div onClick={handleCloseForgot} style={{position: 'absolute', right: '35px', top: '20px', cursor: 'pointer'}}>
                <img src={closeIcon} alt="close" width="30" height="30" />
            </div>

            <div className="text-center contain-head mt-3 mt-lg-4" style={{position: 'relative'}}>
                <h3 className="login-text">Forgot <br />Password</h3>
            </div>

            {/* forgot section */}
            <div className="container modal-contain">
                <div className="text-center">
                    <h6 style={{fontWeight: 'bold'}}>Don't worry?</h6>
                </div>
                <div>
                    <hr style={{borderTop: '1px solid #CDCDCD'}} />
                </div>

                {/* form submission */}
                 {/* form submission */}
              <Formik
                onSubmit={(values, {setSubmitting}) =>
                    handleForgotSubmit(values, setSubmitting)
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
                    

                            <div className="text-center">
                            <button 
                            type="submit"
                            disabled={isSubmitting}
                            className="btn btn-blueTacit">Submit</button>
                            </div>
                            
                      </Form>
                  )}

              </Formik>

              <div className="text-center mt-4">
                <p style={{color:'#2C3A50', fontSize: 14}} className="mb-0">Already have an account? <Link to="/" onClick={handleShow} style={{textDecoration: 'none', color:'#0898D7'}}>Login</Link></p>
            </div>
             
            </div>
        
      </Modal>
      {/* end of modal for forgot password dialog */}


        <header>
            <div className="container">
                <div className="header">
                    <div className="logo">
                        <img src={Logo} alt="logo" width="100" />
                    </div>
                    <nav className={ navShow ? "open" : "" }>
                        <ul className="mainNav">
                            <li className="navLink">
                                <Link to="/"
                                className={isActive === "/" ? 'active' : ''}
                                >Home</Link>
                            </li>
                            <li className="navLink">
                                <Link
                                 className={isActive === "/faq" ? 'active' : ''}
                                 to="/faq">Support & FAQ</Link>
                            </li>
                            <li className="navLink">
                                <Link 
                                 className={isActive === "/contact" ? 'active' : ''}
                                to="/contact">Contact Us</Link>
                            </li>
                            <li className="navLink">
                                <a className="" href="https://blog.tacitexchange.com" target="_blank" rel="noreferrer" >Blog</a>
                            </li>
                            <li className="navLink">
                                <Link to="/#rate-calculator">Rate Calculator</Link>
                            </li>
                            <li className="headerbtn">
                                <Link to="/" className="btn btn-blueTacit"  onClick={handleShow}>Login</Link>
                            </li>
                            <li className="headerbtn">
                                <Link to="/" className="btn btn-pinkTacit" onClick={handleShowRegister}>Register</Link>
                            </li>
                        </ul>
                    </nav>

                    {/* navicon - hamburger */}
                    <div className="navicon" onClick={handleToggle}>
                        <div className={ navShow ? "nav-toggle active" : "nav-toggle" }>
                            <span>
                            </span>
                        </div>
                    </div>

                </div>
            </div>
        </header>
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
        login: (creds) => dispatch(loginUser(creds)),
        register: (creds) => dispatch(signUp(creds)),
        forgot: (val) => dispatch(forgotPassword(val)),
    }
}
 
export default connect(mapStateToProps, mapDispatchToProps)(Navbar);