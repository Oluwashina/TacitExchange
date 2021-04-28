import React, {useState, useEffect} from 'react';
import Sidebar from '../../../components/Sidebar/Sidebar';
import {Form, Formik} from 'formik'
import {addGiftCardValidator} from '../../../validationSchema/validator'
import {connect} from 'react-redux'
import { getRateCategory } from '../../../store/actions/rate';

const UpdateRates = (props) => {

    const {fetchCategory, category, card} = props

    const [newCategory, setNewCategory] = useState('')

    useEffect(() =>{
        fetchCategory()
  }, [fetchCategory])

  const handleSubmit = async (values, setSubmitting) =>{
    console.log(values)
  }

  const handleCategory = (val ) =>{
    if(val === 'other'){
        setNewCategory('Others')
    }
    else{
        setNewCategory('')
    }
}

    return (
        <>
            <Sidebar />
            <div className="main">
            <div className="contain">

                
            <div className="mb-5">    
                

                {/* add a products */}
                <div className="row justify-content-center">
                    <div className="col-lg-6">

                    <div className="mt-lg-5 mt-4 text-center">
                            <h4 style={{fontWeight: 'bold'}}>Edit Giftcard</h4>
                     </div>

                    <Formik
                onSubmit={(values, {setSubmitting, resetForm, setFieldValue}) =>
                    handleSubmit(values, setSubmitting, resetForm, setFieldValue)
                    }
                validationSchema={addGiftCardValidator}
                initialValues={{ category:  "", subcategory: card.subcategoryname ? card.subcategoryname : "",
                 newcategory: "", minAmount: card.minimumAmount ? card.minimumAmount : "", 
                 maxAmount: card.maximumAmount ? card.maximumAmount : "", rate: card.nairarate ? card.nairarate : "",
                  terms: card.termsandconditions ? card.termsandconditions : ""}}
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
                        
                             {/* category */}
                            <div className="form-group mt-4">
                              <label htmlFor="category">Category</label>
                              <select
                                 name="category"
                                 values={values.category}
                                 onChange={(e) => {
                                    handleChange(e)
                                    handleCategory(e.currentTarget.value);
                                  }}
                                    onBlur={handleBlur}
                                    className="form-control select-style" 
                                    id="category">
                                    <option defaultValue="" >--Select--</option>
                                    {category.map((opt, index) => {
                                            return <option key={index}
                                             value={opt.id}>{opt.categoryname}</option>
                                        })}
                                    <option value="other">Others</option>
                                   
                                </select>
                                <small style={{ color: "#dc3545" }}>
                                  {touched.category && errors.category}
                              </small>
                            </div>

                            {/* New Category */}
                            {
                                newCategory !== '' ?
                                    <div className="form-group">
                                    <label htmlFor="subcategory">New Category</label>
                                    <input className="form-control input-style"
                                    type="text"
                                    id="newcategory"
                                    value={values.newcategory}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    placeholder="" />
                                    <small style={{ color: "#dc3545" }}>
                                        {touched.newcategory && errors.newcategory}
                                    </small>
                                 </div>
                                 :
                                 ''
                            }
                            

                            {/* Subcategory */}
                            <div className="form-group">
                              <label htmlFor="subcategory">Enter SubCategory</label>
                              <input className="form-control input-style"
                              type="text"
                              id="subcategory"
                              value={values.subcategory}
                              onChange={handleChange}
                              onBlur={handleBlur}
                              placeholder="" />
                               <small style={{ color: "#dc3545" }}>
                                  {touched.subcategory && errors.subcategory}
                              </small>
                            </div>

               
                            {/* Minimum Amount */}
                            <div className="form-group">
                              <label htmlFor="minAmount">Minimum Amount</label>
                              <input className="form-control input-style"
                              type="tel"
                              id="minAmount"
                              value={values.minAmount}
                              onChange={handleChange}
                              onBlur={handleBlur}
                              placeholder="" />
                               <small style={{ color: "#dc3545" }}>
                                  {touched.minAmount && errors.minAmount}
                              </small>
                            </div>

                            
                             {/* Maximum Amount */}
                             <div className="form-group">
                              <label htmlFor="maxAmount">Maximum Amount</label>
                              <input className="form-control input-style"
                              type="tel"
                              id="maxAmount"
                              value={values.maxAmount}
                              onChange={handleChange}
                              onBlur={handleBlur}
                              placeholder="" />
                               <small style={{ color: "#dc3545" }}>
                                  {touched.maxAmount && errors.maxAmount}
                              </small>
                            </div>

                            {/* rate */}
                            <div className="form-group">
                              <label htmlFor="rate">Rate(Naira)</label>
                              <input className="form-control input-style"
                              type="tel"
                              id="rate"
                              value={values.rate}
                              onChange={handleChange}
                              onBlur={handleBlur}
                              placeholder="" />
                               <small style={{ color: "#dc3545" }}>
                                  {touched.rate && errors.rate}
                              </small>
                            </div>




                             {/* Terms and conditions */}
                             <div className="form-group">
                              <label htmlFor="terms">Terms and Conditions</label>
                              <textarea className="form-control input-style"
                              id="terms"
                              rows="5"
                              style={{resize: 'none'}}
                              value={values.terms}
                              onChange={handleChange}
                              onBlur={handleBlur}
                              placeholder="" />
                               <small style={{ color: "#dc3545" }}>
                                  {touched.terms && errors.terms}
                              </small>
                            </div>

                            
                        <div className="text-center">
                            <button
                            type="submit"
                            disabled={isSubmitting}
                             className="btn btn-pinkTacit mt-3">Update Giftcard</button>
                         </div>
                      </Form>
                  )}

              </Formik>

                    </div>
                </div> 

            </div> 

             </div>
            </div>
        </>
     );
}

const mapStateToProps = (state, ownProps) =>{
    const id = ownProps.match.params.id
    const cards = state.admin.giftcards
    const card = cards.find(val => val.id === id);
    return{
        category: state.rate.category,
        card: card,
        id: id
    }
}

const mapDispatchToProps = (dispatch) =>{
    return{
        fetchCategory: () => dispatch(getRateCategory()),
    }
}
 
export default connect(mapStateToProps, mapDispatchToProps)(UpdateRates);