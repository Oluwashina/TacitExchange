import React from 'react';
// import image1 from '../../assets/images/features.svg'
import Support from '../../assets/images/support.svg'
import Payment from '../../assets/images/secure-payment.svg'
import startUp from '../../assets/images/startup.svg'


const Features = () => {
    return (
        <>
            <div className="features">
                <div className="">

                    <div className="row">

                        <div className="col-lg-12">

                            <div className="text-center mt-lg-5 mt-5">
                                <h4 className="rate-text">We Always Stand By Our Word</h4>
                            </div>

                        {/* features list */}
                            <div className="row text-center mt-5">
                                <div className="col-lg-4">
                                    <div>
                                        <img src={startUp} className="" width="100" height="100" alt="secure-payment" />
                                    </div>
                                    <div className="mt-5">
                                        <h5 className="rate-text">Instant Payment</h5>
                                        <p style={{fontSize: 15}}>Timely payment on all transactions</p>
                                    </div>
                                </div>

                                <div className="col-lg-4 mt-lg-0 mt-3">
                                    <div>
                                        <img src={Payment} className="" width="100" height="100" alt="secure-payment" />
                                    </div>
                                    <div className="mt-5">
                                        <h5 className="rate-text">Trust and Secure</h5>
                                        <p style={{fontSize: 15}}>100% Security on all transaction</p>
                                    </div>
                                </div>

                                <div className="col-lg-4 mt-lg-0 mt-3">
                                    <div>
                                        <img src={Support} className="" width="100" height="100" alt="secure-payment" />
                                    </div>
                                    <div className="mt-5">
                                        <h5 className="rate-text">24/7 Service</h5>
                                        <p style={{fontSize: 15}}>We are available all day, everyday</p>
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
 
export default Features;