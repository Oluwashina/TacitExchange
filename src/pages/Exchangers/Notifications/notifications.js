import React from 'react';
import UserSideBar from '../../../components/UserSideBar/Sidebar';
import './notifications.css'
import Circle from '../../../assets/images/circle.svg'

const UserNotifications = () => {
    return ( 
        <>
        <UserSideBar />
        <div className="usermain">
            <div className="contain" style={{width: '100%', paddingLeft: '20px', paddingRight: '20px'}}>

                {/* notifications layout */}
                <div className="notify-lay mt-4 mb-5">

                {/* first row */}
                    <div className="row">
                        <div className="col-lg-6 mb-4">

                            <div className="notifyDiv">

                                {/* notify head and date */}
                                <div style={{display: 'flex', justifyContent: 'space-between' }}>
                                    <div style={{display: 'flex'}}>
                                        <div>
                                        <img src={Circle} alt="circle" width="20" height="20" />
                                        </div> 
                                        <div className="ml-2">
                                            <p className="mb-0" style={{color: '#F2F2F2'}}>Trade Card</p>
                                        </div>
                                    </div>
                                    <div>
                                        <p className="mb-0" style={{color: '#F2F2F2', fontSize: 14}}>5 mins ago</p>
                                    </div>

                                </div>

                                {/* notifications message */}
                                <div className="mt-4">
                                    <p className="mb-0" style={{color: '#F2F2F2'}}>You submitted a trade order for sephora gift card</p>
                                </div>

                            </div>

                        </div>

                        {/* second column */}
                        <div className="col-lg-6 mb-4">

                            <div className="notifyDiv">

                                {/* notify head and date */}
                                <div style={{display: 'flex', justifyContent: 'space-between' }}>
                                    <div style={{display: 'flex'}}>
                                        <div>
                                        <img src={Circle} alt="circle" width="20" height="20" />
                                        </div> 
                                        <div className="ml-2">
                                            <p className="mb-0" style={{color: '#F2F2F2'}}>Trade Card</p>
                                        </div>
                                    </div>
                                    <div>
                                        <p className="mb-0" style={{color: '#F2F2F2', fontSize: 14}}>5 mins ago</p>
                                    </div>

                                </div>

                                {/* notifications message */}
                                <div className="mt-4">
                                    <p className="mb-0" style={{color: '#F2F2F2'}}>You submitted a trade order for sephora gift card</p>
                                </div>

                            </div>

                        </div>

                    </div>

                    {/* second row */}
                    <div className="row mt-lg-3 mt-0">
                        <div className="col-lg-6 mb-lg-0 mb-4">

                            <div className="notifyDiv">

                                {/* notify head and date */}
                                <div style={{display: 'flex', justifyContent: 'space-between' }}>
                                    <div style={{display: 'flex'}}>
                                        <div>
                                        <img src={Circle} alt="circle" width="20" height="20" />
                                        </div> 
                                        <div className="ml-2">
                                            <p className="mb-0" style={{color: '#F2F2F2'}}>Account Credited</p>
                                        </div>
                                    </div>
                                    <div>
                                        <p className="mb-0" style={{color: '#F2F2F2', fontSize: 14}}>3 mins ago</p>
                                    </div>

                                </div>

                                {/* notifications message */}
                                <div className="mt-4">
                                    <p className="mb-0" style={{color: '#F2F2F2'}}>Your account was credited by TacitExchange with NGN 24,000 </p>
                                </div>

                            </div>

                        </div>

                        {/* second column */}
                        <div className="col-lg-6">

                            <div className="notifyDiv">

                                {/* notify head and date */}
                                <div style={{display: 'flex', justifyContent: 'space-between' }}>
                                    <div style={{display: 'flex'}}>
                                        <div>
                                        <img src={Circle} alt="circle" width="20" height="20" />
                                        </div> 
                                        <div className="ml-2">
                                            <p className="mb-0" style={{color: '#F2F2F2'}}>Account Credited</p>
                                        </div>
                                    </div>
                                    <div>
                                        <p className="mb-0" style={{color: '#F2F2F2', fontSize: 14}}>3 mins ago</p>
                                    </div>

                                </div>

                                {/* notifications message */}
                                <div className="mt-4">
                                    <p className="mb-0" style={{color: '#F2F2F2'}}>Your account was credited by TacitExchange with NGN 24,000</p>
                                </div>

                            </div>

                        </div>

                    </div>



                </div>
        
            </div>
        </div>

        </>
     );
}
 
export default UserNotifications;