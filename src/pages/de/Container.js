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
            <li className="color-white"><Link to="/de/sign-up">Sign Up</Link></li>
            <li className="color-white"><Link to="/de/log-in">Log In</Link></li>
            <li className="color-white"><Link to="/de/insurance-directory">Insurance Directory</Link></li>
            <li className="color-white"><Link to="/de/about-us">About Us</Link> </li>
            <li className="color-white"><Link to="/de/our-offer">Our Offer</Link></li>
            <NavDropdown title={this.state.ddTitle} id="lang_id">
              <MenuItem eventKey="EN"  onSelect={this.onDdSelect}>
                <button className="dropdown-btn btn1">
                  English 
                  <span className="flag-icon flag-icon-gb"></span>
                </button>
                </MenuItem>
                <MenuItem  eventKey="DE"  onSelect={this.onDdSelect}>
                <button className="dropdown-btn btn1">
                  German 
                  <span className="flag-icon flag-icon-de"></span>
                </button>
              </MenuItem>
            </NavDropdown>
          </ul>          
        </section>        
      </div>
    );
  }
}
