import React from 'react';
import {connect} from 'react-redux'
import Navbar from '../../components/HomeComponents/Navbar';
import Footer from '../../components/HomeComponents/Footer';
// import { useLocation } from "react-router-dom";

const VerifyEmail = (props) => {    

    // const search = useLocation().search;

    // const {verify} = props

//     useEffect(() =>{
//         const code = new URLSearchParams(search).get("code");
//         verify(code)
//   }, [verify, search])


    return ( 
        <>
        <Navbar />
        <div class="container" style={{marginTop: 150}}>
        <div class="row justify-content-center">
            <div class="col-lg-6">
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
     );
}

const mapStateToProps =(state) =>{
    return{

    }
}

const mapDispatchToProps = (dispatch) =>{
    return{

    }
}
 
export default connect(mapStateToProps, mapDispatchToProps)(VerifyEmail);