import React from 'react';
import Navbar from '../../components/HomeComponents/Navbar';
import './faq.css'
import FaqImage from '../../assets/images/faqPic.svg'

const PrivacyPage = () => {
    return ( 
        <>
        <Navbar />
        <div className="container" style={{marginTop: '120px'}}>

            <div className="faqDiv">

                {/* faq image */}
                <div className="faqImg">
                    <img src={FaqImage} style={{maxWidth: '100%', height: '120px'}} alt="faqimage" />
                    <div>
                        <h3>Privacy</h3>
                    </div>
                </div>

                <div className="text-center">
                    <h4 style={{fontWeight: 'bold'}}>Privacy Policy</h4>
                   
                </div>

              

            </div>

        </div>

        </>
     );
}
 
export default PrivacyPage;