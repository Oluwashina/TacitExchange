import React from 'react';
import UserSideBar from '../../../components/UserSideBar/Sidebar';
import airtime_icon from '../../../assets/images/icons/plane-tickets.svg'
import electricity_icon from '../../../assets/images/icons/electricity.svg'
import tv_icon from '../../../assets/images/icons/tv-screen.svg'
import buydata_icon from '../../../assets/images/icons/shopping-cart.svg'
import {Link} from 'react-router-dom'


const UtilitiesPage = () => {
    return ( 
        <>
        <UserSideBar title="My Utility" />
        <div className="usermain">
            <div className="contain" style={{width: '100%', paddingLeft: '20px', paddingRight: '20px'}}>

             <div className='row mt-4'>

                    <div className='col-lg-3 mb-4 mb-lg-0'>

                        <Link to="/utilities/buyairtime"  className='service_card' style={{textDecoration: 'none'}}>
                            <div className='service_icon'>
                                <img src={airtime_icon} alt="airtime" />
                            </div>
                            <div>
                                <h6 className='service_title'>Buy Airtime</h6>
                                <p className='service_subtitle'>Tap to top up airtime</p>
                            </div>
                        </Link>

                    </div>

                    <div className='col-lg-3 mb-4 mb-lg-0'>

                    <Link to="/utilities/buyelectricity" className='service_card' style={{textDecoration: 'none'}}>
                        <div className='service_icon electricity'>
                            <img src={electricity_icon} alt="airtime" />
                        </div>
                        <div>
                            <h6 className='service_title'>Buy Electricity</h6>
                            <p className='service_subtitle'>Easily pay your electric bills</p>
                           
                        </div>
                    </Link>

                    </div>

                    <div className='col-lg-3 mb-4 mb-lg-0'>

                    <Link to="/utilities/tvsubscription" style={{textDecoration: 'none'}} className='service_card'>
                        <div className='service_icon tv'>
                            <img src={tv_icon} alt="airtime" />
                        </div>
                        <div>
                            <h6 className='service_title'>TV Subscription</h6>
                            <p className='service_subtitle'>Tap to pay your tv subscriptions</p>
                        </div>
                    </Link>

                    </div>

                    <div className='col-lg-3'>

                    <Link to="/utilities/buydata" style={{textDecoration: 'none'}} className='service_card'>
                        <div className='service_icon buydata'>
                            <img src={buydata_icon} alt="airtime" />
                        </div>
                        <div>
                            <h6 className='service_title'>Buy Data</h6>
                            <p className='service_subtitle'>Tap to buy data without stress</p>
                        </div>
                    </Link>

                    </div>

                    </div>


         </div>
        </div>
        </>
     );
}
 
export default UtilitiesPage;