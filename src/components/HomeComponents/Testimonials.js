import React from 'react';
import user1 from '../../assets/images/userProfile.svg'
import user2 from '../../assets/images/userProfile.svg'
import user3 from '../../assets/images/userProfile.svg'
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
                            <img src={user1} className="" alt="user1" style={{borderRadius: '50%', width: '50px', height: '50px'}} />
                        </div>
                        <div className="mt-3">
                            <h6 className="rate-text">Olalekan</h6>
                        </div>
                        <div className="mt-3">
                            <p className="mb-0">
                            I tried Tacit Exchange with a google play card worth $100 for the first time in May 2020. Though I was in doubt if it really worked because their rate was ridiculously good. My card was exchanged in a flash and I got my payment instantly, since then I have not looked back to count a regret
                            </p>
                        </div>
                     </div>

                    {/* second carousel */}
                     <div className="testimonials-div mt-4 mt-lg-5">
                        {/* image */}
                        <div>
                            <img src={user2} className="" alt="user1" style={{borderRadius: '50%', width: '50px', height: '50px'}} />
                        </div>
                        <div className="mt-3">
                            <h6 className="rate-text">Ben Okafor</h6>
                        </div>
                        <div className="mt-3">
                            <p className="mb-0">
                            Tacit exchange is trustworthy, I have been trading with them for a while now, I don’t look elsewhere because they usually have the best rate in the market. Big ups!
                            </p>
                        </div>
                     </div>

                     {/* third carousel */}
                     <div className="testimonials-div mt-4 mt-lg-5" >
                        {/* image */}
                        <div>
                            <img src={user3} className="" alt="user1" style={{borderRadius: '50%', width: '50px', height: '50px'}} />
                        </div>
                        <div className="mt-3">
                            <h6 className="rate-text">Lola Agbaje</h6>
                        </div>
                        <div className="mt-3">
                            <p className="mb-0">
                            Whenever I have gift cards that I am not willing to spend, I come here to cash it and they are fast and reliable.
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
