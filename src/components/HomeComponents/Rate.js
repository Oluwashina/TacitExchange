import React, {useEffect} from 'react';
import {Form, Formik} from 'formik'
import {rateValidator} from '../../validationSchema/validator'
import {connect} from 'react-redux'
import { getRateCategory, getRateSubCategory, getRateValue } from '../../store/actions/rate';

const RateCalculator = (props) => {


    const {fetchCategory, category, fetchSubCategory, subcategory, calcRate, amount} = props

    useEffect(() =>{
          fetchCategory()
    }, [fetchCategory])


    const handleSubmit = (values, setSubmitting,)  =>{
        console.log(values)

        var amount = values.amount;
        var categoryId =  values.category

        calcRate(amount, categoryId)

        setTimeout(() => {
            setSubmitting(false);
          }, 1000);
    }


    const handleSubCategory = (val) =>{
        fetchSubCategory(val)
    }

    return ( 
        <>
            <div className="rate">

                <div className="">
                    <h3 className="rate-text">Gift Card Rate Calculator</h3>
                </div>

                  
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
                                    handleChange(e)
                                    handleSubCategory(e.currentTarget.value);
                                  }}
                                 onBlur={handleBlur}
                                 className="form-control select-style" 
                                 id="giftname">
                                    <option defaultValue="" >Select</option>
                                    {category.map((opt, index) => {
                                            return <option key={index} value={opt._id}>{opt.categoryname}</option>
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
                                            return <option key={index} value={opt._id}>{opt.subcategoryname}</option>
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
                                placeholder="Enter Gift Card Amount"
                                type="text"
                                />
                                <small style={{ color: "#dc3545" }}>
                                  {touched.amount && errors.amount}
                              </small>
                            </div>
                        </div>

                        <div className="col-lg-6">
                            <div className="form-group mt-lg-3 mt-0">
                              <label htmlFor="category">You Get</label>
                              <input
                                className="form-control input-style"
                                style={{color: '#2C3A50', fontWeight: 'bold'}}
                                placeholder="0.00"
                                disabled
                                value={amount.toFixed(2)}
                                type="text"
                                />
                            </div>
                        </div>
                    </div>

                    <div className="text-center mt-3">
                     <button 
                      type="submit"
                      disabled={isSubmitting}
                     className="btn btn-pinkTacit calc-size">Calculate</button>
                    </div>
                 </Form>
                  )}

                </Formik>

            
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
        calcRate: (amount, id) => dispatch(getRateValue(amount, id))
    }
}
 
export default connect(mapStateToProps, mapDispatchToProps)(RateCalculator);