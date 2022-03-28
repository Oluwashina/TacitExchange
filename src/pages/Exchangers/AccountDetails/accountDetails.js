import React, {useState, useRef, useEffect} from 'react';
import Sidebar from '../../../components/UserSideBar/Sidebar';
import './account.css'
import DataTable from 'react-data-table-component'
import Check from '../../../assets/images/trash.svg'
import Edit from '../../../assets/images/edit.svg'
import {Form, Formik} from 'formik'
import Modal from 'react-bootstrap/Modal'
import { accountDetailsValidator } from "../../../validationSchema/validator";
import accountCircle from '../../../assets/images/accountCircle.svg'
import closeIcon from '../../../assets/images/closeIcon.svg'
import {connect} from 'react-redux'
import { addAccountDetails, deleteAccountDetails, filterDetails, getListOfBanks, updateAccountDetails } from '../../../store/actions/auth';
import { confirmAlert } from "react-confirm-alert";
import "react-confirm-alert/src/react-confirm-alert.css";


const UserAccount = (props) => {

    const {accountDetails, addAccount, handleFilter, deleteAcct, details, updateAccount, getBanks, banks} = props

     const ref = useRef()

    //  api call to get list fo all banks
     useEffect(() => {
       getBanks()
      }, [getBanks]);


    const [show, setShow] = useState(false);
    const [editShow, setEditShow] = useState(false);
    
    const handleClose = () => setShow(false);
    const handleShow = () => {
        setShow(true);
    }

    const handleEditClose = () => setEditShow(false);
    const handleEditShow = () => {
        setEditShow(true);
    }

    const handleSubmit = async (values) =>{
        // find by the bank code from the banks the bank name
        var bankCode = values.bankCode
        var bankName = banks.find(pro=> pro.code === bankCode).name
        var res ={
            ...values,  
            bankName
        }
        await addAccount(res)

        setTimeout(() => {
            handleClose()
          }, 2000);
      }
    
      const handleUpdate = async (values) =>{
         var bankCode = values.bankCode
          var bankName = banks.find(pro=> pro.code === bankCode).name
          var res = {
              ...values,
              bankName
          }

          await updateAccount(res)

          setTimeout(() => {
            handleEditClose()
          }, 2000);
      } 
    
    const columns = [
        {
          name: "Account Name",
          selector: "accountName",
          sortable: true
        },
        {
          name: "Account Number",
          selector: "accountNumber",
          sortable: true
        },
        {
          name: "Bank Name",
          selector: 'bankName'
        },
        {
            name: "",
            cell: row => 
            <div>
                <img src={Edit}
                  onClick={() => OpenEditModal(row.id)}
                 alt="edit" width="25" height="25" style={{cursor: 'pointer'}} /> 
                <img src={Check} 
                 onClick={() => handleDelete(row.id)}
                alt="check" className="ml-2" width="25" height="25" style={{cursor: 'pointer'}} /> 
            </div>
            
        },
      ];

    const handleDelete = (id) => {
        confirmAlert({
          title: "Confirm to submit",
          message: `You are about to remove this account details, Do you wish to continue?`,
          buttons: [
            {
              label: "Yes",
              onClick: () => confirmDelete(id),
            },
            {
              label: "No",
            },
          ],
        });
      };
    
      const confirmDelete = (id) => {
        deleteAcct(id);
      };

      const OpenEditModal = (id) =>{
        handleFilter(id)

        setTimeout(() => {
            handleEditShow()
          }, 500);
       
      }


    return ( 
        <>

        {/* modal for adding accounts */}
        <Modal show={show}
            ref={ref}
            {...props}
         onHide={handleClose}>

            <Modal.Header >
             <div onClick={handleClose} style={{position: 'absolute', right: '35px', top: '20px', cursor: 'pointer'}}>
                <img src={closeIcon} alt="close" width="40" height="40" />
            </div>
             </Modal.Header>

            {/* login container */}
            <div className="d-none d-md-block" style={{position: 'absolute', left: '70px', top: '0px'}}>
                    <img alt="login" src={accountCircle} width="350" height="140" />
             </div>
             

            <div className="text-center contain-head mt-3 mt-lg-5" style={{position: 'relative'}}>
                <h3 className="login-text">Add Account</h3>
            </div>

            {/* login section */}
            <div className="container modal-contain">
                <div className="text-center">
                    <h6 style={{fontWeight: 'bold'}}>Add your best bank account</h6>
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
                validationSchema={accountDetailsValidator}
                initialValues={{bankCode: "", accountNumber: "", accountName: ""}}
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
                          {/* bank name */}
                             {/* <div className="form-group input-container mt-4">
                                <input
                                    className="form-control input-style"
                                    type="text"
                                    placeholder="Bank Name"
                                    onBlur={handleBlur}
                                    onChange={handleChange}
                                    id="bank"
                                    value={values.bank}
                                />
                                   <small style={{ color: "#dc3545" }}>
                                        {touched.bank && errors.bank}
                                    </small>
                            </div> */}

                            <div className="form-group mt-4">
                              <select
                                 name="bankCode"
                                 values={values.bankCode}
                                 onChange={handleChange}
                                    onBlur={handleBlur}
                                    className="form-control select-style" 
                                    style={{border: '1px solid #D1D1D1'}}
                                    id="bankCode">
                                    <option defaultValue="" >Select Bank Name</option>
                                    {banks.map((opt, index) => {
                                            return <option key={index} value={opt.code}>{opt.name}</option>
                                        })}
                                   
                                </select>
                                <small style={{ color: "#dc3545" }}>
                                  {touched.bankCode && errors.bankCode}
                              </small>
                            </div>
                        
                            {/* account number */}
                            <div className="form-group input-container mt-3">
                            <input
                                className="form-control input-style"
                                type="text"
                                placeholder="Account Number"
                                    id="accountNumber"
                                value={values.accountNumber}
                                onChange={handleChange}
                                onBlur={handleBlur}
                            />
                              <small style={{ color: "#dc3545" }}>
                              {touched.accountNumber && errors.accountNumber}
                           </small>
                            </div>

                        {/* account name */}
                            <div className="form-group input-container mt-3">
                            <input
                                className="form-control input-style"
                                type="text"
                                placeholder="Account Name"
                                    id="accountName"
                                value={values.accountName}
                                onChange={handleChange}
                                onBlur={handleBlur}
                            />
                              <small style={{ color: "#dc3545" }}>
                              {touched.accountName && errors.accountName}
                           </small>
                            </div>


                            <div className="text-center">
                            <button 
                            type="submit"
                            disabled={isSubmitting}
                            className="btn btn-blueTacit">Add Account</button>
                            </div>
                            
                      </Form>
                  )}

              </Formik>
             
            </div>
        
      </Modal>
      {/* modal end for ading account */}

      {/* modal start for editing account details */}
      <Modal show={editShow}
            ref={ref}
            {...props}
         onHide={handleEditClose}>

            <Modal.Header >
             <div onClick={handleEditClose} style={{position: 'absolute', right: '35px', top: '20px', cursor: 'pointer'}}>
                <img src={closeIcon} alt="close" width="40" height="40" />
            </div>
             </Modal.Header>

            {/* login container */}
            <div className="d-none d-md-block" style={{position: 'absolute', left: '70px', top: '0px'}}>
                    <img alt="login" src={accountCircle} width="350" height="140" />
             </div>
            

            <div className="text-center contain-head mt-3 mt-lg-5" style={{position: 'relative'}}>
                <h3 className="login-text">Edit Account</h3>
            </div>

            {/* login section */}
            <div className="container modal-contain">
                <div className="text-center">
                    <h6 style={{fontWeight: 'bold'}}>Add your best bank account</h6>
                </div>
                <div>
                    <hr style={{borderTop: '1px solid #CDCDCD'}} />
                </div>

                {/* form login submission */}
                 {/* form submission */}
              <Formik
                onSubmit={(values, {setSubmitting}) =>
                    handleUpdate(values, setSubmitting)
                    }
                validationSchema={accountDetailsValidator}
                initialValues={{bankCode: details.bankCode ? details.bankCode : "", accountNumber: details.accountNumber ? details.accountNumber : "", accountName: details.accountName ? details.accountName : ""}}
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
                          {/* bank name */}
                             {/* <div className="form-group input-container mt-4">
                                <input
                                    className="form-control input-style"
                                    type="text"
                                    placeholder="Bank Name"
                                    onBlur={handleBlur}
                                    onChange={handleChange}
                                    id="bank"
                                    value={values.bank}
                                />
                                   <small style={{ color: "#dc3545" }}>
                                        {touched.bank && errors.bank}
                                    </small>
                            </div> */}

                            
                            <div className="form-group mt-4">
                              <select
                                 name="bankCode"
                                 values={values.bankCode}
                                 onChange={handleChange}
                                    onBlur={handleBlur}
                                    className="form-control select-style" 
                                    style={{border: '1px solid #D1D1D1'}}
                                    id="bankCode">
                                   <option value={details.bankCode} >{details.bankName}</option>
                                   {banks.filter(val => val.code !== details.bankCode).map((opt, index) => {
                                            return <option key={index}
                                             value={opt.code}>{opt.name}</option>
                                        })}
                                   
                                   
                                </select>
                                <small style={{ color: "#dc3545" }}>
                                  {touched.bankCode && errors.bankCode}
                              </small>
                            </div>
                        
                            {/* account number */}
                            <div className="form-group input-container mt-3">
                            <input
                                className="form-control input-style"
                                type="text"
                                placeholder="Account Number"
                                    id="accountNumber"
                                value={values.accountNumber}
                                onChange={handleChange}
                                onBlur={handleBlur}
                            />
                              <small style={{ color: "#dc3545" }}>
                              {touched.accountNumber && errors.accountNumber}
                           </small>
                            </div>

                        {/* account name */}
                            <div className="form-group input-container mt-3">
                            <input
                                className="form-control input-style"
                                type="text"
                                placeholder="Account Name"
                                    id="accountName"
                                value={values.accountName}
                                onChange={handleChange}
                                onBlur={handleBlur}
                            />
                              <small style={{ color: "#dc3545" }}>
                              {touched.accountName && errors.accountName}
                           </small>
                            </div>


                            <div className="text-center">
                            <button 
                            type="submit"
                            disabled={isSubmitting}
                            className="btn btn-blueTacit">Update Account</button>
                            </div>
                            
                      </Form>
                  )}

              </Formik>
             
            </div>
        
      </Modal>
      {/* end of edit account details modal */}


            <Sidebar title="Account Details" />
            <div className="usermain">
              <div className="contain" style={{width: '100%', paddingLeft: '20px', paddingRight: '20px'}}>

                  {/* check if there is account details */}
                  {
                      accountDetails.length ? 

                    <div className="accountDiv mt-lg-4 mt-5 mb-5">

                            <div className="mt-4 mb-2">
                            <DataTable
                            title="Bank Accounts"
                            columns={columns}
                            data={accountDetails}
                            pagination
                            persistTableHead
                            progressPending={false}
                            />
                            </div>

                         <div className="mt-1 text-center">
                            <button 
                            onClick={handleShow}
                            className="btn btn-blueTacit">Add Other Account</button>
                         </div>

                     </div>



                     :

                    
                <div className="dashTrade mt-lg-4 mt-5 mb-5">

                    <div>
                        <p className="mb-0 text-center" style={{fontWeight: 'bold'}}>No account added yet!</p>
                    </div>

                    <div className="mt-3">
                        <button 
                        onClick={handleShow}
                        className="btn btn-blueTacit">Add Account</button>
                    </div>

                    </div>

                  }


                

             </div>
            </div>
        </>
     );
}

const mapStateToProps = (state) =>{
    return{
        accountDetails: state.auth.accountDetails,
        details: state.auth.details,
        banks: state.auth.banks
    }
}

const mapDispatchToProps = (dispatch) =>{
    return{
        addAccount: (val) => dispatch(addAccountDetails(val)),
        updateAccount: (val) => dispatch(updateAccountDetails(val)),
        deleteAcct: (id) => dispatch(deleteAccountDetails(id)),
        handleFilter: (id) => dispatch(filterDetails(id)),
        getBanks: () => dispatch(getListOfBanks())
    }
}
 
export default connect(mapStateToProps, mapDispatchToProps)(UserAccount);