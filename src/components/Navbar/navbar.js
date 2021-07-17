import React, { useState, useEffect, useRef } from "react";
import { Link } from 'react-router-dom'
import './Navbar.css'
// import logo from '../../images/logo.svg'
import logo from '../../images/logo.svg'

import {
    Nav,
    NavLink,
    Bars,
    NavMenu,
    NavBtn,
    NavBtnLink,
    NavLinkLogo
} from './NavbarElements';

const Navbar = () => {

    const [navSize, setnavSize] = useState("65px");
    const [navColor, setnavColor] = useState("transparent");
    // const [navColor, setnavColor] = useState("#252734");





    const listenScrollEvent = () => {
        // window.scrollY > 10 ? setnavColor("transparent") : setnavColor("#252734");
        window.scrollY > 10 ? setnavColor("#697184") : setnavColor("transparent");

        window.scrollY > 10 ? setnavSize("60px") : setnavSize("65px");
    };
    useEffect(() => {
        window.addEventListener("scroll", listenScrollEvent);
        return () => {
            window.removeEventListener("scroll", listenScrollEvent);



        };

    }, []);

    return (
        <>
            <div style={{
                position: 'fixed', left: '0',
                top: ' 0',
                width: '100%'
            }}
                className="NavBar"
            >
                <Nav
                    style={{
                        backgroundColor: navColor,
                        height: navSize,
                        transition: "all 1s"
                    }}
                >
                    <NavLinkLogo to="/">
                        {/* <img className="Logo" src={logo} alt='logo' /> */}
                        キーボード
                    </NavLinkLogo>
                    <Bars />
                    <NavMenu>
                        <NavLink to="/browse" activeStyle>Browse</NavLink>
                        <NavLink to="/news" activeStyle>News</NavLink>
                        <NavLink to="/about" activeStyle>About</NavLink>
                        <NavLink to="/login" activeStyle>Login</NavLink>
                        <NavLink to="/signup" activeStyle>Sign Up</NavLink>

                        <NavBtnLink to='/advertise'>Advertise</NavBtnLink>

                    </NavMenu>

                    {/* <NavBtn>
                                    <NavBtnLink to='/'>Login</NavBtnLink>

                </NavBtn> */}
                </Nav>
            </div>
        </>
    )
}

export default Navbar;