import React, {useEffect} from 'react';
import UserSideBar from '../../../components/UserSideBar/Sidebar';
import {Form, Formik} from 'formik'
import {rateValidator} from '../../../validationSchema/validator'
import Nigeria from  '../../../assets/images/nigerialogo.svg'
import {connect} from 'react-redux'
import { getRateCategory, getRateSubCategory } from '../../../store/actions/rate';

const UserTrade = (props) => {

    const {fetchCategory, category, fetchSubCategory, subcategory, amount} = props

    useEffect(() =>{
        fetchCategory()
  }, [fetchCategory])

  
  const handleSubmit = (values, setSubmitting,)  =>{
    console.log(values)
  }

  const handleSubCategory = (val) =>{
    fetchSubCategory(val)
}


    return ( 
        <>
        <UserSideBar />
        <div className="usermain">
            <div className="contain" style={{width: '100%', paddingLeft: '20px', paddingRight: '20px'}}>

                {/* trade layout */}
                <div className="userProfile mt-4 mb-5">

                        
              <Formik
                onSubmit={(values, {setSubmitting}) =>
                    handleSubmit(values, setSubmitting)
                    }
                validationSchema={rateValidator}
                initialValues={{giftname: "", category: "", amount: ""}}
              >
                  {({
                      handleChange,
                      isSubmitting,
                      handleSubmit,
                      handleBlur,
                      handleReset,
                      setFieldValue,
                      values,
                      touched,
                      errors
                  })=>(
                      <Form onSubmit={handleSubmit}>

                        <div className="row">
                            <div className="col-lg-6">
                             <div className="form-group mt-lg-3 mt-3">
                              <label htmlFor="category">Gift Card Name</label>
                                <select
                                 name="giftname"
                                 values={values.giftname}
                                 onChange={(e) => {
                                    handleChange(e, setFieldValue("category", ""))
                                    handleSubCategory(e.currentTarget.value);
                                  }}
                                 onBlur={handleBlur}
                                 className="form-control select-style" 
                                 id="giftname">
                                    <option defaultValue="" >Select</option>
                                    {category.map((opt, index) => {
                                            return <option key={index} value={opt.id}>{opt.categoryname}</option>
                                        })}
                                    
                                </select>
                                <small style={{ color: "#dc3545" }}>
                                  {touched.giftname && errors.giftname}
                              </small>
                            </div>
                        </div>

                        <div className="col-lg-6">
                            <div className="form-group mt-lg-3 mt-0">
                              <label htmlFor="category">Gift Card Category</label>
                                <select 
                                name="category"
                                value={values.category}
                                onBlur={handleBlur}
                                onChange={handleChange}
                                className="form-control select-style"
                                 id="category">
                                    <option defaultValue="">Select</option>
                                    {subcategory.map((opt, index) => {
                                            return <option key={index} value={opt.id}>{opt.subcategoryname}</option>
                                        })}
                                </select>
                                <small style={{ color: "#dc3545" }}>
                                  {touched.category && errors.category}
                              </small>
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-lg-6">
                            <div className="form-group mt-lg-3 mt-0">
                                <label htmlFor="email">Amount</label>
                                <input
                                value={values.amount}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                id="amount"
                                className="form-control input-style"
                                placeholder="Amount in USD"
                                type="tel"
                                />
                                <small style={{ color: "#dc3545" }}>
                                  {touched.amount && errors.amount}
                              </small>
                            </div>
                        </div>

                        <div className="col-lg-6">
                            <div className="form-group input-container mt-lg-3 mt-0">
                              <label htmlFor="category">You Get</label>
                              <div className="amount-style">
                                    <div className="amount-div">
                                        <div>
                                            <img src={Nigeria} style={{width: '25px', height:"25px"}} alt="nigeria" />
                                        </div>
                                        <div className="ml-2">
                                            <p className="mb-0" style={{color: '#2C3A50', fontWeight: 'bold'}}>NGN</p>
                                        </div>
                                    </div>
                                </div>
                              <input
                                className="form-control input-style amount-disabled"
                                style={{color: '#2C3A50', fontWeight: 'bold', fontSize: '1.3rem'}}
                                placeholder="0.00"
                                disabled
                                value={amount.toFixed(2)}
                                type="text"
                                />
                            </div>
                        </div>
                    </div>

                    {/* image upload and comment section */}
                    <div className="row">
                        <div className="col-lg-6">
                            
                        </div>
                        
                            {/* comment */}
                        <div className="col-lg-6">
                            <div className="form-group mt-lg-3 mt-0">
                                <label htmlFor="password">Comment</label>
                                <textarea className="form-control input-style"
                                id="description"
                                rows="6"
                                style={{resize: 'none'}}
                                value={values.description}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                placeholder="Enter code(s) here if you are trading ecode or if your card is not clear." />
                                <small style={{ color: "#dc3545" }}>
                                    {touched.description && errors.description}
                                </small>
                            </div>
                        </div>
                    </div>

                    <div className="text-center mt-5">
                     <button 
                      type="submit"
                      disabled={isSubmitting}
                      style={{width: '40%'}}
                     className="btn btn-pinkTacit calc-size">Start Trade</button>
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
        category: state.rate.category,
        subcategory: state.rate.subcategory,
        amount: state.rate.amount
    }
}

const mapDispatchToProps = (dispatch) =>{
    return{
        fetchCategory: () => dispatch(getRateCategory()),
        fetchSubCategory: (id) => dispatch(getRateSubCategory(id)),
    }
}
 
export default connect(mapStateToProps, mapDispatchToProps)(UserTrade);