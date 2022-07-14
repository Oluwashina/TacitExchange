import React from 'react';
import bills from '../../assets/images/bills.svg'


const TopUpSection = () => {
    return ( 
        <>
             <div className='topUpDiv'>

                <div className='row align-items-center'>
                    <div className='col-lg-6'>
                        <div className=''>
                            <h4 className='topUpHeading'>Seamless Top Up</h4>
                                <p className='mt-3 topUpSubtitle'>
                                Easily recharge your airtime, purchase Electricity,
                                Tv subscriptions and Pay all your Bills without 
                                stress or hazzles.
                                </p>
                        </div>
                    </div>

                    <div className='col-lg-6'>
                         <div className='mt-4 mt-lg-0'>
                            <img src={bills} className='img-fluid' alt='bills' />
                        </div>
                    </div>
                </div> 

               

             </div>   
        </>
     );
}
 
export default TopUpSection;