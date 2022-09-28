import React from 'react'
import styled from 'styled-components';
import logo from '../img/logo2.png';
import {NavLink} from 'react-router-dom'

function Navbar() {
  return (
    <>
    <NavigationStyled>
            <div className="logo">
                <img src={logo} alt="" />
            </div>
            <ul className="nav-items">
                <li>
                    <NavLink to={`/`}>Home</NavLink>
                </li>
                <li>
                    <NavLink to={`/about`}>Cryptocurency</NavLink>
                </li>
                <li>
                    <NavLink to={`/faq`}>FAQs</NavLink>
                </li>
                
            </ul>
        </NavigationStyled>
    </>
  )
}
const NavigationStyled = styled.nav`
    min-height: 10vh;
    display: flex;
    justify-content: space-between;
    align-items: center;
    z-index:2;
    position:absolute;
    .nav-items{
        display: flex;
        align-items: center;
        position: absolute;
        left: 56rem;
        li{
            margin: 0 1rem;
        }
        .primary-btn{
            margin-left: 3rem;
            background-color:rgba(57, 95, 246, 0.6);
            padding: .6rem 1.3rem;
            border-radius: 70px;
            cursor: pointer;
            transition: all .4s ease-in-out;
            &:hover{
                background-color:rgba(57, 95, 246, 1);
            }
        }
    }
    .logo{
        img{
            width: 60px;
        }
    }
`;


export default Navbar