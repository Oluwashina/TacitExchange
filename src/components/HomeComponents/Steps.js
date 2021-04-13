import React from 'react';


const Steps = () => {
    return ( 
        <>
            <div className="steps">
   
                <div className="text-center">
                    <h3 className="steps-head">Follow This Steps To Exchange 
                        <br/> Your Gift Cards</h3>
                </div>

                <div className="row mt-5">
                    <div className="col-lg-6">
                        <div style={{display: 'flex'}}>
                            <div>
                                <h2 style={{color: '#0898D7', fontWeight: 'bold'}}>01</h2>
                            </div>
                            <div className="ml-4">
                                <h5 className="rate-text mt-1">Register An Account</h5>
                                <p className="steps-p">Type in your gift card's corresponding merchant and current balance. 
                                    Need help calculating your gift card's current exchange value?
                                    Use the Exchange Rate Calculator Here</p>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-6">
                        <div style={{display: 'flex'}}>
                            <div>
                                <h2 style={{color: '#0898D7', fontWeight: 'bold'}}>02</h2>
                            </div>
                            <div className="ml-4">
                                <h5 className="rate-text mt-1">Enter Your Cards</h5>
                                <p className="steps-p">Type in your gift card's corresponding merchant and current balance. 
                                    Need help calculating your gift card's current exchange value?
                                    Use the Exchange Rate Calculator Here</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row mt-lg-5 mt-0">
                    <div className="col-lg-6">
                        <div style={{display: 'flex'}}>
                            <div>
                                <h2 style={{color: '#0898D7', fontWeight: 'bold'}}>03</h2>
                            </div>
                            <div className="ml-4">
                                <h5 className="rate-text mt-1">Accept Our Offer</h5>
                                <p className="steps-p">Type in your gift card's corresponding merchant and current balance. 
                                    Need help calculating your gift card's current exchange value?
                                    Use the Exchange Rate Calculator Here</p>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-6">
                        <div style={{display: 'flex'}}>
                            <div>
                                <h2 style={{color: '#0898D7', fontWeight: 'bold'}}>04</h2>
                            </div>
                            <div className="ml-4">
                                <h5 className="rate-text mt-1">Receive Your Cash</h5>
                                <p className="steps-p">Type in your gift card's corresponding merchant and current balance. 
                                    Need help calculating your gift card's current exchange value?
                                    Use the Exchange Rate Calculator Here</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="text-center mt-4">
                     <button className="btn btn-pinkTacit ">Register Now</button>
                     <div className="mt-2">
                         <p style={{color: '#2C3A50', fontSize: 14, fontWeight: 'bold'}}>To Start Earning</p>
                     </div>
                </div>

            </div>
        </>
     );
}
 
export default Steps;
