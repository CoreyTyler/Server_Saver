import React from 'react'
import { Switch, Route } from 'react-router'
import LandingPage from './components/LandingPage'
import TipLog from './components/TipLog'
import Goals from './components/Goals'
import Compare from './components/Compare'

const Router = () => {
    return(
        <Switch>
            <Route exact path="/" component={LandingPage} />
            <Route path="/TipLog" component={TipLog} />
            <Route path="/Goals" component={Goals} />
            <Route path="/Compare" component={Compare} />
        </Switch>
    )
}

export default Router