import {PostApi, PutApi, GetApi, DeleteApi} from '../helpers'
import cogoToast from "cogo-toast";
import axios from 'axios'
import {apiUrl} from '../config'


const getToken = () => {
	const token = localStorage.getItem("token");
	return token
}

// login user actions functionality
export const loginUser = (user) => {
  return async (dispatch, getState) => {
    try {
      const res = await PostApi("authenticate", {...user}, "", "application/json")
      if (res.status === 200) {
        let role = res.data.profile.role
        switch(role){
          case 'Exchanger':
            dispatch({ type: "LOGIN_SUCCESS", data: res.data });
             cogoToast.success('Login Successful!', { position: 'bottom-right', })
            break;
          default:
            cogoToast.error('User not authorized!')
            break;
        } 
      }
      if(res.status === 400){
        dispatch({ type: "LOGIN_FAIL", err: res.data});
        cogoToast.error(`${res.data.message}`)
      }
    } catch (err) {
      console.log(err)
    }
  };
};


// administrator login
export const loginAdmin = (user) => {
  return async (dispatch, getState) => {
    try {
      const res = await PostApi("authenticate", {...user}, "", "application/json")
      if (res.status === 200) {
        let role = res.data.profile.role
        switch(role){
          case 'Admin':
            dispatch({ type: "LOGIN_SUCCESS", data: res.data });
             cogoToast.success('Login Successful!', { position: 'bottom-right', })
            break;
          case 'SubAdmin':
            dispatch({ type: "LOGIN_SUCCESS", data: res.data });
            cogoToast.success('Login Successful!', { position: 'bottom-right', })
              break;
          default:
            cogoToast.error('User not authorized!')
            break;
        }    
      }
      if(res.status === 400){
        dispatch({ type: "LOGIN_FAIL", err: res.data});
        cogoToast.error(`${res.data.message}`)
      }
    } catch (err) {
      console.log(err)
    }
  };
};

// logout a user
export const logOut = () => {
  return (dispatch, getState) => {
    localStorage.setItem("token", "")
    dispatch({ type: "logout", err: "User Out" });
  };
};


// sign up user functionality
export const signUp = (user) => {
  return async (dispatch, getState) => {
    try {
      const res = await PostApi("exchanger/user", {
                   firstName: user.firstName,
                   lastName: user.lastName,
                   phoneNumber: user.phoneNumber,
                   email: user.email,
                   password: user.password,
                  }, "", "application/json")
      if (res.status === 201) {
        dispatch({ type: "SIGNUP_SUCCESS", data: res.data });
        cogoToast.success("Registration Successful!, Login to continue");
      }
      if(res.status === 400){
        dispatch({ type: "SIGNUP_FAIL", err: res.data});
        cogoToast.error('Looks like a user already exist with this credentails!')
      }
    } catch (err) {
      console.log(err)
    }
  };
};


// check for email verification link code if clicked or not
export const getEmailVerify = (val) => {
  return async (dispatch, getState) => {
    try {
      const res = await PostApi("verifyuser", {
        verificationCode: val
      }, "", "application/json")
      if (res.status === 201) {
        cogoToast.success("Email verified successfully!", {
          position: "top-center",
        });
        dispatch({ type: 'VALID_EMAIL_LINK', data: res.data });
      }
      if(res.status === 400){
        cogoToast.error("Oops looks like the code is invalid or has been used.");
        dispatch({ type: 'INVALID_EMAIL_LINK', data: res.data });
      }
    } catch (err) {
      console.log(err)
    }
  };
  };


// forgot password
export const forgotPassword = (user) => {
  return async (dispatch, getState) => {
    try {
      const res = await PostApi("forgotpassword", {...user}, "", "application/json")
      if (res.status === 201) {
        cogoToast.success("Check your email for password reset instructions!", {
          position: "top-center",
        });
      }
      if(res.status === 400){
        cogoToast.error("Kindly check that the credentials entered is valid!");
      }
    } catch (err) {
      console.log(err)
    }
  };
};

// verify forgot password code
export const verifyResetCode = (code) => {
  return async (dispatch, getState) => {
    try {
      const res = await PostApi("link/verify/forgotpasswordcode", {code}, "", "application/json")
      if (res.status === 200) {
        dispatch({ type: 'VALID_RESETCODE' });
      }
      if(res.status === 400){
        // Invalid code
        dispatch({ type: 'INVALID_RESETCODE' });
      }
    } catch (err) {
      console.log(err)
    }
  };
};

 //   Change password functionality
 export const ChangePassword = (user) => {
  return async (dispatch, getState) => {
    
    const values = {
      oldPassword: user.password,
      newPassword: user.newpassword
    }
    try {
      const res = await PostApi("changepassword/admin", { ...values }, getToken(), "application/json");
      if (res.status === 200) {
          dispatch({ type: "PasswordChanged"})
        cogoToast.success('Password updated successfully! Kindly Login again.', { position: 'bottom-right', })
      }
      if(res.status === 400){
        cogoToast.error('Check that your old password is correct!')
      }
    } catch (err) {
      console.log(err)
    }
  };
};

// reset password functionality
export const ResetPassword = (val) => {
  return async (dispatch, getState) => {
    dispatch({ type: 'start' });
    try {
      const res = await PostApi("reset", {...val}, "", "application/json")
      if (res.status === 200) {
        // reset a user's password
        dispatch({ type: 'passwordsuccess' });
        cogoToast.success("Password successfully changed, Login to continue", {
          position: "top-center",
        });
      }
      if(res.status === 400){
        // error while reset password
        dispatch({ type: 'error' });
      }
    } catch (err) {
      console.log(err)
    }
  };
};


// update account details functionality
export const addAccountDetails = (val) => {
  return async (dispatch, getState) => {
    try {
      const res = await PostApi("accountdetails", {
        accountNumber: val.accountNumber,
        accountName: val.accountName,
        bankName: val.bankName,
        bankCode: val.bankCode
      }, getToken(), "application/json")
      if (res.status === 200) {
        // add a new account
        dispatch({ type: 'AccountCreateSuccessful', data: res.data });
        cogoToast.success("Account details added successfully!");
      }
      if(res.status === 400){
        // error while adding account
        dispatch({ type: 'Account_Error' });
      }
    } catch (err) {
      console.log(err)
    }
  };
};

// update account details
export const updateAccountDetails = (val) => {
  return async (dispatch, getState) => {
    try {
      let id = getState().auth.details.id
      const res = await PutApi("accountdetails/"+id, {
        accountNumber: val.accountNumber,
        accountName: val.accountName,
        bankName: val.bankName,
        bankCode: val.bankCode,
        isDefault: getState().auth.details.isDefault
      }, getToken(), "application/json")
      if (res.status === 200) {
        // add a new account
        dispatch({ type: 'AccountUpdatedSuccessful', data: res.data });
        cogoToast.success("Account details updated successfully!");
      }
      if(res.status === 400){
        // error while adding account
        dispatch({ type: 'Account_Error' });
      }
    } catch (err) {
      console.log(err)
    }
  };
};


// delete account details
export const deleteAccountDetails = (id) => {
  return async (dispatch, getState) => {
    try {
      const res = await DeleteApi(
        "accountdetails/" + id,
        getToken(),
        "application/json"
      );
      if (res.status === 200) {
        // update account details
        dispatch({
          type: "AccountDeletedSuccessful",
          data: res.data,
        });
        cogoToast.success("Account details deleted successfully!");
      }
      if (res.status === 400) {
        // error while adding account
        dispatch({ type: "Account_Error" });
        cogoToast.error("Error while deleting account details");
      }
    } catch (err) {
      console.log(err);
    }
  };
};
  

// Upload a profile picture functionality
export const UploadPhoto = (value) => {
  return async (dispatch, getState) => {
    dispatch({ type: "PhotoLoader"});
      let formdata = new FormData()
      formdata.append("file", value);
    try {
      const res = await PostApi("profileimage", formdata, getToken(), "multipart/form-data");
      if (res.status === 201) {
            var image = res.data.imageUrl
            // actual call to update profile 
            dispatch({type: "profilePicture", image})
            // check for role so to know what to send
            let role = getState().auth.role
            switch(role){
              case 'Admin':
                const values = {
                  firstName: getState().auth.firstname,
                  lastName: getState().auth.lastname,
                  role: getState().auth.role,
                  email: getState().auth.email,
                  phoneNumber:getState().auth.phoneNumber,
                  isVerified: getState().auth.isVerified,
                  isEnabled: getState().auth.isEnabled,
                  walletBalance: getState().auth.walletBalance,
                  profilePic: image,
                }
                  axios.put(apiUrl + "member", {...values}, {
                    headers: {
                        Accept: 'application/json',
                        Authorization: getToken()
                    }
                }).then((res) => {
                    if (res.status === 201) {
                      dispatch({ type: "StopPhotoLoader"});
                      cogoToast.success('Image updated successfully!')
                    } 
                }).catch((err) => {
                  dispatch({ type: "StopPhotoLoader"});
                    cogoToast.error('Error while uploading picture!')
                })
                break;
            case 'SubAdmin':
              const val2 = {
                firstName: getState().auth.firstname,
                lastName: getState().auth.lastname,
                role: getState().auth.role,
                email: getState().auth.email,
                phoneNumber:getState().auth.phoneNumber,
                isVerified: getState().auth.isVerified,
                isEnabled: getState().auth.isEnabled,
                walletBalance: getState().auth.walletBalance,
                profilePic: image,
              }
                axios.put(apiUrl + "member", {...val2}, {
                  headers: {
                      Accept: 'application/json',
                      Authorization: getToken()
                  }
              }).then((res) => {
                  if (res.status === 201) {
                    dispatch({ type: "StopPhotoLoader"});
                    cogoToast.success('Image updated successfully!')
                  } 
              }).catch((err) => {
                dispatch({ type: "StopPhotoLoader"});
                  cogoToast.error('Error while uploading picture!')
              })
               break;
            case 'Exchanger':
              const val3 = {
                firstName: getState().auth.firstname,
                lastName: getState().auth.lastname,
                role: getState().auth.role,
                email: getState().auth.email,
                phoneNumber:getState().auth.phoneNumber,
                isVerified: getState().auth.isVerified,
                isEnabled: getState().auth.isEnabled,
                walletBalance: getState().auth.walletBalance,
                accountDetails: getState().auth.accountDetails,
                profilePic: image,
              }
                  axios.put(apiUrl + "member", {...val3}, {
                    headers: {
                        Accept: 'application/json',
                        Authorization: getToken()
                    }
                }).then((res) => {
                    if (res.status === 201) {
                      dispatch({ type: "StopPhotoLoader"});
                      cogoToast.success('Image updated successfully!')
                    } 
                }).catch((err) => {
                  dispatch({ type: "StopPhotoLoader"});
                    cogoToast.error('Error while uploading picture!')
                })
              break;
              default:
                break;
            }
           
          }
        if(res.status === 400 || res.status === 404){
          cogoToast.error('Error while uploading image!')
          dispatch({ type: "StopPhotoLoader"});
        }
    } catch (err) {
      // var message = err.response.data
        console.log(err)
    }
  };
};

// filter account details by id
export const filterDetails = (id) =>{
  return dispatch =>{
      dispatch({type: 'filterDetails', id})
  }
}

// get a list of all banks with their bank codes
export const getListOfBanks = ()  =>{
  return async (dispatch, getState) => {
    try {
      const res = await GetApi("bank/code", "");
      if (res.status === 200) {
        console.log(res)
        dispatch({ type: "Banks", data: res.data.bankCode});
      }
      if(res.status === 400){
        dispatch({ type: "Banks_Error", err: res.data });
      }
    } catch (err) {
     console.log(err)
    }
  };
 }

