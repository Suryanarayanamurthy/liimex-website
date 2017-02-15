import React from 'react'
import { Link } from 'react-router'
import Carousel from './Carousel'
import Container from './Container'


export default class extends React.Component {
  constructor(props) {
    super(props);
    console.log(this);
    console.log(this.props);
  }
  render() {
    return (
    	<section>
        <Container router={this.props.router} route={this.props.route}/>
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
    )
  }
}
