import React from 'react';
import '../styles/Header.css';
import logo from '../images/Nav/LordSkudleyLogo.png';
import divider from '../images/Nav/|.png';
import orangeHome from '../images/Nav/HomeOrange.png';
import about from '../images/Nav/About.png'
import gaming from '../images/Nav/Gaming.png';
import art from '../images/Nav/Art.png';
import sketchbook from '../images/Nav/Sketchbook.png'
import {NavLink} from 'react-router-dom'

const HHeader = () => {
    return (
        <div className='navBox'>
            <div className='logoBox'>
                <img className='logo' src={logo} alt="" />
            </div>

            <div className='navList'>
                <ul className='navLinks'>
                    <li>
                        <NavLink to ="/">
                            <img src={orangeHome} alt="home icon" />
                        </NavLink></li>

                    <li><img src={divider} alt="divider icon"/></li>

                    <li>
                        <NavLink to="/About">
                            <img src={about} alt="about icon"/>
                    </NavLink></li>

                    <li><img src={divider} alt="divider icon"/></li>

                    <li><NavLink to="/Gaming">
                        <img src={gaming} alt="gaming icon" />
                    </NavLink></li>

                    <li><img src={divider} alt="divider icon"/></li>

                    <li><NavLink to="/Art">
                        <img src={art} alt="art icon" />
                    </NavLink></li>

                    <li><img src={divider} alt="divider icon"/></li>

                    <li><NavLink to ="/Sketchbook">
                        <img src={sketchbook} alt="" />
                    </NavLink></li>
                </ul>
            </div>

        </div>
    )
}

export default HHeader