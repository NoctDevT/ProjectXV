

import styled from 'styled-components'
import { NavLink as Link } from 'react-router-dom'
import { FaBars } from 'react-icons/fa'

export const Nav = styled.nav`
    // background: #212121;
    background: #f2f1ef;
    height: 70px;
    width: 100%;
    display: flex; 
    justify-content: space-between;
    // padding: 0.5rem calc((100vw - 1000px) / 2.4);
    z-index: 10;

    // display: flex;
    // justify-content: space-around;
    // min-height: 70px;
    // background: #212121;
`




export const NavLink = styled(Link)`
    color: #F6F6F2;
    // color: #000;

    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 0 1rem;
    height: 100%;
    cursor: pointer;
    font-weight: 400;

    transition: all 0.2s ease-in-out;

    &:hover{
        transition: all 0.2s ease-in-out;
        background: transparent;
        // color: orange;
        opacity: 60%;

    }
`




export const Bars = styled(FaBars)`
    display: none;
    color: #fff;

    @media screen and (max-width: 760px) {
        display: block;
        position: absolute;
        top: 0;
        right: 0;
        transform: translate(-100%, 75%);
        font-size: 1.8rem;
        cursor: pointer;
    } 
`

export const NavMenu = styled.div`
    display: flex;
    align-items: center;
    /* margin-right: -24px; */

    margin-right 24px;


    @media screen and (max-width: 768px) {
        display: none; 
    }

`

export const NavBtn = styled.nav`
    display:  flex;
    align-items: center;
    margin-right: 24px;
    

    @media screen and (max-width: 768px) {
        display: none;
    }
    
`

export const NavBtnLink = styled(Link)`
    // border-radius: 10px; 
    // background: #245ce1;
    // padding: 10px 26px; 
    // color: #fff;
    // border: none;
    // outline: none;
    // cursor: pointer;
    // transition: all 0.2s ease-in-out;
    // text-decoration: none;


    color: #F6F6F2;
    // font-weight: 800;

    border: 2px solid orange;
    border-radius: 8px;
    background-color: transparent;
    padding: 5px 6px;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    text-decoration: none;
    margin-left: 24px;

    &:hover{
        transition: all 0.2s ease-in-out;
        background: transparent;
        // color: #6FB3B8;
        opacity: 60%;
    }
`

export const NavLinkLogo = styled(Link)`





    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 0 1rem;
    height: 100%;
    cursor: pointer;
    font-weight: 400;






    font-size: 30px;
    letter-spacing: 2px;
    background-color: #f2f1ef;
    color: #000;

    &:hover{
        transition: none;
      
    }

    @media screen and (max-width: 768px) {
        padding: 3px;
        background-color: transparent;
        // color: #9aa4ec;
        color: black;

    }


`







// import styled from 'styled-components'
// import { NavLink as Link } from 'react-router-dom'
// import { FaBars } from 'react-icons/fa'


// export const Nav = styled.nav`
//     background: #212121;
//     height: 60px;
//     display: flex; 
//     justify-content: space-between;
//     padding: 0.5rem calc((100vw - 1000px) / 2.2);
//     z-index: 10;
// `




// export const NavLink = styled(Link)`
//     color: #fff;
//     display: flex;
//     align-items: center;
//     text-decoration: none;
//     padding: 0 2rem;
//     height: 100%auto;
//     height: 100%;
//     cursor: pointer;
//     font-weight: 500;

//     &.active{
//       color: #15cdfc;
//     }
// `


// export const Bars = styled(FaBars)`
//     display: none;
//     color: #fff;

//     @media screen and (max-width: 760px) {
//         display: block;
//         position: absolute;
//         top: 0;
//         right: 0;
//         transform: translate(-100%, 75%);
//         font-size: 1.8rem;
//         cursor: pointer;
//     } 
// `

// export const NavMenu = styled.div`
//     display: flex;
//     align-items: center;
//     /* margin-right: -24px; */

//     margin-right 24px;


//     @media screen and (max-width: 768px) {
//         display: none; 
//     }

// `

// export const NavBtn = styled.nav`
//     display:  flex;
//     align-items: center;
//     margin-right: 24px;


//     @media screen and (max-width: 768px) {
//         display: none;
//     }

// `

// export const NavBtnLink = styled(Link)`
//     border-radius: 4px; 
//     background: #245ce1;
//     padding: 10px 26px; 
//     color: #fff;
//     border: none;
//     outline: none;
//     cursor: pointer;
//     transition: all 0.2s ease-in-out;
//     text-decoration: none;

//     margin-left: 24px;

//     &:hover{
//         transition: all 0.2s ease-in-out;
//         background: #fff;
//         color: #101606;
//     }
// `




