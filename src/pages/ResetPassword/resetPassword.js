import React, {useEffect} from "react";
import Logo from "../../assets/images/logo.png";
import WelcomeImg from "../../assets/images/adminlogin.png";
import { Form, Formik } from "formik";
import { resetPasswordValidator } from "../../validationSchema/validator";
import { connect } from "react-redux";
import {ResetPassword, verifyResetCode  } from '../../store/actions/auth';
import { useLocation, Link, useHistory } from "react-router-dom";

const UserReset = ({ Reset, verifyCode, code,  }) => {
  const search = useLocation().search;

  const history = useHistory()

  // Verify reset code sent to email if valid!
  useEffect(() => {
    const code = new URLSearchParams(search).get("code");
    verifyCode(code);
  }, [verifyCode, search]);

  // Reset password submit button
  const handleSubmit = async (values, setSubmitting) => {
      console.log(values)
    const code = new URLSearchParams(search).get("code");
    var creds = {
      code,
      password: values.password,
    };
    await Reset(creds);

    setTimeout(() => {
      history.push('/')
    }, 2000);  

  };

  if (code) {
    return (
      <div className="row no-gutters">
        <div className="col-lg-5">

        <div className="container">
            <div className="login-div">
              <img src={Logo} className="img-fluid" alt="logo" />

              <div className="mt-5">
                <h4 style={{ lineHeight: "35px", fontWeight: 700 }}>
                     Reset Password?
                </h4>
              </div>

              <p className="mt-4" style={{ lineHeight: "25px" }}>
              The recovery link you selected has already been used to change
              your password. Try resetting your password again to receive a new
              recovery link.
              </p>
              

            <hr
              className="mt-5"
              style={{ borderTop: "1px solid #CDCDCD" }}
            />

            
          <div className="text-center mt-2">
            Already have an account?{" "}
            <Link
              to="/"
              style={{ textDecoration: "none", color: "#9d0957" }}
            >
              Sign In
            </Link>
          </div>

          </div>
        </div>
        </div>
        <div className="col-lg-7 d-none d-md-block">
          <img src={WelcomeImg} alt="oyap" className="img-fluid" />
        </div>
      </div>
    );
  }

  return (
    <div className="">
      <div className="row no-gutters">
        <div className="col-lg-5">

          <div className="container">
            <div className="login-div">
              <img src={Logo} className="img-fluid" alt="logo" />

              <div className="mt-5">
                <h4 style={{ lineHeight: "35px", fontWeight: 700 }}>
                     Reset Password?
                </h4>
              </div>

              {/* form submission */}
              <Formik
                onSubmit={(values, {setSubmitting}) =>
                    handleSubmit(values, setSubmitting)
                    }
                validationSchema={resetPasswordValidator}
                initialValues={{password: "", confirm_password: ""}}
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
                          
                           {/* New Password */}
                  <div className="form-group mt-4">
                    <label htmlFor="password">New Password</label>
                    <input
                      className="form-control input-style"
                      type="password"
                      id="password"
                      value={values.password}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      placeholder="New Password"
                    />
                    <small style={{ color: "#dc3545" }}>
                      {touched.password && errors.password}
                    </small>
                  </div>

                  
                  {/* confirm password */}
                  <div className="form-group">
                    <label htmlFor="password">Confirm Password</label>
                    <input
                      className="form-control input-style"
                      type="password"
                      id="confirm_password"
                      value={values.confirm_password}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      placeholder="Confirm Password"
                    />
                    <small style={{ color: "#dc3545" }}>
                      {touched.confirm_password && errors.confirm_password}
                    </small>
                  </div>
                         
                     <button 
                            type="submit"
                            disabled={isSubmitting}
                            className="btn btn-pinkTacit mt-2">Reset Password</button>
                      </Form>
                  )}

              </Formik>
             
            </div>
          </div>
        </div>
        <div className="col-lg-7 d-none d-md-block">
          <img src={WelcomeImg} alt="oyap" className="img-fluid" />
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    code: state.auth.resetcode,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    Reset: (creds) => dispatch(ResetPassword(creds)),
    verifyCode: (creds) => dispatch(verifyResetCode(creds)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserReset);
