import React from 'react'
import { Router, Route, browserHistory, IndexRedirect, IndexRoute } from 'react-router'

import Container from './Container'
import App from './App'
import OurOffer from './OurOffer'
import AboutUs from './AboutUs'
import InsuranceDirectory from './InsuranceDirectory'
import LogIn from './LogIn'
import SignUp from './SignUp'


const Routes = props => {
  return (
    <Router history={browserHistory}>
      <Route path="/" component={Container}>
        <IndexRoute component={App} />
        <Route path="/our-offer" component={OurOffer} />
        <Route path="/about-us" component={AboutUs} />
        <Route path="/insurance-directory" component={InsuranceDirectory} />
        <Route path="/log-in" component={LogIn} />
        <Route path="/sign-up" component={SignUp} />
      </Route>
      <Route path="*">
        <IndexRedirect to="/" />
      </Route>
    </Router>
  )
}

export default Routes
