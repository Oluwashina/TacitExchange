import React from 'react';
import GiftCards from '../../components/HomeComponents/Cards';
import Features from '../../components/HomeComponents/Features';
import Footer from '../../components/HomeComponents/Footer';
import HeroSection from '../../components/HomeComponents/Hero';
import RateCalculator from '../../components/HomeComponents/Rate';
import Steps from '../../components/HomeComponents/Steps';
import Testimonials from '../../components/HomeComponents/Testimonials';


const HomePage = () => {
    return ( 
        <>     
        <HeroSection />
        <RateCalculator />
        <Features />
        <GiftCards />
        <Steps />
        <Testimonials />
        <Footer />
            
        </>
     );
}
 
export default HomePage;