import React from 'react';
import '../styles/Header.css';
import logo from '../images/Nav/LordSkudleyLogo.png';
import divider from '../images/Nav/|.png';
import home from '../images/Nav/Home.png';
import about from '../images/Nav/About.png'
import gamingO from '../images/Nav/GamingOrange.png';
import art from '../images/Nav/Art.png';
import sketchbook from '../images/Nav/Sketchbook.png'

const GHeader = () => {
    return (
        <div className='navBox'>
            <div className='logoBox'>
                <a href="/">
                    <img className='logo' src={logo} alt="Lord Skudley's Sagacity Logo" />
                </a>
            </div>

            <div className='navList'>
                <ul className='navLinks'>
                    <li><a href="/">
                        <img src={home} alt="home icon" />
                    </a></li>

                    <li><img src={divider} alt="divider icon"/></li>
                    
                    <li>
                        <a href="/About">
                            <img src={about} alt="about icon"/>
                    </a></li>

                    <li><img src={divider} alt="divider icon"/></li>

                    <li><a href="/Gaming">
                        <img src={gamingO} alt="gaming icon" />
                    </a></li>

                    <li><img src={divider} alt="divider icon"/></li>

                    <li><a href="/Art">
                        <img src={art} alt="art icon" />
                    </a></li>

                    <li><img src={divider} alt="divider icon"/></li>

                    <li><a href="/Sketchbook">
                        <img src={sketchbook} alt="" />
                    </a></li>
                </ul>
            </div>

        </div>
    )
}

export default GHeader