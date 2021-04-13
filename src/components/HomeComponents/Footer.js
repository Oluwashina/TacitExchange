import React from 'react';
import Logo from '../../assets/images/logo.png'
import {Link} from 'react-router-dom'

const Footer = () => {
    return ( 
        <>
            <div className="footer">
                <div className="row">

                    <div className="col-lg-6">
                        {/* logo */}
                        <div>
                            <img src={Logo} className="img-fluid" alt="logo" />
                        </div>
                        <p className="mt-3 mb-0" style={{fontSize: 14}}>Fusce ut elit aliquet, fermentum leo vel, tempus nunc. <br /> Fusce eu rhoncus augue. Fusce vel metus pharetra, fermentum</p>
                        {/* brands */}
                        <div className="mt-3" style={{display: 'flex'}}>
                            <div>
                                <a target="_blank" rel="noopener noreferrer" href="https://instagram.com/tacit" style={{color: 'white'}}><i className="fab fa-google-plus"></i></a>
                            </div>
                            <div className="ml-3">
                                <a target="_blank" rel="noopener noreferrer" href="https://facebook.com/tacit" style={{color: 'white'}}><i className="fab fa-facebook"></i></a>
                            </div>
                            <div className="ml-3">
                                <a target="_blank" rel="noopener noreferrer" href="https://twitter.com/tacit" style={{color: 'white'}}><i className="fab fa-twitter"></i></a>
                            </div>
                            <div className="ml-3">
                                <a target="_blank" rel="noopener noreferrer" href="https://instagram.com/tacit" style={{color: 'white'}}><i className="fab fa-instagram"></i></a>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-2 mt-lg-0 mt-3">
                        <h6>TacitExchange Links</h6>
                        <ul className="mt-4 footer-links">
                            <li className="mt-3"><Link to="/">Home</Link></li>
                            <li className="mt-2"><Link to="/" >Support</Link></li>
                            <li className="mt-2"><Link to="/" >Contact US</Link></li>
                            <li className="mt-2"><Link to="/faq">Rate Calculator</Link></li>
                        </ul>
                    </div>

                    <div className="col-lg-2 mt-lg-0 mt-3">
                        <h6>Legal</h6>
                        <ul className="mt-4 footer-links">
                            <li className="mt-3"><Link to="/">Terms and Conditions</Link></li>
                            <li className="mt-2"><Link to="/" >Privacy Policy</Link></li>
                        </ul>
                    </div>

                    <div className="col-lg-2 mt-lg-0 mt-3">
                        <h6>Contact Us</h6>
                        <div className="mt-4">
                            <p className="mb-0" style={{fontSize: 14}}>(+234) 137632128</p>
                        </div>
                        <div className="mt-2">
                            <p className="mb-0" style={{fontSize: 14}}>Support@tacitexchange.com</p>
                        </div>
                        <div className="mt-2">
                            <p className="mb-0" style={{fontSize: 14}}>No 89B Lekki Phase 1, Lagos</p>
                        </div>
                    </div>

                    

                </div>

                <div className="text-center mt-5">
                    <p className="text-white"  style={{fontSize: 14, opacity: '0.4'}}>&copy; Copyright { new Date().getFullYear()} tacitexchange.com. All Rights Reserved.</p>
                </div>
            </div>
        </>
     );
}
 
export default Footer;
