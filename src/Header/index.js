import React from 'react';
import Navbar from './Navbar';
import { Link } from 'react-scroll'; // react-scroll is a library for scrolling in React
import SmallScreensNavbar from './SmallScreensNavbar';
import { useWindowWidthAndHeight } from './CustomHooks';
import './style.css';

const Header = () =>{
    // use our custom hook to get the the window size
    const [width] = useWindowWidthAndHeight();
    return(
        <header className='header'>
            <div className="header-inner">
                <Link to="Home" 
                    smooth={true} 
                    className="logo nav-link">
                    Bauch
                </Link>
                {/*if the width of the window is bigger than 1000px use <Navebar/>,
                   else user <SmallScreensNavbar/>*/}
                { width > 1000 ?
                <Navbar navClass="nav-big"
                        linkClassName="nav-big-link"/>
                :
                <SmallScreensNavbar navClass="nav-small"
                                    linkClassName = "nav-small-link"
                />
                } 
            </div>
        </header>
    )
}

export default Header;