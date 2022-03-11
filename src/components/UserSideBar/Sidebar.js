import React, {useEffect, useState, useCallback} from 'react';
import './sidebar.css'
import Logo from '../../assets/images/logo.png'
// import profile from '../../assets/images/header.png'
import profile from '../../assets/images/userProfile.svg'
import { Link, useLocation } from 'react-router-dom';
import {connect} from 'react-redux'
import { logOut } from '../../store/actions/auth';

const UserSideBar = (props) => {

    const [sideShow, setSideShow] = useState(false);

    const {firstname, lastname, image, Logout,} = props

    const ToggleLogout = () =>{
        Logout()
    }

    

    useEffect(() =>{
        document.body.classList.add('barBg');
     }, [])

     

    const closeSideBar = useCallback(() => {
        setSideShow(sideShow ? false : true);
      }, [sideShow])
 
     useEffect(() => {
         if(sideShow){

            document.body.addEventListener("click", closeSideBar);
      
            return () => document.body.removeEventListener("click", closeSideBar);
         }
       
      }, [closeSideBar, sideShow]);
      

     // check for which path you are on
     const isActive = useLocation().pathname



     const ToggleSidebar = () =>{
         setSideShow(sideShow ? false : true);
     }

    
    
     
     const TitleFormat = () =>{
         let val;
         switch(isActive){
             case '/user/profile':
             val = 'Profile';
             break;
            case '/user/dashboard':
                val = 'Overview'
                break;
            case '/user/transactions':
                val = 'Transactions'
                break;
            case '/user/notifications':
                val = 'Notifications'
                break;
            case '/user/trade':
                val = 'Trade Cards'
                break;
            case '/user/account':
                val = 'Account Details'
                break;
             default:
                 val = 'Transaction Details'
                 break;
                 
         }
         return val
     }

    return ( 
        <>
        {/* sidebar */}
        <div style={{position: 'relative'}}>
            <div 
            className={ sideShow ? "userside show" : "userside" }
            >

                {/* logo */}
                <div className="text-center mt-2">
                    <img src={Logo} alt="logo" width="192" height="87" />
                </div>

                {/* nav list */}
                <div className="v-list mt-4">

                    {/* first */}
                    <Link to="/user/dashboard" 
                    className={ isActive.includes("/user/dashboard") ? 'v-list-item active v-list-link' : 'v-list-item v-list-link'}
                     style={{textDecoration: 'none'}}>

                        {/* icon */}
                        <div 
                        className={ isActive.includes("/user/dashboard") ? 'v-list-icon active' : 'v-list-icon'}
                       >
                            <i className="fa fa-chart-pie"></i>
                        </div>
                        {/* title */}
                        <div className="v-list-title">
                            <span 
                            className={ isActive.includes("/user/dashboard") ? 'active' : ''}
                            >Overview</span>
                        </div>

                    </Link>

                    {/* second */}
                    <Link to="/user/transactions"
                    className={ isActive.includes("/user/transactions") ? 'v-list-item active v-list-link' : 'v-list-item v-list-link'}
                    style={{textDecoration: 'none'}}>

                        {/* icon */}
                        <div
                        className={ isActive.includes("/user/transactions") ? 'v-list-icon active' : 'v-list-icon'}
                         >
                        <i className="fa fa-ticket-alt"></i>
                        {/* <img src={transactIcon} alt="profile" className="img-fluid" /> */}
                        </div>
                        {/* title */}
                        <div className="v-list-title">
                            <span
                            className={ isActive.includes("/user/transactions") ? 'active' : ''}
                            >Trades</span>
                        </div>

                    </Link>

                {/* third */}
                    <Link to="/user/transactions"
                    className={ isActive.includes("/user/transactions") ? 'v-list-item active v-list-link' : 'v-list-item v-list-link'}
                    style={{textDecoration: 'none'}}>

                        {/* icon */}
                        <div
                        className={ isActive.includes("/user/transactions") ? 'v-list-icon active' : 'v-list-icon'}
                         >
                        <i className="fa fa-ticket-alt"></i>
                        {/* <img src={transactIcon} alt="profile" className="img-fluid" /> */}
                        </div>
                        {/* title */}
                        <div className="v-list-title">
                            <span
                            className={ isActive.includes("/user/transactions") ? 'active' : ''}
                            >My Wallet</span>
                        </div>

                    </Link>

                     {/* third */}
                     <Link to="/user/notifications"
                     className={ isActive.includes("/user/notifications") ? 'v-list-item active v-list-link' : 'v-list-item v-list-link'}
                     style={{textDecoration: 'none'}}>

                        {/* icon */}
                        <div
                        className={ isActive.includes("/user/notifications") ? 'v-list-icon active' : 'v-list-icon'}
                         >
                            <i className="fa fa-lightbulb"></i>
                        {/* <img src={notifyIcon} alt="profile" className="img-fluid" /> */}
                        </div>
                        {/* title */}
                        <div className="v-list-title">
                            <span
                            className={ isActive.includes("/user/notifications") ? 'active' : ''}
                            >Notifications</span>
                        </div>

                        </Link>

                    {/* fourth */}
                    <Link to="/user/account"
                    className={ isActive.includes("/user/account") ? 'v-list-item active v-list-link' : 'v-list-item v-list-link'}
                      style={{textDecoration: 'none'}}>

                        {/* icon */}
                        <div 
                        className={ isActive.includes("/user/account") ? 'v-list-icon active' : 'v-list-icon'}
                        >
                            <i className="fa fa-book"></i>
                            {/* <img src={account} alt="account" className="img-fluid" /> */}
                            
                        </div>
                        {/* title */}
                        <div className="v-list-title">
                            <span
                            className={ isActive.includes("/user/account") ? 'active' : ''}
                            >Account Details</span>
                        </div>

                        </Link>

                    {/* fifth */}
                    <Link to="/user/profile"
                    className={ isActive.includes("/user/profile") ? 'v-list-item active v-list-link' : 'v-list-item v-list-link'}
                      style={{textDecoration: 'none'}}>

                        {/* icon */}
                        <div 
                        className={ isActive.includes("/user/profile") ? 'v-list-icon active' : 'v-list-icon'}
                        >
                            <i className='fa fa-user-tie'></i>
                            {/* <img src={profileIcon} alt="profile" className="img-fluid" /> */}
                        </div>
                        {/* title */}
                        <div className="v-list-title">
                            <span
                            className={ isActive.includes("/user/profile") ? 'active' : ''}
                            >Profile</span>
                        </div>

                     </Link>

                        {/* horozontal line */}
                        <div className="mt-5">
                            <hr style={{borderTop: '1px solid #DFE0EB'}} />
                        </div>

                    {/* logout */}
                        <Link to="/"
                         onClick={ToggleLogout}
                         className="v-list-item v-list-link" style={{textDecoration: 'none'}}>

                            {/* icon */}
                            <div className="v-list-icon">
                                <i className="fa fa-cog"></i>
                            {/* <img src={logoutIcon} alt="profile" className="img-fluid" /> */}
                            </div>
                            {/* title */}
                            <div className="v-list-title">
                                <span>Logout</span>
                            </div>

                        </Link>

                        {/* trade */}
                        <Link to="/user/trade"
                        className={ isActive.includes("/user/trade") ? 'v-list-item active v-list-link' : 'v-list-item v-list-link'}
                          style={{textDecoration: 'none'}}>

                            {/* icon */}
                            <div 
                             className={ isActive.includes("/user/trade") ? 'v-list-icon active' : 'v-list-icon'}
                            >
                                <i className="fa fa-award"></i>
                                
                            </div>
                            {/* title */}
                            <div className="v-list-title">
                                <span
                                className={ isActive.includes("/user/trade") ? 'active' : ''}
                                >Trade</span>
                            </div>

                        </Link>




                 </div>



             </div>

            

        {/* navbar */}
            <nav>
                <div className="sidehead">
                    <div style={{display: 'flex', alignItems: 'center'}}>

                        {/* icon for hamburger */}
                            <div onClick={ToggleSidebar} className="d-md-none d-sm-block" style={{marginRight: '12px', cursor: 'pointer'}}>
                                <i className="mdi mdi-menu" style={{fontSize: 24}}></i>
                            </div>

                        <div>
                          <p className="mb-0" style={{color: '#252733', fontWeight: 'bold'}}>{TitleFormat()}</p>
                        </div>

                        <div style={{flexGrow: 1}}></div>
                        <div>
                            <div style={{display: 'flex', alignItems: 'center'}}>
                                <div>
                                    <p className="mb-0" style={{color: '#252733', fontSize: 14, fontWeight: 500}}>{lastname ? lastname :  "Winsala"} {firstname ? firstname : "Bayo"}</p>
                                </div>

                                <div className="ml-3">
                                    <img 
                                    className="imageStyle"
                                    src={ image ? image : profile}
                                    alt="user" />
                                </div>

                            </div>
                           
                        </div>
                        
                    </div>
                </div>
            </nav>
        </div>


        </>
     );
}


const mapStateToProps = (state) =>{
    return{
        firstname: state.auth.firstname,
        lastname: state.auth.lastname,
        image: state.auth.profilePic,
    }
}


const mapDispatchToProps = (dispatch) =>{
    return{
        Logout: () => dispatch(logOut()),
    }
}
 
export default connect(mapStateToProps, mapDispatchToProps)(UserSideBar);