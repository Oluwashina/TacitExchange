import React,{useEffect} from 'react';
import Footer from '../../components/HomeComponents/Footer';
import Navbar from '../../components/HomeComponents/Navbar';
import './contact.css'
import {Form, Formik} from 'formik'
import {contactValidator} from '../../validationSchema/validator'
import ContactImage from '../../assets/images/contact.svg'
import {connect} from 'react-redux'
import {contactSupport} from '../../store/actions/rate'

const ContactPage = (props) => {

    const {support} = props

    useEffect(() =>{
        const script = document.createElement("script")
        script.src = "//code.tidio.co/xk1by3s7lv023iycqvnyon4hvtr9fyo7.js"
        script.async = true
        document.body.appendChild(script)
        document.body.classList.remove('body-hidden');
     }, [])

    const handleSubmit = async (values) =>{
        console.log(values)
        await support(values)
      }

    return ( 
        <>  
        <Navbar/>

            <div className="container" style={{marginTop: '120px'}}>

                <div className="row no-gutters">
                    <div className="col-lg-5">
                        <div className="half-contact" style={{position: 'relative'}}>
                            <h5 style={{fontWeight: 500}}>Contact information</h5>

                            <div className="mt-5">
                                <p className="text-white" style={{fontSize: 14}}>+2348168516315</p>
                                <hr style={{borderTop: '1px solid #eaf0ff'}} />
                                <p className="text-white" style={{fontSize: 14}}>support@tacitexchange.com</p>
                                <hr style={{borderTop: '1px solid #eaf0ff'}} />
                                <p className="text-white" style={{fontSize: 14}}> 
                                No 2b Olayinka Balogun Crescent Magodo phase 2, Lagos</p>
                            </div>

                            <div className="mt-5">
                                <img alt="contact" src={ContactImage} className="img-fluid" />
                            </div>

                        </div>
                    </div>
                    <div className="col-lg-7">
                      <div className="second-contact">
                            <h5 style={{fontWeight: 'bold'}}>Leave Message</h5>
                            <p className="mb-0">Please contact us for official purposes only as a response might take up to 24 hours. For sales and quick enquiries, use the live chat.</p>

                             {/* form login submission */}
                                {/* form submission */}
                            <Formik
                                onSubmit={(values, {setSubmitting}) =>
                                    handleSubmit(values, setSubmitting)
                                    }
                                validationSchema={contactValidator}
                                initialValues={{name: "", email: "", subject: "", message: ""}}
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
                                        <div className="row">
                                            <div className="col-lg-6">

                                                {/* Name */}
                                            <div className="form-group input-container mt-4">
                                                <input
                                                    className="form-control input-style"
                                                    type="text"
                                                    placeholder="Name"
                                                    onBlur={handleBlur}
                                                    onChange={handleChange}
                                                    id="name"
                                                    value={values.name}
                                                />
                                                <small style={{ color: "#dc3545" }}>
                                                        {touched.name && errors.name}
                                                    </small>
                                                </div>

                                            </div>
                                            <div className="col-lg-6">   
                                                {/* Email */}
                                                <div className="form-group input-container mt-4">
                                                <input
                                                    className="form-control input-style"
                                                    type="email"
                                                    placeholder="Email Address"
                                                        id="email"
                                                    value={values.email}
                                                    onChange={handleChange}
                                                    onBlur={handleBlur}
                                                />
                                                <small style={{ color: "#dc3545" }}>
                                                {touched.email && errors.email}
                                            </small>
                                                </div>
                                            </div>
                                        </div>

                                        {/* second row */}
                                        <div className="row">
                                            <div className="col-lg-12">
                                            <div className="form-group input-container mt-2">
                                                <input
                                                    className="form-control input-style"
                                                    type="text"
                                                    placeholder="Subject"
                                                    onBlur={handleBlur}
                                                    onChange={handleChange}
                                                    id="subject"
                                                    value={values.subject}
                                                />
                                                <small style={{ color: "#dc3545" }}>
                                                        {touched.subject && errors.subject}
                                                    </small>
                                                </div>
                                            </div>
                                        </div>

                                        {/* third row */}
                                        <div className="row">
                                            <div className="col-lg-12">
                                            <div className="form-group">
                                                <label htmlFor="password">Message</label>
                                                <textarea className="form-control input-style"
                                                id="message"
                                                rows="4"
                                                style={{resize: 'none'}}
                                                value={values.message}
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                placeholder="Drop a message" />
                                                <small style={{ color: "#dc3545" }}>
                                                    {touched.message && errors.message}
                                                </small>
                                                </div>

                                            </div>
                                        </div>
                                        
                                          
                                            <div className="text-right mt-2">
                                            <button 
                                            type="submit"
                                            disabled={isSubmitting}
                                            className="btn btn-blueTacit">Send Message</button>
                                            </div>
                                            
                                    </Form>
                                )}

                            </Formik>


                      </div>
                    </div>
                </div>


            </div>

            <div style={{marginTop: '150px'}}>
                <Footer />
            </div>

        </>
     );
}

const mapStateToProps = (state) =>{
    return{

    }
}


const mapDispatchToProps = (dispatch) =>{
    return{
        support : (status) => dispatch(contactSupport(status)),
    }
}
 
export default connect(mapStateToProps, mapDispatchToProps)(ContactPage);