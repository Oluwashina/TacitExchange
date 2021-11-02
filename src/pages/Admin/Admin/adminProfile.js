import React, {useState, useRef, useEffect} from 'react';
import Sidebar from '../../../components/Sidebar/Sidebar';
import {connect} from 'react-redux'
import './admin.css'
import Profile from '../../../assets/images/profile.svg'
import { Form, Formik } from "formik";
import { ChangePasswordValidator } from "../../../validationSchema/validator";
import { ChangePassword, UploadPhoto } from '../../../store/actions/auth';

const AdminProfile = (props) => {

    const {image, firstname, lastname, email, photoloader, handlePicture, saveProfile, history, loading} = props

    const [val, setVal] = useState(3);

    const fileRef = useRef(null)

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

    const [tabData] = useState([
        { id: 1, name: "tab-1", text: "New", value: "1" },
        { id: 2, name: "tab-2", text: "View All", value: "2" },
        { id: 3, name: "tab-5", text: "Profile", value: "3" },
      ]);

      const tabs = tabData.map((item) => (
        <div
          key={item.id}
          className={val === item.id ? "filter-tab active-filter" : "filter-tab"}
          onClick={() => TabToggle(item.id)}
        >
          <p className="mb-0">{item.text}</p>
        </div>
      ));

      const TabToggle = (id) => {
        // route to all admin
        if (id === 1) {
            setVal(id)
          props.history.push("/admin/admin");
        }
        // route to all admin
        if (id === 2) {
            setVal(id)
          props.history.push("/admin/all");
        }
        // route to admin profile
        if (id === 3) {
          props.history.push("/admin/profile");
        setVal(id)
        }
      };

      const handleSubmit = async (values, setSubmitting) => {
        await saveProfile(values);
        console.log(values)
      };

      //  route to login after successful changed password
      useEffect(() =>{
        if(loading){
          history.push("/admin")
        }
    },[loading, history])

    return ( 
        <>
            <Sidebar />
            <div className="main">
                <div className="contain">

                <div
                    className="mt-4"
                    style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    }}
                >
                    <div className="chart-filter">{tabs}</div>
                </div>

                {/* main layout */} 
                {/* profile layout */}
                <div className="mt-5 mb-5 adminprofile">

                   <div className="text-center ">
                        <img
                        // src="/img/profile.png"
                        src={ image ? image : Profile}
                        className="profileImage"
                        alt="profile-pix"
                        />
                    </div>

                    <div className="text-center mt-3">
                         <label className={photoloader ? "file disabled" : "file"}
                                ><i className="mdi mdi-camera-outline mr-1"></i> Upload Photo
                                <input type="file" size="60"
                                    ref={fileRef}
                                    className="adminphoto"
                                onChange={() => handleFile()}
                                />
                                </label> 
                    </div>
                        
                        {/* firstname and lastname */}
                        <div className="text-center mt-4">
                            <div
                                style={{
                                background: "#F5F0FC",
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
                    <div className="text-center mt-3">
                        <div
                            style={{
                            background: "#F5F0FC",
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
                    <div className="width">
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
                    <div className="width">
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
                    <div className="width">
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
                      disabled={isSubmitting} className="btn btn-blueTacit">
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
        image: state.auth.profilePic,
        firstname: state.auth.firstname,
        lastname: state.auth.lastname,
        email: state.auth.email,
        photoloader: state.auth.photoloader,
        loading: state.auth.loading,
    }
}

const mapDispatchToProps = (dispatch) =>{
    return{
      handlePicture: (values) => dispatch(UploadPhoto(values)), 
      saveProfile: (values) => dispatch(ChangePassword(values)),
    }
}
 
export default connect(mapStateToProps, mapDispatchToProps)(AdminProfile);