import React, {useEffect} from 'react';
import {connect} from 'react-redux'
import Navbar from '../../components/HomeComponents/Navbar';
import Footer from '../../components/HomeComponents/Footer';
import { getEmailVerify } from '../../store/actions/auth';



const VerifyEmail = (props) => {    

    const {verify, code, msg} = props


    const {link} = props
    

    useEffect(() =>{
      verify(code) 
    }, [verify, code])
    

if(link) {
    return ( 
        <>
        <Navbar />
        <div className="container" style={{marginTop: 150}}>
        <div className="row justify-content-center">
            <div className="col-lg-6">
                <div style={{background: '#fff', padding: '20px 30px 50px 30px', boxShadow: '0 2px 10px rgb(0 0 0 / 10%)', borderRadius: '5px'}}>

                    <div className="text-center">
                        <i className="mdi mdi-email" style={{fontSize: 100, color:'#0898D7'}}></i>
                    </div>
                    
                    <div className="text-center mt-1">
                        <h5 style={{fontWeight: 'bold'}}>Email Verification Failed</h5>
                    </div>

                    <div className="mt-2 text-center">
                        <p className="mb-0">Oops, {msg}!</p>
                    </div>

                </div>
            </div>
        </div>
     </div>

        <div style={{marginTop: 150}}>
            <Footer />
        </div>
        </>
     );
  }

  return (
      <>
    <Navbar />
    <div className="container" style={{marginTop: 150}}>
    <div className="row justify-content-center">
        <div className="col-lg-6">
            <div style={{background: '#fff', padding: '20px 30px 50px 30px', boxShadow: '0 2px 10px rgb(0 0 0 / 10%)', borderRadius: '5px'}}>

                <div className="text-center">
                    <i className="mdi mdi-email" style={{fontSize: 100, color:'#0898D7'}}></i>
                </div>
                
                <div className="text-center mt-1">
                    <h5 style={{fontWeight: 'bold'}}>Email Verified Successfully</h5>
                </div>

                <div className="mt-2 text-center">
                    <p className="mb-0">Volla, Thanks for choosing Tacit Exchange!</p>
                </div>

            </div>
        </div>
    </div>
 </div>

    <div style={{marginTop: 150}}>
        <Footer />
    </div>
    </>
  )
}

const mapStateToProps =(state, ownProps) =>{
    let code = ownProps.match.params.code
    return{
        link: state.auth.validlink,
        msg: state.auth.email_msg,
        code: code
    }
}

const mapDispatchToProps = (dispatch) =>{
    return{
        verify: (val) => dispatch(getEmailVerify(val))
    }
}
 
export default connect(mapStateToProps, mapDispatchToProps)(VerifyEmail);