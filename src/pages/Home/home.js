import React, {useEffect} from 'react';
import GiftCards from '../../components/HomeComponents/Cards';
import Features from '../../components/HomeComponents/Features';
import Footer from '../../components/HomeComponents/Footer';
import HeroSection from '../../components/HomeComponents/Hero';
import Navbar from '../../components/HomeComponents/Navbar';
import RateCalculator from '../../components/HomeComponents/Rate';
import Steps from '../../components/HomeComponents/Steps';
import Testimonials from '../../components/HomeComponents/Testimonials';


const HomePage = () => {

    useEffect(() =>{
        const script = document.createElement("script")
        script.src = "//code.tidio.co/fvnoban6szuhxukufe6owkwmst9olm2p.js"
        script.async = true
        document.body.appendChild(script)
     }, [])

    return ( 
        <>     
        <Navbar />
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