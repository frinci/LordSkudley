import React from 'react'
import { Component } from 'react'
import AHeader from '../nav/AHeader'
import '../styles/About.css'
import {base} from '../services/apiConfig'

import headshot from '../images/featured/Headshot.JPG'
import skudleyHeader from '../images/buttonsAndHeaders/LordSkudleyTitle.png'
import extraordinaire from '../images/buttonsAndHeaders/Extraordinaire.png'
import heathens from '../images/buttonsAndHeaders/Heathens.png'

class About extends Component {
    constructor(){
        super()
        this.state = {
            Cats: [],
        }
    }

    componentDidMount() {
        this.herdCats()
    }

    herdCats = () => {
        const catData = base('Lord Skudley Data').select({
            view: "Grid view"
        }).eachPage(function page(records, fetchNextPage) {

            records.forEach(function(record) {
                console.log('Retrieved', record.get('Name'));
            });
            fetchNextPage();
        
        }, function done(err) {
            if (err) { console.error(err); return; }
        });

        this.setState({
            Cats: catData
        })

    }

    render () {
        const {Cats} = this.state
        const catData = Cats && [...Cats].filter(cat => cat.category === "Cats")
        
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

                {/* <div className='catCard'>
                    {catData.map(cat =>
                        <div>
                            <img src={cat.url} alt=""/>
                        </div>
                    )}
                </div> */}
            </div>
        </div>
        )
    }
}

export default About