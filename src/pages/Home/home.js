import React, {useEffect} from 'react';
import GiftCards from '../../components/HomeComponents/Cards';
import ComingSoonSection from '../../components/HomeComponents/ComingSoon';
import Features from '../../components/HomeComponents/Features';
import Footer from '../../components/HomeComponents/Footer';
import HeroSection from '../../components/HomeComponents/Hero';
import Navbar from '../../components/HomeComponents/Navbar';
import RateCalculator from '../../components/HomeComponents/Rate';
import Steps from '../../components/HomeComponents/Steps';
import Testimonials from '../../components/HomeComponents/Testimonials';
import TopUpSection from '../../components/HomeComponents/TopUp';


const HomePage = () => {

    useEffect(() =>{
        const script = document.createElement("script")
        script.src = "//code.tidio.co/028s1vsxdrzpipc1nqnpnn7sq7fczqjh.js"
        script.async = true
        document.body.appendChild(script)
        document.body.classList.remove('body-hidden');
     }, [])

    return ( 
        <>     
        <Navbar />
        <HeroSection />
        <RateCalculator />
        <Features />
        <TopUpSection  />
        <GiftCards />
        <Steps />
        <Testimonials />
        <ComingSoonSection />
        <Footer />
            
        </>
     );
}
 
export default HomePage;