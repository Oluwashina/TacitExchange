import React, {useEffect} from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../../components/HomeComponents/Navbar';
import './faq.css'
import FaqImage from '../../assets/images/FaqPiqNew.svg'
import Footer from '../../components/HomeComponents/Footer';
import FaqItem from '../../components/FAQ/FaqItem';

const FaqPage = () => {

    useEffect(() =>{
        document.body.classList.add('faqBg');
        document.body.classList.remove('body-hidden');
     }, [])

     const FAQS = [
        {
          title: 'How Do I Verify My Email',
          content: () => (
            <>
              This is a one-time process to ensure that the email provided during registration is correct because every important update concerning your account and transactions will be sent to the email address.
              To complete every registration process, log in to your email, a verification link must have been sent there. If you don’t find it in your inbox, check the spam folder. 
              Click the verification link in the email and you are good to go.
            </>
          ),
        },
        {
          title: 'How Can I Reset My Password',
          content: () => (
            <>
              In case you forget your password, proceed to our website homepage. 

Right on the login page, you will see a "Forgot Password" link. Input your email address. You will see a mail containing the reset password link. 

Kindly check your spam folder if you don't find it in your inbox. Our support team is always available to assist
            </>
          ),
        },
        {
          title: 'What Gift Card Has The Highest Rate At The Moment',
          content: () => (
            <>
          This is a rather rhetorical question as no specific or general answer can be given. Gift card values and rates vary from time to time depending on several factors. So the gift card that has the best rate at this moment might be different in the next hour. 

We advise that you always use our rate calculator to check current rates and prices. Be rest assured that Tacit Exchange provides you with the best rates always.

If you need any specific help or more advice concerning this, you can reach out to our customer support via live chat or call/WhatsApp: +2348168516315
           </>
          ),
        },
        {
          title: 'Why Is My Trade Rejected',
          content: () => (
            <>
              Your trade will be rejected for any of the following reasons:

      - Your gift card is already redeemed.

    - Your gift card is not ‘properly’ activated

    - Your gift card is not clear enough

    - Your gift card code is wrong

- You submitted an empty trade.

- You uploaded the wrong picture

- You submitted the wrong trade

- You uploaded an unacceptable receipt (For cards that require a receipt)

And many more…

Whatever reason it is will be specified along with the rejection. ​​​​​
            </>
          ),
        },
        {
          title: 'How Long Does A Gift Card Transaction Take',
          content: () => (
            <>
             Gift card transactions typically take a few minutes. However, some gift cards like Apple Store, Walmart, Nordstrom e.t.c take more time than others.

Average time will always be stated in trade terms but be rest assured we attend to all transactions as quick as possible.
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
                        <img src={FaqImage} style={{maxWidth: '100%', height: '250px'}} alt="faqimage" />
                        <div>
                            <h3>FAQ</h3>
                        </div>
                    </div>

                        <div className="text-center">
                            <h4 style={{fontWeight: 'bold'}}>Frequently Asked Questions</h4>
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