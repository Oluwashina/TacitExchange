import React from 'react';
import user1 from '../../assets/images/user1.png'
import user2 from '../../assets/images/user2.png'
import user3 from '../../assets/images/user3.png'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const Testimonials = () => {
    const settings = {
        dots:  true,
        infinite: false,
        initialSlide: 0,
        slidesToShow: 2,
        slidesToScroll: 2,
        speed: 500,
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                infinite: true,
                dots: true
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                initialSlide: 1
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
          ]
      };

    return ( 
        <>  
            <div className="testimonials">

                <div className="text-center">
                    <h3 className="steps-head">What People Are Saying About Us</h3>
                </div>

                {/* carousels for testimonials layout */}
            <div className="container-fluid">
                <Slider {...settings}>

                    <div className="testimonials-div mt-4 mt-lg-5">
                        {/* image */}
                        <div>
                            <img src={user1} className="" alt="user1" style={{borderRadius: '50%', width: '100px', height: '100px'}} />
                        </div>
                        <div className="mt-3">
                            <h6 className="rate-text">Cameron Williamson</h6>
                        </div>
                        <div className="mt-3">
                            <p className="mb-0">
                            Thanks to TACITEXCHANGE for serving my business, have lost over 1000usd 
                            to fraudsters on the cause of exchanging my iTunes cards to Naira. Now my
                            mind is at test as I know where to exchange gifts cards to naira without risk. 
                            I can't thank you enough.
                            </p>
                        </div>
                     </div>

                    {/* second carousel */}
                     <div className="testimonials-div mt-4 mt-lg-5">
                        {/* image */}
                        <div>
                            <img src={user2} className="" alt="user1" style={{borderRadius: '50%', width: '100px', height: '100px'}} />
                        </div>
                        <div className="mt-3">
                            <h6 className="rate-text">Esther Howard</h6>
                        </div>
                        <div className="mt-3">
                            <p className="mb-0">
                            Thanks to TACITEXCHANGE for serving my business, have lost over 1000usd 
                            to fraudsters on the cause of exchanging my iTunes cards to Naira. Now my
                            mind is at test as I know where to exchange gifts cards to naira without risk. 
                            I can't thank you enough.
                            </p>
                        </div>
                     </div>

                     {/* third carousel */}
                     <div className="testimonials-div mt-4 mt-lg-5" >
                        {/* image */}
                        <div>
                            <img src={user3} className="" alt="user1" style={{borderRadius: '50%', width: '100px', height: '100px'}} />
                        </div>
                        <div className="mt-3">
                            <h6 className="rate-text">Jerome Bell</h6>
                        </div>
                        <div className="mt-3">
                            <p className="mb-0">
                            Thanks to TACITEXCHANGE for serving my business, have lost over 1000usd 
                            to fraudsters on the cause of exchanging my iTunes cards to Naira. Now my
                            mind is at test as I know where to exchange gifts cards to naira without risk. 
                            I can't thank you enough.
                            </p>
                        </div>
                     </div>


                </Slider>
            </div>

            </div>

        </>
     );
}
 
export default Testimonials
