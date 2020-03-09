import React from 'react'
import { Component } from 'react'
import HHeader from '../nav/HHeader'

class Home extends Component {
    constructor(){
        super()
        this.state = {}
    }

    render(){
        return (
            <div>
                <HHeader/>
            </div>
        )
    }
}

export default Home