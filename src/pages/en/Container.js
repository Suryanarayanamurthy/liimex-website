import React from 'react'
import { Link } from 'react-router'
import {NavDropdown, MenuItem} from 'react-bootstrap'


export default class extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      //bgColor: props.initialColor
      bgColor: "bg-liimex-blue",
      ddTitle: "DE"
    };
  }

   onDdSelect = (eventKey)=>{
    this.setState({
      ddTitle:eventKey
    });
  }
  render() {
    console.log(this.props);
    if(this.props.location.pathname !="/")
      {
        
        this.setState({
          bgColor:""
        });
        
      }
    return (
      <div>
        <section className= {(this.state.bgColor) + " container-fluid"} id="title">
          <ul className="row nav color-white">
            <li className="color-white"><Link to="/sign-up">Sign Up</Link></li>
            <li className="color-white"><Link to="/log-in">Log In</Link></li>
            <li className="color-white"><Link to="/insurance-directory">Insurance Directory</Link></li>
            <li className="color-white"><Link to="/about-us">About Us</Link> </li>
            <li className="color-white"><Link to="/our-offer">Our Offer</Link></li>
            <NavDropdown title={this.state.ddTitle}>
              <MenuItem onSelect={this.onDdSelect} eventKey="EN">
                <button class="dropdown-btn btn1">
                  English 
                  <span class="flag-icon flag-icon-gb"></span>
                </button>
                </MenuItem>
                <MenuItem onSelect={this.onDdSelect} eventKey="DE">
                <button class="dropdown-btn btn1">
                  German 
                  <span class="flag-icon flag-icon-de"></span>
                </button>
              </MenuItem>
            </NavDropdown>
          </ul>          
        </section>
        {this.props.children}
      </div>
    );
  }
}
