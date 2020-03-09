import React from 'react'
import { Component } from 'react'
import HHeader from '../nav/HHeader'
import '../styles/Home.css'
import Banner from '../images/Heros/LordSkudleysBanner.jpg'

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
            </div>
        )
    }
}

export default Home