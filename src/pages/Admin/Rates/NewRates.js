import React, {useEffect, useState} from 'react';
import Sidebar from '../../../components/Sidebar/Sidebar';
import {Form, Formik} from 'formik'
import {addGiftCardValidator} from '../../../validationSchema/validator'
import {connect} from 'react-redux'
import { getRateCategory } from '../../../store/actions/rate';
import {AddGiftCard, AddNewGiftCard} from '../../../store/actions/admin'
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import cogoToast from 'cogo-toast';


const AdminNewRates = (props) => {

    const {fetchCategory, category, addRate, addNewRate, userRole} = props

    const [newCategory, setNewCategory] = useState('')

    const [value, setValue] = useState('');

    useEffect(() =>{
        fetchCategory()
  }, [fetchCategory])

    const handleSubmit = async (values, setSubmitting) =>{
        console.log(values)
        // api call to add new giftcards
        // check if it is a new category or existing
        if(values.newcategory === ''){
            if(value === ''){
                cogoToast.info('Terms and Conditions is required')
            }
            else{
                let resp = {
                    categoryId : values.category,
                    subcategoryname: values.subcategory,
                    termsandconditions: value,
                    nairarate: values.rate,
                    btcrate: "0",
                    cardapproveltime: "0",
                    minimumAmount:  values.minAmount,
                    maximumAmount: values.maxAmount
                }
                // make api call to add to an Existing category a giftcard
               await addRate(resp)
      
            }
         }
        if(values.category === 'other'){
            if(value === ''){
                cogoToast.info('Terms and Conditions is required')
            }
            else{    
                let result = {
                    categoryId : "",
                    categoryname: values.newcategory,
                    subcategoryname: values.subcategory,
                    termsandconditions: value,
                    nairarate: values.rate,
                    btcrate: "0",
                    cardapproveltime: "0",
                    minimumAmount:  values.minAmount,
                    maximumAmount: values.maxAmount
                }
                // make api call to add a new giftcard entirely with a new category
            await addNewRate(result)
            }
        }
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
        <Sidebar/>
        <div className='main'>
            <div className="contain">

            <div className="mb-5">    
                

                {/* add a products */}
                <div className="row justify-content-center">
                    <div className="col-lg-6">

                    <div className="mt-lg-5 mt-4 text-center">
                            <h4 style={{fontWeight: 'bold'}}>Add New Giftcard</h4>
                     </div>

                    <Formik
                onSubmit={(values, {setSubmitting, resetForm, setFieldValue}) =>
                    handleSubmit(values, setSubmitting, resetForm, setFieldValue)
                    }
                validationSchema={addGiftCardValidator}
                initialValues={{ category: "", subcategory: "", newcategory: "", minAmount: "", maxAmount: "", rate: "", terms: value ? value : ""}}
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
                                            return <option key={index} value={opt.id}>{opt.categoryname}</option>
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

                            <div className="form-group">
                              <label htmlFor="terms">Terms and Conditions</label>
                            <CKEditor
                                editor={ ClassicEditor }
                                data={values.terms}
                                onReady={ editor => {
                                    // You can store the "editor" and use when it is needed.
                                    console.log( 'Editor is ready to use!', editor );
                                } }
                                onChange={ ( event, editor ) => {
                                    const data = editor.getData();
                                    setValue(data)
                                    console.log( { event, editor, data } );
                                } }
                               
                            /> 
                            <small style={{ color: "#dc3545" }}>
                                  {value === '' ? 'Terms and Conditions is required' : ''}
                              </small>    
                            </div>



                             

                            
                        <div className="text-center">
                            <button
                            type="submit"
                            disabled={isSubmitting || userRole === 'SubAdmin'}
                             className="btn btn-pinkTacit mt-3">Add Giftcard</button>
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

const mapStateToProps = (state) =>{
    return{
        category: state.rate.category,
        userRole: state.auth.role
    }
}

const mapDispatchToProps = (dispatch) =>{
    return{
        fetchCategory: () => dispatch(getRateCategory()),
        addRate: (val) => dispatch(AddGiftCard(val)),
        addNewRate: (val) => dispatch(AddNewGiftCard(val))
    }
}
 
export default connect(mapStateToProps, mapDispatchToProps)(AdminNewRates);