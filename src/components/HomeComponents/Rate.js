import React from 'react';

const RateCalculator = () => {
    return ( 
        <>
            <div className="rate">
                <div className="">
                    <h3 className="rate-text">Gift Card Rate Calculator</h3>

                    <div className="row">
                        <div className="col-lg-6">
                             <div className="form-group mt-lg-3 mt-3">
                              <label htmlFor="category">Gift Card Name</label>
                                <select class="form-control select-style" id="category">
                                    <option selected value="DEBIT_WALLET" disabled>Select</option>
                                    <option value="OK_SUCCESSFUL">Successful</option>
                                    <option value="CREDIT_WALLET">Credit Wallet</option>
                                </select>
                            </div>
                        </div>

                        <div className="col-lg-6">
                            <div className="form-group mt-lg-3 mt-0">
                              <label htmlFor="category">Gift Card Category</label>
                                <select class="form-control select-style" id="category">
                                    <option selected value="DEBIT_WALLET">Select</option>
                                    <option value="OK_SUCCESSFUL">Successful</option>
                                    <option value="CREDIT_WALLET">Credit Wallet</option>
                                </select>
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-lg-6">
                            <div className="form-group mt-lg-3 mt-0">
                                <label htmlFor="email">Amount</label>
                                <input
                                className="form-control input-style"
                                placeholder="Enter Gift Card Amount"
                                type="text"
                                />
                            </div>
                        </div>

                        <div className="col-lg-6">
                            <div className="form-group mt-lg-3 mt-0">
                              <label htmlFor="category">You Get</label>
                                <select class="form-control select-style" id="category">
                                    <option selected value="DEBIT_WALLET" disabled>Select</option>
                                    <option value="OK_SUCCESSFUL">Successful</option>
                                    <option value="CREDIT_WALLET">Credit Wallet</option>
                                </select>
                            </div>
                        </div>
                    </div>

                    <div className="text-center mt-3">
                     <button className="btn btn-pinkTacit calc-size">Calculate</button>
                    </div>

                </div>
            </div>
        </>
     );
}
 
export default RateCalculator;