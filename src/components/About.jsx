import React from 'react'
import AHeader from '../nav/AHeader'
import '../styles/About.css'

import headshot from '../images/featured/Headshot.JPG'
import skudleyHeader from '../images/buttonsAndHeaders/LordSkudleyTitle.png'
import extraordinaire from '../images/buttonsAndHeaders/Extraordinaire.png'
import heathens from '../images/buttonsAndHeaders/Heathens.png'
import { Component } from 'react'

class About extends Component {
    constructor(){
        super()
        this.state = {}
    }

    render () {
        return (
            <div>
            <AHeader/>

            <div className="skudleyBox">
                <img src={headshot} className='skudley' alt="Lord Skudley, himself, with his signature handlebar mustache, wearing top hat and steampunk goggles"/>

                <div className='aboutBox'>
                    <img src={skudleyHeader} className='skudleyHeader' alt="Lord Skudley, Edward French"/>

                    <div>
                        <img src={extraordinaire} className='artistTitle' alt="Artist, Writer, Prop Master, and Gamer Extraordinaire"/>
                        <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        </p>

                        <p>
                        At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident.
                        </p>
                    </div>
                </div>
            </div>

            <div className='colorBox'></div>

            <div className='catBox'>
                <img src={heathens} className='catTitle' alt="The Heathens"/>
            </div>
        </div>
        )
    }
}

export default About