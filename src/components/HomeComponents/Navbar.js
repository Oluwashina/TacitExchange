import React, {useState} from 'react';
import Logo from '../../assets/images/logo.png'
import {Link} from 'react-router-dom'

const Navbar = () => {

    const [navShow, setNavShow] = useState(false);

    const handleToggle = () =>{
        setNavShow(navShow ? false : true);
        switch(navShow){
            case false:
                document.body.classList.add('body-hidden');
            break;
            case true:
                document.body.classList.remove('body-hidden');
                break;
            default:
                break;
        }
    }

    return ( 
        <>
        <header>
            <div className="container">
                <div className="header">
                    <div className="logo">
                        <img src={Logo} alt="logo" width="100" />
                    </div>
                    <nav className={ navShow ? "open" : "" }>
                        <ul className="mainNav">
                            <li className="navLink">
                                <Link to="/" className="active">Home</Link>
                            </li>
                            <li className="navLink">
                                <Link to="/">Support & FAQ</Link>
                            </li>
                            <li className="navLink">
                                <Link to="/">Contact Us</Link>
                            </li>
                            <li className="navLink">
                                <Link to="/">Rate Calculator</Link>
                            </li>
                            <li className="headerbtn">
                                <Link className="btn btn-blueTacit" to="/">Login</Link>
                            </li>
                            <li className="headerbtn">
                                <Link className="btn btn-pinkTacit" to="/">Register</Link>
                            </li>
                        </ul>
                    </nav>

                    {/* navicon - hamburger */}
                    <div className="navicon" onClick={handleToggle}>
                        <div className={ navShow ? "nav-toggle active" : "nav-toggle" }>
                            <span>
                            </span>
                        </div>
                    </div>

                </div>
            </div>
        </header>
        </>
     );
}
 
export default Navbar;