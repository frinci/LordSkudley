import React, { Component } from 'react'
import GHeader from '../nav/GHeader'
import '../styles/Gaming.css'
import {base} from '../services/apiConfig'

import miniHero from '../images/Heros/minisHeader.jpg'
import gamingTitle from '../images/buttonsAndHeaders/Gaming&Minis.png'
import eebyrtaghMain from '../images/featured/ship1.png'
import shipDrawing from '../images/featured/ship2.png'
import aboveModel from '../images/featured/ship3.png' 
import eebyrtaghTitle from '../images/buttonsAndHeaders/Eebyrtagh.png'
import seeMore from '../images/buttonsAndHeaders/SeeMore.png'
import somdiTitle from '../images/buttonsAndHeaders/BaronSomdi.png'
import crab from '../images/buttonsAndHeaders/Crab.png'
import minis from '../images/buttonsAndHeaders/Minis.png'
import somdiMain from '../images/featured/baron1.png'
import somdiUndone from '../images/featured/baron2.png'
import somdiClose from '../images/featured/baron3.png'
import crab1 from '../images/featured/crab1.png'
import crab2 from '../images/featured/crab2.png'
import crab3 from '../images/featured/crab3.png'

class Gaming extends Component {
    constructor () {
        super()
        this.state = {
            minis: []
        }
    }

    componentDidMount() {
        this.getMinis()
    }

    getMinis() {
        let miniList = []

        base('Lord Skudley Data').select({
            view: "Grid view"
        }).eachPage(function page(records, fetchNextPage) {
        
            records.forEach(function(record) {
                console.log('Retrieved', record.get('Name'));
                miniList.push({
                    image: record.get()
                })
            });
        
            fetchNextPage();
        
        }, function done(err) {
            if (err) { console.error(err); return; }
        });

        this.setState({
            minis: miniList
        })

    }

    render() {
        return (
            <div>
                <GHeader/>

                <div className= "heroBox">
                    <img src={miniHero} className='miniHero 'alt="Gaming miniatures gathered around a glowing orb"/>
                    <img src={gamingTitle} className='gameTitle' alt="Gaming and Minis"/>
                </div>

                <div className='purpleBox'>
                    <div>
                        <img src={eebyrtaghMain} className="infoImage" alt="Eebyrtagh ship model sailing"/>
                    </div>

                    <div className='infoBox'>
                        <img src={eebyrtaghTitle} className='titleImage' alt="The Eebyrtagh"/>

                        <p>This ship, the Eebyrtagh, took me six months to build, from concept drawings to finished product. She's made of poster board and foam core, with strips of paper to form the planks. the flag I drew in PowerPoint then just printed and mounted. The figurehead is a dire lion and a verok.
                        </p>
                        <p>I made it for our 7thSea role playing game. The Eebyrtagh has five decks, the hold, gun-deck with the surgery, main deck which has officer's/passenger's quarters, galley and kitchen (under the forecastle), top deck and captain's/admiral's cabin and forecastle deck and finally quarter deck. </p>

                        <p>She stands 28 inches at the main mast, 10 inches to the quarter deck, 8 inches to the top deck, 5 inches to the main deck, and 33 inches from stem to stern.</p>

                        <div className='buttonBox'>
                            <a href="Eebyrtagh" className='seeMoreButton'><img src={seeMore} alt="See More button"/></a>
                        </div>
                    </div>

                    <div>
                        <img src={aboveModel} className="infoImage" alt="The Eebyrtagh ship model main deck from above"/>
                    </div>

                    <div>
                        <img src={shipDrawing} className="infoImage" alt="Drawing of the Eebyrtagh ship"/>
                    </div>
                </div>

                <div className="somdiBox"> 
                    <div>
                        <img src={somdiMain} className="infoImage" alt="Baron somdi miniature"/>
                    </div>

                    <div className='infoBox'>
                        <img src={somdiTitle} className='titleImage' alt="Baron Somdi"/>

                        <p>Baron Samdei, is one of the loa of the dead in Haitian Vodou. Not necessarily an evil god, but often depicted as such. I’ve always liked him as a character, both as a bad guy and an antihero.</p>
                        <p>I based his look here on “The Black Buccaneer” of the PS game of the same name. </p>
                        <p>This is the second mini I made of the Baron, the first was a modified “Hulk” HeroClis that was broken by one of my Heathens (I blame PeeBuddy because she’s the one who jumps on tables and shelves). This one is made from a Warhammer Ogryn. I used a carved wooden dowl for his hat, paper towel for his coat and Green Stuff for the other details.</p>

                        <div className='buttonBox'>
                            <a href="Baron" className='seeMoreButton'><img src={seeMore} alt="See More button"/></a>
                        </div>
                    </div>

                    <div>
                        <img src={somdiUndone} className="infoImage" alt="Baron Somdi miniature being built with clay and plastic"/>
                    </div>

                    <div>
                        <img src={somdiClose} className="infoImage" alt="Close up of Baron Somdi miniature"/>
                    </div>
                </div>

                <div className='purpleBox'>
                    <div>
                    <img src={crab1} className="infoImage"  alt="The crab minature from above"/>
                    </div>

                    <div className='infoBox'>
                        <img src={crab} className='titleImage' alt="The Crab"/>

                        <p>I built my crab using the D&D Mini “Hooked Horror,” bits from several minis abd hot-glue. Honestly, I have no idea why I made this. It just seemed like a fun thing to build. I’m quite pleased with this one, so pleased that I created an adventure just so I could us it!</p>

                        <div className='buttonBox'>
                            <a href="Crab" className='seeMoreButton'><img src={seeMore} alt="See More button"/></a>
                        </div>
                    </div>

                    <div>
                        <img src={crab2} className="infoImage" alt="The crab minature from the front"/>
                    </div>

                    <div>
                        <img src={crab3} className="infoImage" alt="the crab minature being built out of plastic and sculpted hot glue "/>
                    </div>
                </div>

                <div className='miniBox'>
                    <img src={minis} className='titleImage' alt="Minis"/>
                </div>
            </div>
        )
    }
}

export default Gaming