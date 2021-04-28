import React, {useEffect} from 'react';
import { connect} from 'react-redux'
import {Link, useLocation} from 'react-router-dom'
import './Sidebar.css'
import Logo from '../../assets/images/logo.png'
import profile from '../../assets/images/profile.svg'
import Bell from '../../assets/images/bell.png'
import Home from '../../assets/images/home-icon.svg'
import LogoutIcon from '../../assets/images/logout.svg'
import Users from '../../assets/images/users.svg'
import Admin from '../../assets/images/admin.svg'
import Rates from '../../assets/images/fund.svg'
import Trades from '../../assets/images/withdrawal.svg'
import { logOut } from '../../store/actions/auth';
import { SearchUser } from '../../store/actions/admin';

const SideBar = (props) => {
    
    const {firstname, lastname, image, Logout, Search} = props

    useEffect(() =>{
        document.body.classList.add('sidebarBg');
     }, [])

         // check for which path you are on
         const isActive = useLocation().pathname

         const ToggleLogout = () =>{
             Logout()
         }
     
         const handleChange = (e) =>{
             let keyword = e.target.value
             Search(keyword)
         }
     

    return ( 
        <>
            {/* Navbar */}
          <nav className="navbar navbar-bg" style={{zIndex: 1}}>
            <div className="container-fluid">
                {/* logo */}
                <div>
                    <Link className="navbar-brand" to="/admin/dashboard">
                        <img alt="logo" src={Logo} width="80" />
                    </Link>
                </div>

                <div>
                    {/* other layout side */}
                    <div style={{display: 'flex', alignItems: 'center'}}>
                        <div
                        style={ { display: isActive.includes("/users") ? 'block' : 'none' } } 
                        >
                              <div className="form-group input-container mb-0">
                              <i className="mdi mdi-magnify iconn"></i>
                                <input type="text" placeholder="Search by Firstname"
                                 onChange={handleChange}  
                                className="form-control search-style"  />
                            </div>
                        </div>
                        <div className="ml-4">
                        <img src={Bell} alt="notifications" />
                        </div>
                        <div className="ml-4">
                            <img 
                            className="imageStyle"
                              src={ image ? image : profile}
                             alt="user" />
                        </div>
                        <div>
                            <p className="ml-3 mb-0 text-white" style={{fontWeight: 400}}>{firstname ? firstname :  "Winsala"} {lastname ? lastname : "Bayo"}</p>
                        </div>
                    </div>
                    
                </div>
                
            </div>
          </nav>

            <div className="sidenav">
                
                {/* home icon */}
                <div className={isActive === "/admin/dashboard"  ? "text-center activeNav" : "text-center Nav"} style={{marginTop: 75}}>
                    <Link to="/admin/dashboard" style={{textDecoration: 'none'}}>
                    <img  alt=""  src={Home} className="img-fluid" />
                    <p className="mb-0" style={{fontSize: 10, color: '#000000'}}>Home</p>
                    </Link>
                </div>

               
                {/* Withdrawal icon */}
                <div className={isActive.includes("/admin/trades")   ? "text-center activeNav" : "text-center Nav"}>
                    <Link to="/admin/trades" style={{textDecoration: 'none'}}>
                    <img  alt=""  src={Trades} className="img-fluid" />
                    <p className="mb-0" style={{fontSize: 10, color: '#000000'}}>Trades</p>
                    </Link>
                </div>

          
                {/* fund icon */}
                <div className={isActive.includes("/admin/rates")   ? "text-center activeNav" : "text-center Nav"}>
                    <Link to="/admin/rates" style={{textDecoration: 'none'}}>
                    <img  alt=""  src={Rates} className="img-fluid" />
                    <p className="mb-0" style={{fontSize: 10, color: '#000000'}}>Rates</p>
                    </Link>
                </div>


               

                {/* users */}
                <div className={isActive.includes("/admin/users")   ? "text-center activeNav" : "text-center Nav"}>
                    <Link to="/admin/users" style={{textDecoration: 'none'}}>
                    <img  alt=""  src={Users} className="img-fluid" />
                    <p className="mb-0" style={{fontSize: 10, color: '#000000'}}>Users</p>
                    </Link>
                </div>


                 

                  {/* Admin */}
                  <div className={isActive.includes("/admin/admin")  ? "text-center activeNav" : "text-center Nav"}>
                    <Link to="/admin/admin" style={{textDecoration: 'none'}}>
                    <img  alt=""  src={Admin} className="img-fluid" />
                    <p className="mb-0" style={{fontSize: 10, color: '#000000'}}>Admin</p>
                    </Link>
                </div>


                 {/* Logout */}
                 <div className="text-center Nav" >
                     <Link to="/admin" style={{textDecoration: 'none'}} onClick={ToggleLogout}>
                    <img  alt="" src={LogoutIcon} className="img-fluid" />
                    <p className="mb-0" style={{fontSize: 10, color: '#000000'}}>Logout</p>
                    </Link>
                </div>

            </div>
        </>
     );
}
 

const mapStateToProps = (state) => {
    return {
        firstname: state.auth.firstname,
        lastname: state.auth.lastname,
        image: state.auth.profilePic,
    };
  };

  const mapDispatchToProps = (dispatch) => {
    return {
        Logout: () => dispatch(logOut()),
        Search: (value) => dispatch(SearchUser(value))
    };
  };

export default connect(mapStateToProps, mapDispatchToProps)(SideBar);
