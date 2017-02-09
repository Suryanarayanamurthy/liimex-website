import React from 'react'
import { Link } from 'react-router'
//import './Container.css'
import Carousel from './Carousel'

export default class extends React.Component {
  render() {
    return (
      <div>
        <section className="bg-liimex-blue container-fluid" id="title">
          <ul className="row nav color-white">
            <li className="color-white"><Link to="/sign-up">Sign Up</Link></li>
            <li className="color-white"><Link to="/log-in">Log In</Link></li>
            <li className="color-white"><Link to="/insurance-directory">Insurance Directory</Link></li>
            <li className="color-white"><Link to="/about-us">About Us</Link> </li>
            <li className="color-white"><Link to="/our-offer">Our Offer</Link></li>         
          </ul>
          <Link to="/">
          <img src="images/Logo_White.svg" alt="liimex" width="300px"/>
          </Link>
          
          <Carousel/>
          <div className="row">
          <div className="col-md-3">
          <Link to="/our-offer" className="color-white">learn more</Link>
          </div>
          <div className="col-md-3">
          <Link to="/sign-up" className="color-white">sign up</Link>
          </div>
          </div>
        </section>
        {this.props.children}
      </div>
    );
  }
}
