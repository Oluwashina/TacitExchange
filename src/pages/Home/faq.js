import React, {useEffect} from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../../components/HomeComponents/Navbar';
import './faq.css'
import FaqImage from '../../assets/images/faqPic.svg'
import Footer from '../../components/HomeComponents/Footer';
import FaqItem from '../../components/FAQ/FaqItem';

const FaqPage = () => {

    useEffect(() =>{
        document.body.classList.add('faqBg');
        document.body.classList.remove('body-hidden');
     }, [])

     const FAQS = [
        {
          title: 'What tech does Gatsby use?',
          content: () => (
            <>
              Enjoy the power of the latest web technologies – React.js , Webpack ,
              modern JavaScript and CSS and more — all set up and waiting for you to
              start building
            </>
          ),
        },
        {
          title: 'Where can you source data from?',
          content: () => (
            <>
              Gatsby’s rich data plugin ecosystem lets you build sites with the data
              you want — from one or many sources: Pull data from headless CMSs, SaaS
              services, APIs, databases, your file system, and more directly into your
              pages using GraphQL.
            </>
          ),
        },
        {
          title: 'How do I scale Gatsby sites?',
          content: () => (
            <>
              Gatsby.js is Internet Scale. Forget complicated deploys with databases
              and servers and their expensive, time-consuming setup costs,
              maintenance, and scaling fears. Gatsby.js builds your site as “static”
              files which can be deployed easily on dozens of services.
            </>
          ),
        },
        {
          title: 'How does do I future-proof my website?',
          content: () => (
            <>
              Do not build a website with last decade’s tech. The future of the web is
              mobile, JavaScript and APIs—the{` `}

              Every website is a web app and every web app is a website. Gatsby.js is
              the universal JavaScript framework you’ve been waiting for.
            </>
          ),
        },
        {
          title: 'What exactly does Gatsby build?',
          content: () => (
            <>
              Gatsby.js is a static PWA (Progressive Web App) generator. You get code
              and data splitting out-of-the-box. Gatsby loads only the critical HTML,
              CSS, data, and JavaScript so your site loads as fast as possible. Once
              loaded, Gatsby prefetches resources for other pages so clicking around
              the site feels incredibly fast.
            </>
          ),
        },
      ];


    return ( 
        <>
            <Navbar />            
            <div className="container" style={{marginTop: '120px'}}>

                <div className="faqDiv">

                    {/* faq image */}
                    <div className="faqImg">
                        <img src={FaqImage} style={{maxWidth: '100%', height: '120px'}} alt="faqimage" />
                        <div>
                            <h3>FAQ</h3>
                        </div>
                    </div>

                        <div className="text-center">
                            <h6 style={{fontWeight: 'bold'}}>Frequently Asked Questions</h6>
                            <p>You can ask more questions by contacting us <Link to="/contact" style={{textDecoration: 'none', color: '#0898D7'}} >here</Link></p>
                        </div>

                        {/* collapsible divs */}
                        <div className="faqHead">
                            {FAQS.map(({title, content})=>(
                                <FaqItem title={title} key={title}>
                                    {content()}
                                </FaqItem>
                            ))}        
                        </div>

                </div>

            </div>



            <div style={{marginTop: '150px'}}>
                <Footer />
            </div>


        </>
     );
}
 
export default FaqPage;