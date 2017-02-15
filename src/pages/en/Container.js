import React from 'react'
import { Link } from 'react-router'
import {NavDropdown, MenuItem} from 'react-bootstrap'


export default class extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      //bgColor: props.initialColor
      bgColor: "bg-liimex-blue",
      ddTitle: "EN"
    };
    this.onDdSelect = this.onDdSelect.bind(this);
  }

   onDdSelect (eventKey){
    var pathStr = this.props.route.path;
    var pathArr = pathStr.split("/");
    var path = pathArr[pathArr.length -1];    
    this.props.router.push('/'+eventKey.toLowerCase()+'/'+path);
  }

  render() {
    return (
      <div>
        <section className= {(this.state.bgColor) + " container-fluid"} id="title">
          <ul className="row nav color-white">
            <li className="color-white"><Link to="/en/sign-up">Sign Up</Link></li>
            <li className="color-white"><Link to="/en/log-in">Log In</Link></li>
            <li className="color-white"><Link to="/en/insurance-directory">Insurance Directory</Link></li>
            <li className="color-white"><Link to="/en/about-us">About Us</Link> </li>
            <li className="color-white"><Link to="/en/our-offer">Our Offer</Link></li>
            <NavDropdown title={this.state.ddTitle}>
              <MenuItem eventKey="EN" onSelect={this.onDdSelect}>
                <button class="dropdown-btn btn1">
                  English 
                  <span class="flag-icon flag-icon-gb"></span>
                </button>
                </MenuItem>
                <MenuItem  eventKey="DE"  onSelect={this.onDdSelect}>
                <button class="dropdown-btn btn1">
                  German 
                  <span class="flag-icon flag-icon-de"></span>
                </button>
              </MenuItem>
            </NavDropdown>
          </ul>          
        </section>        
      </div>
    );
  }
}
