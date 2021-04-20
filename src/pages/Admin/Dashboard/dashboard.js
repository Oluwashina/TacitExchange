import React from 'react';
import Charts from '../../../components/Charts/Chart';
import Sidebar from '../../../components/Sidebar/Sidebar';
import './dashboard.css'


const AdminDashboard = () => {

    return ( 
        <>
            <Sidebar />
            <div className="main">
                <div className="contain">

                    {/* overview count */}
                    <div className="row mt-3">

                            <div className="col-lg-3">
                                {/* cc */}
                                <div className="dash-div">

                                    <div>
                                        <p className="mb-0" style={{color: '#0898D7'}}>Pending Payment</p>
                                    </div>

                                    <div className="mt-4">
                                        <h5 style={{color: '#dc3545'}}>50</h5>
                                    </div>

                                </div>
                            </div>

                            <div className="col-lg-3">
                                {/* trades count */}
                                <div className="dash-div">

                                    <div>
                                        <p className="mb-0" style={{color: '#0898D7'}}>Completed Trades</p>
                                    </div>

                                    <div className="mt-4">
                                        <h5 style={{color: '#13AA52'}}>50,000</h5>
                                    </div>

                                </div>
                            </div>
                            <div className="col-lg-3">
                                {/* Users */}
                            <div className="dash-div">

                                <div>
                                    <p className="mb-0" style={{color: '#0898D7'}}>Users</p>
                                </div>

                                <div className="mt-4">
                                    <h5>50</h5>
                                </div>

                                </div>
                            </div>
                            <div className="col-lg-3">
                                    {/* hhh */}
                          <div className="dash-div">

                                <div>
                                    <p className="mb-0" style={{color: '#0898D7'}}>Trades</p>
                                </div>

                                <div className="mt-4">
                                    <h5>50,000</h5>
                                </div>

                                </div>
                            </div>
                    </div>

                    {/* end of overview count */}

                                
                    {/* charts display */}

                    <div className="mt-4">
                        <Charts />
                    </div>
                    
                </div>
            </div>
        </>
     );
}
 
export default AdminDashboard;