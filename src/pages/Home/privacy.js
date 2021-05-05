import React, {useEffect} from 'react';
import Navbar from '../../components/HomeComponents/Navbar';
import './faq.css'
import FaqImage from '../../assets/images/FaqPiqNew.svg'
import Footer from '../../components/HomeComponents/Footer';

const PrivacyPage = () => {
    
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
                        <h3>Privacy</h3>
                    </div>
                </div>

                <div className="text-center">
                    <h4 style={{fontWeight: 'bold'}}>Privacy Policy</h4>
                   
                </div>

                {/* privacy */}
                <div className="faqHead">
                    <p>
                    This Privacy policy between TACITCHAIN (TACITEXCHANGE) and you, constitutes our commitment to your privacy on our website, apps, social media platforms, administrative records and premises.
                    </p>     
                </div>

                {/* terms content writeup */}
                <div>
                    {/* first */}
                    <div className="mt-5">                
                            <h6 style={{fontWeight: 800}}>1.0 Your Privacy Rights</h6>
                    </div>
                    <div className="mt-3">
                        <p>
                        This Privacy Policy describes your privacy rights regarding our collection, use, storage, sharing and protection of your personal information. It applies to the TACITEXCHANGE website, apps, platforms and all database applications, services, tools and physical contact with us regardless of how you access or use them.
                        </p>
                        <p>
                        If you have created a username, identification code, password or any other piece of information as part of our access security measures, you must treat such information as confidential, and you must not disclose it to any third party. We reserve the right to disable any user identification code or password, whether chosen by you or allocated by us, at any time, if in our opinion you have failed to comply with any of the provisions of these Conditions. If you know or suspect that anyone other than you know your security details, you must promptly notify us at <a href="mailto:support@tacitexchange.com"  style={{textDecoration: 'none'}}>support@tacitexchange.com</a>. 
                        </p>
                        
                    </div>

                    {/* second */}
                     <div className="mt-4">                
                            <h6 style={{fontWeight: 800}}>2.0 Consent</h6>
                    </div>
                    <div className="mt-3">
                        <p>
                        You accept this Privacy Policy when you give consent upon access to our platforms, or use our services, content, features, technologies or functions offered on our website, apps, digital platforms or visit any of our offices for official or non-official purposes (collectively “TACITEXCHANGE's services”). This Policy governs the use of TACITEXCHANGE's services and intervention projects by our users and stakeholders unless otherwise agreed through written contract. We may amend this Privacy Policy at any time by posting a revised version on our website, apps, platforms, or placing such notice at conspicuous points at our office facilities. The revised version will be effective 7-14 days after publication
                        </p>
                    </div>

                    {/* third */}
                    <div className="mt-4">                
                            <h6 style={{fontWeight: 800}}>3.0 Your Personal Information</h6>
                    </div>
                    <div className="mt-3">
                        <p>
                        When you use TACITEXCHANGE's Services, we may collect information sent to us by your computer, mobile phone or other electronic access device. The automatically collected information includes but not limited to- data about the pages you access, computer IP address, device ID or unique identifier, device type, geo-location information, computer and connection information, mobile network information, statistics on page views, traffic to and from the sites, referral URL, ad data, standard web log data, still and moving images.
                        </p>
                        <p>
                        We may also collect information you provide us including but not limited to - information on web forms, survey responses, account update information, email, phone number, organization you represent, official position, correspondence with TACITEXCHANGE's support services and telecommunication with TACITEXCHANGE. We may also collect information about your transactions, enquiries and your activities on our platforms or service channels. 
                        </p>
                        <p>
                        We may also use information provided by third parties like social media sites. Information about you provided by other sites are not controlled by TACITEXCHANGE and we are therefore not liable for how they use it. 
                        </p>
                    </div>

                    {/* fourth */}
                  
                     <div className="mt-4">                
                            <h6 style={{fontWeight: 800}}>4.0 Disclosure or Sharing of Personal Data</h6>
                    </div>
                    <div className="mt-3">
                        <p>
                        Essentially, the purpose of our collecting your personal data is to give you efficient, effective, enjoyable, and secure Service. We may use your information to:
                        </p>
                       <ol>
                           <li>
                            Provide TACITEXCHANGE's Services and support;
                           </li>
                           <li>
                            Process applications and send notices about your transactions to requisite parties;
                           </li>
                           <li>
                                Verify your identity;
                           </li>
                           <li>
                           	Resolve disputes, collect fees, and troubleshoot problems;
                           </li>
                           <li>
                             Manage risk, detect, prevent, and/or remediate fraud or other potentially prohibited or illegal activities;
                           </li>
                           <li>
                            Detect, prevent or remediate violation of Laws, Regulations, Standards, Guidelines and Frameworks;
                           </li>
                           <li>
                            Improve TACITEXCHANGE's Services by implementing aggregate customer or user preferences;
                           </li>
                           <li>
                                To provide ‘after-transaction’ services or other customer support services
                           </li>
                           <li>
                            	Measure the performance of the TACITEXCHANGE's Services and improve content, technology and layout;
                           </li>
                           <li>
                            Track information breach and remediate such identified breaches;
                           </li>
                           <li>
                            Manage and protect our information technology and physical infrastructure;
                           </li>
                           <li>
                            	Contact you at any time through your provided telephone number, email address or other contact details.
                           </li>
                       </ol>
                       <p>
                       To other person(s) with your consent to the disclosure;
                       </p>
                       <p>
                       We have established relationships with other parties and websites to offer you the benefit of products and services which we do not offer. We offer you access to these other parties and their websites either through the use of hyperlinks to these sites from our Platform or through offering “co-branded” sites in which both we and other parties share the same uniform resource locator (URL), domain name or pages within a domain name on the Internet. In some cases you may be required to submit personal information to register or apply for products or services provided by such third parties or co-branded partners. This Privacy Policy does not apply to these third party sites or co-branded sites. The privacy policies of those other parties may differ from ours, and we have no control over the information that you submit to those third parties. You should read the relevant privacy policy for those third party sites and co-branded sites before responding to any offers, products or services advertised by those parties.
                       </p>
                    </div>

                    
                    {/* fifth */}
                    <div className="mt-4">                
                            <h6 style={{fontWeight: 800}}>5.0 Retention / Protection of Your Personal Information</h6>
                    </div>
                    <div className="mt-3">
                        <p>
                        We store and process your personal information on our computers in Nigeria. Where we need to transfer your data to another country, such country must have an adequate data protection law. We will seek your consent where we need to send your data to a country without an adequate data protection law. We will retain your personal information for as long as we have an ongoing legitimate business need to do so, to provide services or products to you, as required or permitted by applicable laws. When we have no ongoing legitimate business need to process your personal information, we will either delete or anonymise it, or if this is not possible (for example, because your personal information has been stored in backup archives), then we will securely store your personal information and isolate it from any further processing until deletion is possible. 
                        </p>
                        <p>
                        How long your data is kept for will also depend on how you use our website (For instance the period of retention may be determined according to your activity on the Platform or to comply with a specific arbitration period/resolve a dispute.) We protect your information using physical, technical, and administrative security measures to reduce the risks of loss, misuse, unauthorized access, disclosure and alteration. Some of the safeguards we use are firewalls and data encryption, physical access controls to our data centers, and information access authorization controls.
                        </p>
                       
                    </div>

                    {/* sixth */}
                    <div className="mt-4">                
                            <h6 style={{fontWeight: 800}}>6.0 How We Share your information within TACITEXCHANGE and other users</h6>
                    </div>
                    <div className="mt-3">
                        <p>
                        During your interaction with any of our platforms or premises, we may provide Ministries, Departments, Agencies (MDAs), other organs of government, private sector operators performing government functions, with information such as your name, contact details, or other details you provide us for the purpose of performing their statutory mandate to you or third parties.
                        </p>
                        <p>
                        We work with third parties, banks, financial institutions and corporate bodies to perform TACITEXCHANGE's services and implement its mandate. In doing so, a third party may share information about you with us, such as your email address or mobile phone number.
                        </p>
                        <p>
                        You accept that your pictures and testimonials on all social media platforms about TACITEXCHANGE can be used for limited promotional purposes by us. This does not include your trademarked or copyrighted materials.
                        </p>
                        <p>
                        From time to time we may send you relevant information such as news items, enforcement notice, statutorily mandated notices and other informative notices to help TACITEXCHANGE serve you better. We may also share your personal information in compliance with National or international laws; crime prevention and risk management agencies and service providers.
                        </p>
                       
                    </div>

                     {/* seventh */}
                     <div className="mt-4">                
                            <h6 style={{fontWeight: 800}}>7.0 Security</h6>
                    </div>
                    <div className="mt-3">
                        <p>
                        We promise to and will always hold your information securely. To prevent unauthorized access to your information, we have implemented strong controls and security safeguards at the technical and operational levels. You should see the padlock symbol in your URL address bar once you are successfully logged into the platform. The URL address will also start with https:// depicting a secure webpage. SSL applies encryption between two points such as your device and the connecting server. Any data transmitted during the session will be encrypted before transmission and decrypted at the receiving end. This is to ensure that data cannot be read during transmission.
                        </p>
                        <p>
                        TACITEXCHANGE has also taken measures to comply with global Information Security Management Systems (ISMS) we therefore have put in place digital and physical security measures to limit or eliminate possibilities of data privacy breach incidents.
                        </p>

                    </div>

                    {/* eighth */}
                    <div className="mt-4">                
                            <h6 style={{fontWeight: 800}}>8.0 Data Confidentiality Rights</h6>
                    </div>
                    <div className="mt-3">
                        <p>
                        Your information is regarded as confidential and will not be divulged to any third party except under legal and/or regulatory conditions. You have the right to request sight of, and copies of any and all information we keep on you. While TACITEXCHANGE is responsible for safeguarding the information entrusted to us, your role in fulfilling confidentiality duties includes, but is not limited to, adopting and enforcing appropriate security measures such as non-sharing of passwords and other platform login details, adherence with physical security protocols on our platforms, dealing with only authorized officers of TACITEXCHANGE.
                        </p>
                       
                    </div>

                    {/* ninth */}
                    <div className="mt-4">                
                            <h6 style={{fontWeight: 800}}>9.0 Links to Other Websites and Premises</h6>
                    </div>
                    <div className="mt-3">
                        <p>
                        Certain transaction processing channels may require links to other websites other than ours. Please note that TACITEXCHANGE is not responsible and has no control over websites outside its domain. We do not monitor or review the content of other party’s websites which are linked from our website or media platforms. Opinions expressed or materials appearing on such websites are not necessarily shared or endorsed by us, and TACITEXCHANGE should not be regarded as the publisher of such opinions or materials.
                        </p>
                        <p>
                        Please be aware that we are not responsible for the privacy practices, or content of these sites. We encourage our users to be aware of when they leave our site and to read the privacy statements of these sites. You should evaluate the security and trustworthiness of any other site connected to this site or accessed through this site yourself, before disclosing any personal information to them. TACITEXCHANGE will not accept any responsibility for any loss or damage in whatever manner, howsoever caused, resulting from your disclosure to third parties of personal information.
                        </p>
                       
                    </div>

                    {/* tenth */}
                    <div className="mt-4">                
                            <h6 style={{fontWeight: 800}}>10.0 Rights Regarding Personal Data and Governing Law</h6>
                    </div>
                    <div className="mt-3">
                        <p>
                        Under applicable laws, you may have rights of access to personal information held by us, as well as other rights.
                        </p>
                        <p>
                        This Privacy Policy is made pursuant to and in compliance with the Nigeria Data Protection Regulation (2019) and other relevant Nigerian laws, regulations or international conventions applicable to Nigeria. Where any provision of this Policy is deemed inconsistent with a law, regulation or convention, such provision shall be subject to the overriding law, regulation or convention.
                        </p>
                       
                    </div>

                    {/* eleventh */}
                    <div className="mt-4">                
                            <h6 style={{fontWeight: 800}}>11.0 Cookies</h6>
                    </div>
                    <div className="mt-3">
                        <p>
                        Cookies are small files placed on your computer’s hard drive that enables the website to identify your computer as you view different pages. Cookies allow websites and applications to store your preferences in order to present contents, options or functions that are specific to you. Like most interactive websites, our website uses cookies to enable the tracking of your activity for the duration of a session. Our website uses only encrypted session cookies which are erased either after a predefined timeout period or once the user logs out of the platform and closes the browser. Session cookies do not collect information from the user’s computer. They will typically store information in the form of a session identification that does not personally identify the user.
                        </p>
                        <h6 style={{fontWeight: 800}}>Cookies Policy.</h6>
                        <p>
                        This section explains how we use cookies and similar technologies (we refer to them collectively as “cookies”) to recognize you when you visit our Platform. It explains what these technologies are and why we use them, as well as your rights to control them.
                        </p>

                        <h6 style={{fontWeight: 800}}>What are cookies?</h6>
                        <p>
                        Cookies are small text files which are transferred from our websites, apps, platforms or portals and stored on your device. We use cookies to help us provide you with a personalized service, and to help make our websites or portals better for you.
                        </p>
                        <p>
                        Our cookies may be session cookies (temporary cookies that identify and track users within our websites or portals which are deleted when you close your browser or leave your session) or persistent cookies (cookies which enable our websites or portals to “remember” who you are and to remember your preferences within our websites or portals and which will stay on your computer or device after you close your browser or leave your session
                        We use the following different types of cookies:
                        </p>

                        <h6 style={{fontWeight: 800}}>Essential cookies</h6>
                        <p>
                        These are cookies which are needed for our websites or portals to function properly, for example, these cookies allow you to access secure areas of our website/portal.
                        </p>

                        <h6 style={{fontWeight: 800}}>Performance cookies.</h6>
                        <p>
                        These cookies collect information about how visitors and users use our websites and portals. These cookies don’t collect information that identifies a visitor or user. All information these cookies collect is aggregated and therefore anonymous. We only use these cookies to improve how our website and portal.
                        </p>

                        <h6 style={{fontWeight: 800}}>Functionality cookies.</h6>
                        <p>
                        These cookies allow our websites and portals to remember choices you make (such as your user name, language or the region you are in) and provide enhanced, more personal features. These cookies can also be used to remember changes you have made to text size, fonts and other parts of web pages that you can customize. They may also be used to provide services you have asked for. The information these cookies collect may be anonymized and they cannot track your browsing activity on other websites.
                       </p>

                       <h6 style={{fontWeight: 800}}>Social Networking Cookies</h6>
                        <p>
                        These cookies are used to enable you to share pages and content that you find interesting on our Platform through third party social networking and other websites.These cookies may also be used for advertising purposes too.
                       </p>
                       <p>
                       Like most interactive websites, our website uses cookies to enable the tracking of your activity for the duration of a session. Our website uses only encrypted session cookies which are erased either after a predefined timeout period or once the user logs out of the platform and closes the browser. Session cookies do not collect information from the user’s computer. They will typically store information in the form of a session identification that does not personally identify the user.
                       </p>

                       <h6 style={{fontWeight: 800}}>How can I control cookies?</h6>
                        <p>
                        You can determine if and how a cookie will be accepted by configuring the privacy setting of the browser you are using to access the Platform or the “privacy setting” of your device. As the means by which you can refuse cookies through your web browser controls vary from browser-to-browser, you should visit your browser’s help menu for more information. If you adjust the privacy setting in the browser, your mobile device will continue collecting data unless you adjust the privacy setting of the device, and vice versa.
                       </p>
                       <p>
                       You have the right to decide whether to accept or reject cookies. If you choose to set your web browser controls to reject cookies, you may still use our website though your access to some functionality and areas of our website may be restricted.
                       </p>
                       <p>
                       In addition, most advertising networks offer you a way to opt out of targeted advertising. If you would like to find out more information, please visit http://www.aboutads.info/choices/or http://www.youronlinechoices.com.
                       </p>
                       <p>
                       Certain features of the Platform depend on cookies. Please be aware that if you choose to block cookies, you may not be able to sign in or use those features, and preferences that are dependent on cookies may be lost.
                       </p>

                       <h6 style={{fontWeight: 800}}>Google Analytics (More information) </h6>
                        <p>
                        Our Platform uses Google Analytics, an internet analytics service provided by Google, Inc. (“Google”). Google’s cookies allow us analyze use of the Platform by telling us which pages our users are viewing, which ones are most popular, what time of day our Platform are visited, if users have previously visited our Platform, from which website users are redirected to our Platform were and the like. The data generated by the cookie about your use of the Platform will be transmitted to Google and stored by Google on servers in the United States.
                       </p>
                       <p>
                       Google uses the data on behalf of TACITEXCHANGE to evaluate your use of the Platform, to compile reports on website activity for the website operators and for other website activity and internet usage services. Google may disclose this information to third parties under the terms of the law or for further processing by third parties on behalf of Google. For more information about Google Analytics cookies, visit: the Google Help pages and Privacy Policy: Google Privacy Policy: https://policies.google.com/privacy;and the Google Analytics Help Centre: <span>https://developers.google.com/analytics/<span className="break">devguides/collection/analyticsjs/cookie-usage.</span></span>
                       </p>
                       <p>
                       Through your browser settings, you can block cookies; however, this can lead to problems with the use of some functionalities of the website. Through the add-on “Google Analytics Opt-out” you can through your current web browser opt-out to the use of Google Analytics from then on: http://tools.google.com/dlpage/gaoptout?hl=en.
                       </p>
                       
        
                    </div>

                    
                    {/* twelvth */}
                    <div className="mt-4">                
                            <h6 style={{fontWeight: 800}}>12.0 Data Protection Policy</h6>
                    </div>
                    <div className="mt-3">
                        <p>
                        TACITEXCHANGE’s Data Protection Policy refers to our commitment to treat information of employees, customers, stakeholders and other interested parties with the utmost care and confidentiality. With this policy, we ensure that we gather, store and handle data fairly, transparently and with respect towards individual rights.
                       </p>
                       
                       <h6 style={{fontWeight: 800}}>Scope</h6>
                        <p>
                        This policy refers to all parties who provide any amount of information to us.
                        </p>

                        <h6 style={{fontWeight: 800}}>What is covered under the Data Protection Policy?</h6>
                        <p>
                        TACITEXCHANGE's employees must follow this policy. Freelancers, consultants, partners and any other external entity are also covered. Generally, our policy refers to anyone we collaborate with or acts on our behalf and may need occasional access to data.
                        </p>

                        <h6 style={{fontWeight: 800}}>Policy Elements</h6>
                        <p>
                        As part of our operations, we need to obtain and process information. This information includes any offline or online data that makes a person identifiable such as names, addresses, usernames and passwords, digital footprints, photographs, National identity numbers, financial data etc.
TACITEXCHANGE collects this information in a transparent way and only with the full cooperation and knowledge of interested parties. Once this information is available to us, the following rules apply.
                        </p>

                        <h6 style={{fontWeight: 800}}>Our data will be:</h6>
                        <ul>
                            <li>
                            Accurate and kept up-to-date;
                            </li>
                            <li>
                            Collected fairly and for lawful purposes only;
                            </li>
                            <li>
                                Processed by the company within its legal and moral boundaries;
                            </li>
                            <li>
                                Protected against any unauthorized or illegal access by internal or external parties.
                            </li>
                            <p className="mb-0">Our data will not be:</p>
                            <li>
                            Transferred to organizations, states or countries that do not have adequate data protection policies;
                            </li>
                            <li>
                            	Distributed to any party other than the ones agreed upon by the data’s owner (exempting legitimate requests from law enforcement authorities).
In addition to ways of handling data, TACITEXCHANGE has direct obligations towards people to whom the data belongs. Specifically we:

                            </li>
                            <li>
                                Let people know which of their data is collected;
                            </li>
                            <li>
                            	Inform people about how we’ll process their data;
                            </li>
                            <li>
                            Inform people about who has access to their information;
                            </li>
                            <li>
                                Have provisions in cases of lost, corrupted or compromised data;
                            </li>
                            <li>
                                Allow people to request that we modify, erase, reduce or correct data contained in our databases
                            </li>
                        </ul>

                        <h6 style={{fontWeight: 800}}>Actions</h6>
                        <p className="mb-0">To exercise data protection we’re committed to:</p>
                        <ul>
                            <li>
                            Restricting and monitoring access to sensitive data;
                            </li>
                            <li>
                                Developing transparent data collection procedures;
                            </li>
                            <li>
                                Training employees in online privacy and security measures;
                            </li>
                            <li>
                                Building secure networks to protect online data from cyberattacks;
                            </li>
                            <li>
                                Establishing clear procedures for reporting privacy breaches or data misuse;
                            </li>
                            <li>
                                Including contract clauses or communicate statements on how we handle data;
                            </li>
                            <li>
                                Establishing data protection practices
                            </li>
                        </ul>

                        <h6 style={{fontWeight: 800}}>Your Rights</h6>
                        <ul>
                            <li>
                            	The right to access, correct, update or request deletion of your personal information.
                            </li>
                            <li>
                                The right to object to processing of your personal information when it is based on our legitimate interests.
                            </li>
                            <li>
                                The right to ask us, in some situations, to restrict processing of your personal information or request portability of your personal information
                            </li>
                            <li>
                                The right to opt-out of marketing communications we send you at any time. You can exercise this right by clicking on the “unsubscribe” or “opt-out” link in the marketing e-mails we send you. To opt-out of other forms of marketing (such as postal marketing or telemarketing), then please contact us using the contact details provided below.
                            </li>
                            <li>
                                If we have collected and process your personal information with your consent, then you have the right to withdraw your consent at any time. Withdrawing your consent will not affect the lawfulness of any processing we conducted prior to your withdrawal, nor will it affect processing of your personal information conducted in reliance on lawful processing grounds other than consent.
                            </li>
                            <li>
                                The right to complain to a data protection authority about our collection and use of your personal information. For more information, please contact your local data protection authority
                            </li>
                            <li>
                                We respond to all requests we receive from individuals wishing to exercise their data protection rights in accordance with applicable data protection laws.
                            </li>
                            <li>
                                If you are aware of changes or inaccuracies in your information, you should inform us of such changes so that our records may be updated or corrected.
                            </li>
                        </ul>
                       
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
 
export default PrivacyPage;