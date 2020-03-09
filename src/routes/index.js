import React from 'react';
import Home from '../components/Home';
import Gaming from '../components/Gaming'
import Art from '../components/Art'
import About from '../components/About'
import Sketchbook from '../components/Sketchbook'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

const Routes = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path='/' component={Home} />
                <Route exact path='/Gaming' component={Gaming} />
                <Route exact path='/Art' component={Art} />
                <Route exact path="/About" component={About} />
                <Route exact path="/Sketchbook" component={Sketchbook} />
            </Switch>
        </BrowserRouter>
    );
}

export default Routes;