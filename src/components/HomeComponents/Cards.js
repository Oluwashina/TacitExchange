import React from 'react';
import Amazon from '../../assets/images/Amazon.svg'
import AppleItunes from '../../assets/images/appItunes.svg'
import Steam from '../../assets/images/Steam.svg'
import Ebay from '../../assets/images/ebay.svg'
import Itunes from '../../assets/images/itunes.svg'
import Walmart from '../../assets/images/walmart.svg'
import Nordstorm from '../../assets/images/nordstrom.svg'
import googleplay from '../../assets/images/Google Play.svg'
import macy from '../../assets/images/macy.svg'
import nike from '../../assets/images/nike.svg'
import Vanilla from '../../assets/images/onevanilla.png'
import Others from '../../assets/images/Others.svg'

const GiftCards = () => {
    return ( 
        <>  
         <div className="cards">
              <div className="text-center">
                    <h3 className="steps-head">Featured Gift Cards We Buy</h3>
                </div>

                {/* first cards */}
                <div className="row mt-5">
                    <div className="col-lg-2 col-6 mb-4">
                        <div>
                            <img src={Amazon} className="img-fluid" alt="giftcards" />
                        </div>
                    </div>

                    <div className="col-lg-2 col-6">
                        <div>
                            <img src={AppleItunes} className="img-fluid" alt="giftcards" />
                        </div>
                    </div>

                    <div className="col-lg-2 col-6 mb-4">
                        <div>
                            <img src={Steam} className="img-fluid" alt="giftcards" />
                        </div>
                    </div>

                    <div className="col-lg-2 col-6">
                        <div>
                            <img src={Ebay} className="img-fluid" alt="giftcards" />
                        </div>
                    </div>
                    <div className="col-lg-2 col-6">
                        <div>
                            <img src={Itunes} className="img-fluid" alt="giftcards" />
                        </div>
                    </div>

                    <div className="col-lg-2 col-6">
                        <div>
                            <img src={Walmart} className="img-fluid" alt="giftcards" />
                        </div>
                    </div>
                </div>

                {/* second cards */}
                <div className="row mt-4 mt-lg-2">
                    <div className="col-lg-2 col-6 mb-4">
                        <div>
                            <img src={Nordstorm} className="img-fluid" alt="giftcards" />
                        </div>
                    </div>

                    <div className="col-lg-2 col-6">
                        <div>
                            <img src={googleplay} className="img-fluid" alt="giftcards" />
                        </div>
                    </div>

                    <div className="col-lg-2 col-6 mb-4">
                        <div>
                            <img src={macy} className="img-fluid" alt="giftcards" />
                        </div>
                    </div>

                    <div className="col-lg-2 col-6">
                        <div>
                            <img src={Vanilla} className="img-fluid" alt="giftcards" />
                        </div>
                    </div>
                    <div className="col-lg-2 col-6">
                        <div>
                            <img src={nike} className="img-fluid" alt="giftcards" />
                        </div>
                    </div>

                    <div className="col-lg-2 col-6">
                        <div>
                            <img src={Others} className="img-fluid" alt="giftcards" />
                        </div>
                    </div>
                </div>

        </div>

        </>
     );
}
 
export default GiftCards;