import React from 'react'
import { Link } from 'react-router'

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
        </section>
        {this.props.children}
      </div>
    );
  }
}
