import React from 'react';
import '../styles/Header.css';
import logo from '../images/Nav/LordSkudleyLogo.png';
import divider from '../images/Nav/|.png';
import home from '../images/Nav/Home.png';
import about from '../images/Nav/About.png'
import gaming from '../images/Nav/Gaming.png';
import art from '../images/Nav/ArtOrange.png';
import sketchbook from '../images/Nav/Sketchbook.png'

const ArtHeader = () => {
    return (
        <div className='navBox'>
            <div className='logoBox'>
                <img className='logo' src={logo} alt="" />
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
                        <img src={gaming} alt="gaming icon" />
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

export default ArtHeader