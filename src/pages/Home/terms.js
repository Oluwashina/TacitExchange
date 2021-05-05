import React, {useEffect} from 'react';
import Navbar from '../../components/HomeComponents/Navbar';
import './faq.css'
import FaqImage from '../../assets/images/FaqPiqNew.svg'
import Footer from '../../components/HomeComponents/Footer';

const TermsPage = () => {

    useEffect(() =>{
        document.body.classList.add('faqBg');
        document.body.classList.remove('body-hidden');
     }, [])

    return ( 
        <>
        <Navbar />
        <div className="container" style={{marginTop: '120px'}}>

            <div className="faqDiv">

                {/* faq image */}
                <div className="faqImg">
                    <img src={FaqImage} style={{maxWidth: '100%', height: '250px'}} alt="faqimage" />
                    <div>
                        <h3>Terms</h3>
                    </div>
                </div>

                <div className="text-center mt-2">
                    <h4 style={{fontWeight: 'bold'}}>Terms and Conditions</h4>
                   
                </div>

                {/* terms and conditions write up */}
                <div className="faqHead">
                    <p>
                    Thank you for taking a moment to read through our Terms of Service. You may grab a cup of coffee as you carefully read the following pages. It will take you approximately 25 minutes. 
                    </p>
                    <p>
                    Welcome to TacitChain (‘We’, ‘Us’, ‘its’). These Terms of Service (‘Terms’,‘Terms of Service’) govern your use of our web pages located at <a style={{textDecoration: 'none'}} target="_blank" rel="noreferrer" href="https://tacitexchange.com/">https://tacitexchange.com/</a> and our mobile application xxxxxx (together or individually “Service”) operated by TacitChain.
                    </p>
                    <p>
                    TACITCHAIN (TACITEXCHANGE) is a business that allows customers to trade cryptocurrencies or digital currencies for other assets, such as conventional fiat money or other digital currencies.
                    </p>
                </div>

                {/* terms content writeup */}
                <div>
                    {/* first */}
                    <div className="mt-5">                
                            <h6 style={{fontWeight: 800}}>1.1 Application and Acceptance of Terms</h6>
                    </div>
                    <div className="mt-3">
                        <p>
                        Our Privacy Policy also governs your use of our Service and explains how we collect, safeguard and disclose information that results from your use of our web pages. Please read it here <a style={{textDecoration: 'none'}} target="_blank" rel="noreferrer" href="https://tacitexchange.com/privacypolicy">https://tacitexchange.com/privacypolicy</a>
                        </p>
                        <p>
                        Your agreement with us includes these Terms and our Privacy Policy (‘Agreements’).You acknowledge that you have read and understood these Agreements and agree to be bound by them
                        </p>
                        <p>
                        If you do not agree with (or cannot comply with) Agreements, then you may not use the Service, but please let us know by emailing at xxxxxxxxxxxxxxxxx so we can try to find a solution. These Terms apply to all visitors, users and others who wish to access or use Service.
                        Thank you for being responsible.
                        </p>
                        <p>
                        By creating an Account on our Service, you agree to subscribe to newsletters, marketing or promotional materials and other information we may send. However, you may opt out of receiving any, or all, of these communications from us by following the unsubscribe link or by emailing <a href="mailto:support@tacitexchange.com"  style={{textDecoration: 'none'}}>support@tacitexchange.com</a>
                        </p>
                    </div>

                    {/* second */}
                    <div className="mt-4">                
                            <h6 style={{fontWeight: 800}}>1.2 Fee Changes</h6>
                    </div>
                    <div className="mt-3">
                        <p>
                        TACITCHAIN may, in its sole discretion and at any time make certain fee changes with regards to the use of its Service.
                        </p>
                        <p>
                        Language Version. If tacitexchange.com has posted or provided a translation of the English version of any terms of this Agreement, including the Transactional Terms, the General Terms and other related agreements, you agree that the translation is provided for convenience only and that the English language version will govern your use of the Transaction Services, except to the extent prohibited by applicable law.
                        </p>
                        
                    </div>

                    {/* third */}
                    <div className="mt-4">                
                            <h6 style={{fontWeight: 800}}>1.3 Chargebacks</h6>
                    </div>
                    <div className="mt-3">
                        <p>
                        In an event where you are given value multiple times for a transaction whether Cryptocurrency or FIAT or the value credited into your TACITEXHANGE account from the sale of a gift card exceeds the correct amount, you agree to be held liable for such claims and for a hold of the transaction amount to be placed on your account until such funds are recovered from you.
                        </p>
                        <p>
                        In an event where you enter an UNACTIVATED or USED card in any transaction involving your TACITEXCHANGE account, such cards shall not be valid to be redeemed, and where any sum has been wrongly paid to you <span style={{fontStyle :'italic'}}>bonafide</span>, you agree to be held liable for such claims and for a hold of the transaction amount to be placed on your account until such funds are recovered from you.
                        </p>
                        
                    </div>

                    {/* fourth */}
                    <div className="mt-4">                
                            <h6 style={{fontWeight: 800}}>1.4 Content</h6>
                    </div>
                    <div className="mt-3">
                        <p>
                        Every content found on or through this Service, or used with its permission are the property of TACITCHAIN. You may not distribute, modify, transmit, reuse, download, repost, copy, or use said Content, whether in whole or in part, for commercial purposes or for personal gain, without express and advance permission in writing from us
                        </p>
                        
                    </div>

                    {/* fifth */}
                    <div className="mt-4">                
                            <h6 style={{fontWeight: 800}}>1.5 Prohibited Uses</h6>
                    </div>
                    <div className="mt-3">
                        <p>
                        You may use Service only for lawful purposes and in accordance with Terms. You agree not to use Service:
                        </p>
                        <ul>
                            <li>
                            In any way that violates any applicable national or international law or regulation.
                            </li>
                            <li>
                            For the purpose of exploiting, harming, or attempting to exploit or harm minors in any way by exposing them to inappropriate content or otherwise.  To transmit, or procure the sending of, any advertising or promotional material, including any “junk mail”, “chain letter,” “spam,” or any other similar solicitation.
                            </li>
                            <li>
                            To impersonate or attempt to impersonate Company, a Company employee, another user, or any other person or entity.
                            </li>
                            <li>
                            In any way that infringes upon the rights of others, or in any way is illegal, threatening, fraudulent, or harmful, or in connection with any unlawful, illegal, fraudulent, or harmful purpose or activity.
                            </li>
                            <li>
                            To engage in any other conduct that restricts or inhibits anyone’s use or enjoyment of Service, or which, as determined by us, may harm or offend Company or users of Service or expose them to liability.
                            </li>
                        </ul>
                        <p>
                        Additionally, you agree not to:
                        </p>
                        <ul>
                            <li>
                            Use our Service in any manner that could disable, overburden, damage, or impair Service or interfere with any other party’s use of Service, including their ability to engage in real time activities through our Service.
                            </li>
                            <li>
                            Use any robot, spider, or other automatic device, process, or means to access our Service for any purpose, including monitoring or copying any of the material on our Service.
                            </li>
                            <li>
                            	Attack Service via a denial-of-service attack or a distributed denial-of-service attack.
                            </li>
                            <li>
                            Use any manual process to monitor or copy any of the material on our Service or for any other unauthorized purpose without our prior written consent.
                            </li>
                            <li>
                            Use any device, software, or routine that interferes with the proper working of the Service.
                            </li>
                            <li>
                            	Attempt to gain unauthorized access to, interfere with, damage, or disrupt any parts of our Service, the server on which Service is stored, or any server, computer, or database connected to Service.
                            </li>
                            <li>
                            	Introduce any viruses, trojan horses, worms, logic bombs, or other material which is malicious or technologically harmful.
                            </li>
                            <li>
                                Take any action that may damage or falsify Company rating.
                            </li>
                            <li>
                                Otherwise attempt to interfere with the proper working of our Service in any other manner not herein stated.
                            </li>
                        </ul>
                        
                    </div>

                    {/* sixth */}
                    <div className="mt-4">                
                            <h6 style={{fontWeight: 800}}>1.6 Analytics</h6>
                    </div>
                    <div className="mt-3">
                        <p>
                        We may use third-party Service Providers to monitor and analyze the use of our Service.
                        </p>
                        <p>
                        Google Analytics is a web analytics service offered by Google that tracks and reports website traffic. Google uses the data collected to track and monitor the use of our Service. This data is shared with other Google services. Google may use the collected data to contextualize and personalize the ads of its own advertising network.
                        </p>
                        <p>
                        For more information on the privacy practices of Google, please visit the Google Privacy Terms web page: <a style={{textDecoration: 'none'}} target="_blank" rel="noreferrer" href="https://policies.google.com/privacy?hl=en">https://policies.google.com/privacy?hl=en</a>
                        </p>
                        <p>
                        You are also greatly encouraged to review Google's Policy for Safeguarding User Data: <br />
                        <span><a style={{textDecoration: 'none',}} target="_blank" rel="noreferrer" href="https://support.google.com/analytics/answer/6004245">https://support.google.com/<span><br />analytics/answer/6004245</span></a></span>
                        </p>
                    </div>

                    {/* seventh */}
                    <div className="mt-4">                
                            <h6 style={{fontWeight: 800}}>1.7 No Use By Minors</h6>
                    </div>
                    <div className="mt-3">
                        <p>
                        Our Service is intended only for access and use by individuals who are at least eighteen (18) years old. By accessing or using any of Company, you warrant and represent that you are at least eighteen (18) years of age and with the full authority, right, and capacity to enter into this agreement and abide by all of the terms and conditions of Terms.
                        </p>
                        <p>
                        If you are not at least eighteen (18) years old as at the day of creating a profile to make use of our Service, you are prohibited from both the access and usage of Service.
                        </p>
                        
                    </div>

                    {/* eighth */}
                    <div className="mt-4">                
                            <h6 style={{fontWeight: 800}}>1.8 Accounts</h6>
                    </div>
                    <div className="mt-3">
                        <p>
                        When you create an account with us, you guarantee that you are above the age of 18, and that the information you provide us is accurate, complete, and current at all times. Inaccurate, incomplete, or obsolete information may result in the immediate termination of your account on Service
                        </p>
                        <p>
                        You are responsible for maintaining the confidentiality of your account, password, PIN and Two - Factor Authentication Service, including but not limited to the restriction of access to your computer and/or account. You agree to accept responsibility for any and all activities or actions that occur under your account and/or password, whether your password is with our Service or a third-party service. You must notify us immediately upon becoming aware of any breach of security or unauthorized use of your account.
                        </p>
                        <p>
                        You are not permitted to adopt as username, the name of another person or entity or that is not lawfully available for use, a name or trademark that is subject to any rights of another person or entity other than you, without appropriate and sufficient authorization. You may not use as a username any name that is offensive, vulgar or obscene.
                            We reserve the right to refuse service, terminate accounts, remove or edit content, or cancel orders in our sole discretion.
                        </p>
                        
                    </div>
                    
                    {/* ninth */}
                    <div className="mt-4">                
                            <h6 style={{fontWeight: 800}}>1.9 Intellectual Property</h6>
                    </div>
                    <div className="mt-3">
                        <p>
                        Service and its original content (excluding Content provided by users), features and functionality are and will remain the exclusive property of Patricia Technologies Limited and its licensors. Service is protected by copyright, trademark, and other laws of the United States and foreign countries. Our trademarks and trade dress may not be used in connection with any product or service without the prior written consent of Patricia Technologies Limited.
                        </p>
                    </div>

                    {/* next */}
                    <div className="mt-4">                
                            <h6 style={{fontWeight: 800}}>2.0 Copyright Policy</h6>
                    </div>
                    <div className="mt-3">
                        <p>
                        We respect the intellectual property rights of others. It is our policy to respond to any claim that Content posted on Service that infringes on the copyright or other intellectual property rights ‘Infringement’ of any person or entity.
                        </p>
                        <p>
                        If you are a copyright owner, or authorized on behalf of one, and you believe that the copyrighted work has been copied in a way that constitutes copyright infringement, please submit your claim via email to <a href="mailto:support@tacitexchange.com"  style={{textDecoration: 'none'}}>support@tacitexchange.com</a>, with the subject line - “Copyright Infringement”, and include in your claim a detailed description of the alleged Infringement as detailed below, under “DMCA Notice and Procedure for Copyright Infringement Claims”
                You may be held accountable for damages (including costs and attorneys' fees) for misrepresentation or bad-faith claims on the infringement of any Content found on and/or through Service on your copyright.
                        </p>
                    </div>

                     {/* next */}
                     <div className="mt-4">                
                            <h6 style={{fontWeight: 800}}>2.1 Links To Other Web Sites</h6>
                    </div>
                    <div className="mt-3">
                        <p>
                        Our Service may contain links to third party web sites or services that are not owned or controlled by TACITCHAIN.
                        </p>
                        <p>
                        TACITCHAIN has no control over, and assumes no responsibility for the content, privacy policies, or practices of any third party web sites or services. We do not warrant the offerings of any of these entities/individuals or their websites.
                        </p>
                        <p>
                        YOU ACKNOWLEDGE AND AGREE THAT TACITCHAIN SHALL NOT BE RESPONSIBLE OR LIABLE, DIRECTLY OR INDIRECTLY, FOR ANY DAMAGE OR LOSS CAUSED OR ALLEGED TO BE CAUSED BY OR IN CONNECTION WITH USE OF OR RELIANCE ON ANY SUCH CONTENT, GOODS OR SERVICES AVAILABLE ON OR THROUGH ANY SUCH THIRD PARTY WEBSITES OR SERVICES.
                        </p>
                        <p>
                        WE STRONGLY ADVISE YOU TO READ THE TERMS OF SERVICE AND PRIVACY POLICIES OF ANY THIRD PARTY WEBSITES OR SERVICES THAT YOU VISIT.
                        </p>
                    </div>

                     {/* next */}
                     <div className="mt-4">                
                            <h6 style={{fontWeight: 800}}>2.2 Disclaimer Of Warranty</h6>
                    </div>
                    <div className="mt-3">
                        <p>
                        THESE SERVICES ARE PROVIDED BY COMPANY ON AN “AS IS” AND “AS AVAILABLE” BASIS. COMPANY MAKES NO REPRESENTATIONS OR WARRANTIES OF ANY KIND, EXPRESS OR IMPLIED, AS TO THE OPERATION OF THEIR SERVICES, OR THE INFORMATION, CONTENT OR MATERIALS INCLUDED THEREIN. YOU EXPRESSLY AGREE THAT YOUR USE OF THESE SERVICES, THEIR CONTENT, AND ANY SERVICES OR ITEMS OBTAINED FROM US IS AT YOUR SOLE RISK.
                        </p>
                        <p>
                        NEITHER COMPANY NOR ANY PERSON ASSOCIATED WITH COMPANY MAKES ANY WARRANTY OR REPRESENTATION WITH RESPECT TO THE COMPLETENESS, SECURITY, RELIABILITY, QUALITY, ACCURACY, OR AVAILABILITY OF THE SERVICES. WITHOUT LIMITING THE FOREGOING, NEITHER COMPANY NOR ANYONE ASSOCIATED WITH COMPANY REPRESENTS OR WARRANTS THAT THE SERVICES, THEIR CONTENT, OR ANY SERVICES OR ITEMS OBTAINED THROUGH THE SERVICES WILL BE ACCURATE, RELIABLE, ERROR-FREE, OR UNINTERRUPTED, THAT DEFECTS WILL BE CORRECTED, THAT THE SERVICES OR THE SERVER THAT MAKES IT AVAILABLE ARE FREE OF VIRUSES OR OTHER HARMFUL COMPONENTS OR THAT THE SERVICES OR ANY SERVICES OR ITEMS OBTAINED THROUGH THE SERVICES WILL OTHERWISE MEET YOUR NEEDS OR EXPECTATIONS.
                        </p>   
                        <p>
                        COMPANY HEREBY DISCLAIMS ALL WARRANTIES OF ANY KIND, WHETHER EXPRESS OR IMPLIED, STATUTORY, OR OTHERWISE, INCLUDING BUT NOT LIMITED TO ANY WARRANTIES OF MERCHANTABILITY, NON-INFRINGEMENT, AND FITNESS FOR PARTICULAR PURPOSE.
                        </p>
                        <p>
                        THE FOREGOING DOES NOT AFFECT ANY WARRANTIES WHICH CANNOT BE EXCLUDED OR LIMITED UNDER APPLICABLE LAW.
                        </p>
                    </div>

                    {/* next */}
                    <div className="mt-4">                
                            <h6 style={{fontWeight: 800}}>2.3 Limitation Of Liability</h6>
                    </div>
                    <div className="mt-3">
                        <p>
                        EXCEPT AS PROHIBITED BY LAW, YOU WILL HOLD US AND OUR OFFICERS, DIRECTORS, EMPLOYEES, AND AGENTS HARMLESS FOR ANY INDIRECT, PUNITIVE, SPECIAL, INCIDENTAL, OR CONSEQUENTIAL DAMAGE, HOWEVER IT ARISES (INCLUDING ATTORNEYS' FEES AND ALL RELATED COSTS AND EXPENSES OF LITIGATION AND ARBITRATION, OR AT TRIAL OR ON APPEAL, IF ANY, WHETHER OR NOT LITIGATION OR ARBITRATION IS INSTITUTED), WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE, OR OTHER TORTIOUS ACTION, OR ARISING OUT OF OR IN CONNECTION WITH THIS AGREEMENT, INCLUDING WITHOUT LIMITATION ANY CLAIM FOR PERSONAL INJURY OR PROPERTY DAMAGE, ARISING FROM THIS AGREEMENT AND ANY VIOLATION BY YOU OF ANY FEDERAL, STATE, OR LOCAL LAWS, STATUTES, RULES, OR REGULATIONS, EVEN IF COMPANY HAS BEEN PREVIOUSLY ADVISED OF THE POSSIBILITY OF SUCH DAMAGE. EXCEPT AS PROHIBITED BY LAW, IF THERE IS LIABILITY FOUND ON THE PART OF COMPANY, IT WILL BE LIMITED TO THE AMOUNT PAID FOR THE PRODUCTS AND/OR SERVICES, AND UNDER NO CIRCUMSTANCES WILL THERE BE CONSEQUENTIAL OR PUNITIVE DAMAGES. SOME STATES DO NOT ALLOW THE EXCLUSION OR LIMITATION OF PUNITIVE, INCIDENTAL OR CONSEQUENTIAL DAMAGES, SO THE PRIOR LIMITATION OR EXCLUSION MAY NOT APPLY TO YOU.
                        </p>
                      
                    </div>

                {/* next */}
                    <div className="mt-4">                
                            <h6 style={{fontWeight: 800}}>2.4 Termination</h6>
                    </div>
                    <div className="mt-3">
                       <p>
                       We may terminate or suspend your account and bar access to our Service immediately, without prior notice or liability, under our sole discretion, for any reason whatsoever and without limitation, including but not limited to a breach of Terms.
                       </p>
                       <p>
                       If you wish to terminate your account, you may simply discontinue using our Service.
                        All provisions of Terms which by their nature should survive termination shall survive termination, including, without limitation, ownership provisions, warranty disclaimers, indemnity and limitations of liability.
                       </p>
                      
                    </div>

                     {/* next */}
                     <div className="mt-4">                
                            <h6 style={{fontWeight: 800}}>2.5 Governing Law</h6>
                    </div>
                    <div className="mt-3">
                       <p>
                       These Terms shall be governed and construed in accordance with the laws of the Federal Republic of Nigeria without regard to its conflict of law provisions.
                       </p>
                       <p>
                       Our failure to enforce any right or provision of these Terms will not be considered a waiver of those rights. If any provision of these Terms is held to be invalid or unenforceable by a court, the remaining provisions of these Terms will remain in effect. These Terms constitute the entire agreement between us regarding our Service and supersede and replace any prior agreements we might have had between us regarding Service.
                       </p>
                      
                    </div>

                    {/* next */}
                    <div className="mt-4">                
                            <h6 style={{fontWeight: 800}}>2.6 Changes To Service</h6>
                    </div>
                    <div className="mt-3">
                       <p>
                       We reserve the right to withdraw or amend our Service, and any service or material we provide via Service, in our sole discretion without notice. We will not be liable if for any reason all or any part of Service is unavailable at any time or for any period. From time to time, we may restrict access to some parts of the Service, or the entire Service, to users, including registered users.
                       </p>
                    </div>

                     {/* next */}
                     <div className="mt-4">                
                            <h6 style={{fontWeight: 800}}>2.7 Amendments To Terms</h6>
                    </div>
                    <div className="mt-3">
                       <p>
                       We may amend Terms at any time by posting the amended terms on this site. It is your responsibility to review these Terms periodically.
                       </p>
                       <p>
                       Your continued use of the Platform following the posting of revised Terms means that you accept and agree to the changes. You are expected to check this page frequently so you are aware of any changes, as they are binding on you.
                       </p>
                       <p>
                       By continuing to access or use our Service after any revisions become effective, you agree to be bound by the revised terms. If you do not agree to the new terms, you are no longer authorized to use Service.
                       </p>
                    </div>

                    {/* next */}
                    <div className="mt-4">                
                            <h6 style={{fontWeight: 800}}>2.8 Waiver And Severability</h6>
                    </div>
                    <div className="mt-3">
                       <p>
                       No waiver by Company of any term or condition set forth in Terms shall be deemed a further or continuing waiver of such term or condition or a waiver of any other term or condition, and any failure of Company to assert a right or provision under Terms shall not constitute a waiver of such right or provision.
                       </p>
                       <p>
                       If any provision of Terms is held by a court or other tribunal of competent jurisdiction to be invalid, illegal or unenforceable for any reason, such provision shall be eliminated or limited to the minimum extent such that the remaining provisions of Terms will continue in full force and effect.
                       </p>
                       
                    </div>

                     {/* next */}
                     <div className="mt-4">                
                            <h6 style={{fontWeight: 800}}>2.9 Acknowledgement</h6>
                    </div>
                    <div className="mt-3">
                       <p>
                       BY USING OUR SERVICE OR OTHER SERVICES PROVIDED BY US, YOU ACKNOWLEDGE THAT YOU HAVE READ THESE TERMS OF SERVICE AND AGREE TO BE BOUND BY THEM.
                       </p>
                      
                    </div>


                </div>

              

            </div>

        </div>

        <div style={{marginTop: '150px'}}>
                <Footer />
            </div>
        </>
     );
}
 
export default TermsPage;