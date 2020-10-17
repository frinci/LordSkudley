import React from 'react'
import { Component } from 'react'
import HHeader from '../nav/HHeader'
import '../styles/Home.css'

import Banner from '../images/Heros/LordSkudleysBanner.jpg'
import Fortress from '../images/featured/Fortress.JPG'
import seeMore from '../images/buttonsAndHeaders/SeeMore.png'
import sketchTitle from '../images/buttonsAndHeaders/sketchbookHeader.png'
import EebyrtaghHero from '../images/Heros/Eebyrtagh.jpg'
import eebyrtaghFeatured from '../images/featured/shipAbove.JPG' 
import eebyrtaghHeader from '../images/buttonsAndHeaders/EebyrtaghHeader.png'
import lovecraft from '../images/Heros/Lovecraft.jpg'
import raft from '../images/featured/Raft1.jpg'
import artHeader from '../images/buttonsAndHeaders/artEtcHeader.png'

class Home extends Component {
    constructor(){
        super()
        this.state = {}
    }

    render(){
        return (
            <div>
                <HHeader/>
                <div className='manHero'>
                    <img src={Banner} className='hero' alt="illustration of lord skudley swashbuckling on a shore"/>
                </div>

                <div className="gridBox">
                    <div className='itemBox'>
                        <img className="gridImage" src={Fortress} alt="illustration of fortress on"/>

                        <div className='textbox'>
                            <img src={sketchTitle} className='textBoxTitle' alt="The Sketchbook Project"/>

                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>

                            <div className='buttonBox'>
                                <a href="Sketchbook" className='seeMoreButton'><img src={seeMore} alt="See More button"/></a>
                            </div>
                        </div>

                    </div>

                </div>

                <div className='EebyrtaghHero'>
                    <img src={EebyrtaghHero} className="bodyHero" alt=""/>
                </div>

                <div className='gridBox'>
                    <div className='itemBox'>
                        <img src={eebyrtaghFeatured}className="gridImage" alt="illustration of Eebyrtagh ship from above"/>

                        <div className='textbox'>
                            <img src={eebyrtaghHeader} className="textBoxTitle" alt="The Eebyrtagh and Minis"/>

                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>

                            <div className='buttonBox'>
                                <a href="Gaming" className='seeMoreButton'><img src={seeMore} alt="seeMore button"/></a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='artHero'>
                    <img src={lovecraft} className='bodyHero' alt="illustration of HP Lovecraft in a library"/>
                </div>

                <div className='gridBox'>
                    <img src={raft} className='gridImage' alt="illustration of people on a raft floating in a river"/>

                    <div className='textbox'>
                        <img src={artHeader} className="textBoxTitle" alt="Art, Cartoons, and Sketches"/>

                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>

                        <div className='buttonBox'>
                            <a href="Art" className='seeMoreButton'><img src={seeMore} alt="seeMore button"/></a>
                        </div>

                    </div>
                </div>

            </div>
        )
    }
}

export default Home