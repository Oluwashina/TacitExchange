import React, {useRef, useState, useEffect} from 'react';
import UserSideBar from '../../../components/UserSideBar/Sidebar';
import './profile.css'
import Profile from '../../../assets/images/userProfile.svg'
import {connect} from 'react-redux'
import { ChangePassword, UploadPhoto } from '../../../store/actions/auth';
import { Form, Formik } from "formik";
import {ChangePasswordValidator} from '../../../validationSchema/validator'
import {useHistory} from 'react-router-dom'

const UserProfile = (props) => {

    const {handlePicture, photoloader, firstname, lastname, email, saveProfile, image, loading} = props

    const fileRef = useRef(null)

    const history = useHistory()
    
    const [passwordShown, setPasswordShown] = useState(false);
    const [passwordNew, setPasswordNew] = useState(false);
    const [passwordConfirm, setPasswordConfirm] = useState(false)

    const togglePasswordVisiblity = () => {
        setPasswordShown(passwordShown ? false : true);
      };
    
      const togglePasswordNew = () => {
        setPasswordNew(passwordNew ? false : true);
      };
    
      const togglePasswordConfirm = () => {
        setPasswordConfirm(passwordConfirm ? false : true);
      };


    const handleFile = () =>{
        var file = fileRef.current.files[0]
        console.log(file)
        handlePicture(file)
    }

    const handleSubmit = async (values, setSubmitting) => {
        await saveProfile(values);
        console.log(values)
      };

      //  route to login after successful changed password
      useEffect(() =>{
        if(loading){
          history.push("/")
        }
     },[loading, history])




    return ( 
        <>
        <UserSideBar title="Profile"  />
        <div className="usermain">
            <div className="contain" style={{width: '100%', paddingLeft: '20px', paddingRight: '20px'}}>

                {/* profile layout */}
                <div className="userProfile mt-4 mb-5">

                     <div className="text-center ">
                        <img
                        // src="/img/profile.png"
                        src={ image ? image :Profile}
                        className="profileImage"
                        alt="profile-pix"
                        />
                    </div>

                    <div className="text-center mt-4">
                         <label className={photoloader ? "file user disabled" : "file user"}
                                ><i className="mdi mdi-camera-outline mr-1"></i> Upload Photo
                                <input type="file" size="60"
                                    ref={fileRef}
                                 className="adminphoto user"
                                onChange={() => handleFile()}
                                />
                                </label> 
                        </div>

                        {/* firstname and lastname */}
                        <div className="mt-4 text-center user-lay">
                            <div
                                style={{
                                background: "rgba(44, 58, 80, 0.2)",
                                borderRadius: "5px",
                                padding: "10px 20px",
                            
                                }}
                            >
                            <p
                            className="mb-0"
                            style={{ color: "#2C3A50", fontWeight: 'bold' }}
                            >
                            {firstname ? firstname : "Winsala"} {lastname ? lastname : "Bayo"}
                            </p>
                        </div>
                    </div>

                    {/* email */}
                    <div className="text-center mt-4 user-lay">
                        <div
                            style={{
                            background: "rgba(44, 58, 80, 0.2)",
                            borderRadius: "5px",
                            padding: "10px 20px",
                           
                            }}
                        >
                            <p
                            className="mb-0"
                            style={{ color: "#2C3A50", fontWeight: 'bold' }}
                            >
                            {email ? email : "winsala121@gmail.com"}
                            </p>
                        </div>
                    </div>

                    <div className="text-center mt-4">
                        <p className="mb-0">Change Password ?</p>
                    </div>

                      {/* form submission */}
              <Formik
                onSubmit={(values, { setSubmitting }) =>
                  handleSubmit(values, setSubmitting)
                }
                validationSchema={ChangePasswordValidator}
                initialValues={{ newpassword: "", password: "", confirm_password: "" }}
              >
                {({
                  handleChange,
                  isSubmitting,
                  handleSubmit,
                  handleBlur,
                  values,
                  touched,
                  errors,
                }) => (
                  <Form onSubmit={handleSubmit}>
                    {/* current password */}
                    <div className="user-lay">
                      <div
                        className="form-group mt-2"
                        style={{ position: "relative" }}
                      >
                        <input
                          type={passwordShown ? "text" : "password"}
                          name="password"
                          placeholder="Current Password"
                          style={{ color: "black" }}
                          className="form-control password-style"
                          onBlur={handleBlur}
                          onChange={handleChange}
                          id="password"
                          value={values.password}
                        />
                        <div className="password_icon">
                          <i
                            style={{ fontSize: 18 }}
                            className={
                              passwordShown ? "mdi mdi-eye" : "mdi mdi-eye-off"
                            }
                            onClick={togglePasswordVisiblity}
                          ></i>
                        </div>
                        <small style={{ color: "#dc3545" }}>
                          {touched.password && errors.password}
                        </small>
                      </div>
                    </div>

                    {/* new password */}
                    <div className="user-lay">
                      <div
                        className="form-group mt-3"
                        style={{ position: "relative" }}
                      >
                        <input
                          type={passwordNew ? "text" : "password"}
                          className="form-control password-style"
                          name="newpassword"
                          placeholder="New Password"
                          style={{ color: "black" }}
                          onBlur={handleBlur}
                          onChange={handleChange}
                          id="newpassword"
                          value={values.newpassword}
                        />
                        <div className="password_icon">
                          <i
                            style={{ fontSize: 18 }}
                            className={
                              passwordNew ? "mdi mdi-eye" : "mdi mdi-eye-off"
                            }
                            onClick={togglePasswordNew}
                          ></i>
                        </div>
                        <small style={{ color: "#dc3545" }}>
                          {touched.newpassword && errors.newpassword}
                        </small>
                      </div>
                    </div>

                    {/* confirm password */}
                    <div className="user-lay">
                      <div
                        className="form-group mt-3"
                        style={{ position: "relative" }}
                      >
                        <input
                          type={passwordConfirm ? "text" : "password"}
                          className="form-control password-style"
                          name="confirm_password"
                          placeholder="Confirm New Password"
                          style={{ color: "black" }}
                          onBlur={handleBlur}
                          onChange={handleChange}
                          id="confirm_password"
                          value={values.confirm_password}
                        />
                        <div className="password_icon">
                          <i
                            style={{ fontSize: 18 }}
                            className={
                              passwordConfirm
                                ? "mdi mdi-eye"
                                : "mdi mdi-eye-off"
                            }
                            onClick={togglePasswordConfirm}
                          ></i>
                        </div>
                        <small style={{ color: "#dc3545" }}>
                          {touched.confirm_password && errors.confirm_password}
                        </small>
                      </div>
                    </div>

                    <div className="text-center mt-4">
                      <button 
                       type="submit"
                      disabled={isSubmitting} className="btn btn-pinkTacit">
                        Save Password
                      </button>
                    </div>
                  </Form>
                )}
              </Formik>






                </div>

            </div>
        </div>

        </>
     );
}

const mapStateToProps = (state) =>{
    return{
        photoloader: state.auth.photoloader,
        image: state.auth.profilePic,
        firstname: state.auth.firstname,
        lastname: state.auth.lastname,
        email: state.auth.email,
        loading: state.auth.loading,
    }
}

const mapDispatchToProps = (dispatch) =>{
    return{
        handlePicture: (values) => dispatch(UploadPhoto(values)),
        saveProfile: (values) => dispatch(ChangePassword(values))
    }
}
 
export default connect(mapStateToProps, mapDispatchToProps)(UserProfile);