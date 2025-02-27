import React from 'react'
import { Link } from 'react-router'
import {NavDropdown, MenuItem} from 'react-bootstrap'


export default class extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      bgColor: "bg-white",
      ddTitle: "EN",
      txtColor: "color-liimex-blue"
    };
    this.onDdSelect = this.onDdSelect.bind(this);    
  }

   onDdSelect (eventKey){
    var pathStr = this.props.route.path;
    var pathArr = pathStr.split("/");
    var path = "/"+ pathArr[pathArr.length -1];
    if (path == "/en" || path == "/de")
      var path = "";
    
    this.props.router.push('/'+eventKey.toLowerCase()+ path);    
  }
  componentDidMount(){
   if(this.props.setHomeStyle){
      console.log("in home style mode");
      this.setState({
        bgColor: "bg-liimex-blue",
        txtColor: "color-white"
      });
    }
  }

  render() {
 
    return (      
      <div>
        <section className= {(this.state.bgColor) + " container-fluid"} id="title">
          <ul className="row nav">
            <li className={(this.state.txtColor)}><Link to="/en/sign-up">Sign Up</Link></li>
            <li className={(this.state.txtColor)}><Link to="/en/log-in">Log In</Link></li>
            <li className={(this.state.txtColor)}><Link to="/en/insurance-directory">Insurance Directory</Link></li>
            <li className={(this.state.txtColor)}><Link to="/en/about-us">About Us</Link> </li>
            <li className={(this.state.txtColor)}><Link to="/en/our-offer">Our Offer</Link></li>
            <li className="navbar-brand">
              <Link to="/en">
                <img src="../images/Logo_Blue.svg" width="30" height="30" alt="liimex_logo"/>
              </Link>
            </li>
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
