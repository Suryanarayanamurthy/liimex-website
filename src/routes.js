import React from 'react'
import { Router, Route, browserHistory, IndexRedirect, IndexRoute } from 'react-router'

import Container_de from './pages/de/Container'
import App_de from './pages/de/App'
import OurOffer_de from './pages/de/OurOffer'
import AboutUs_de from './pages/de/AboutUs'
import InsuranceDirectory_de from './pages/de/InsuranceDirectory'
import LogIn_de from './pages/de/LogIn'
import SignUp_de from './pages/de/SignUp'

import Container_en from './pages/en/Container'
import App_en from './pages/en/App'
import OurOffer_en from './pages/en/OurOffer'
import AboutUs_en from './pages/en/AboutUs'
import InsuranceDirectory_en from './pages/en/InsuranceDirectory'
import LogIn_en from './pages/en/LogIn'
import SignUp_en from './pages/en/SignUp'

const Routes = props => {
  return (
    <Router history={browserHistory}>
      <Route path="/de" component={App_de}/>
      <Route path="/de/our-offer" component={OurOffer_de} currentPath="our-offer" />
      <Route path="/de/about-us" component={AboutUs_de} />
      <Route path="/de/insurance-directory" component={InsuranceDirectory_de} />
      <Route path="/de/log-in" component={LogIn_de} />
      <Route path="/de/sign-up" component={SignUp_de} />
      <Route path="/en" component={App_en}/>
      <Route path="/en/our-offer" component={OurOffer_en} />
      <Route path="/en/about-us" component={AboutUs_en} />
      <Route path="/en/insurance-directory" component={InsuranceDirectory_en} />
      <Route path="/en/log-in" component={LogIn_en} />
      <Route path="/en/sign-up" component={SignUp_en} />
      
      <Route path="*">
        <IndexRedirect to="/de" />
      </Route>
    </Router>
  )
}

export default Routes
