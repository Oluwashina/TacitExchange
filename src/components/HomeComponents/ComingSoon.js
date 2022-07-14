import React from 'react';
import phone from '../../assets/images/iphone12.png'


const ComingSoonSection = () => {
    return ( 
        <>
            <div className='comingBg'>

                <div className='comingDiv'>
                    <div className='comingText'>
                        <h4 className='comingTitle'>Coming Soon</h4>
                        <p className='comingSubtitle mt-3'>
                          We are delighted to let you know that our all new 
                            mobile application, will be launched soon for both 
                            iphone and android users.
                        </p>
                    </div>
                    <div className='comingImg mt-4 mt-lg-0'>
                        <img src={phone} alt="phone" className='img-fluid' />
                    </div>
                </div>

            </div>
        </>
     );
}
 
export default ComingSoonSection;