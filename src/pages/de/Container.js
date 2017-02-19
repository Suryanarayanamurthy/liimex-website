import React from 'react'
import { Link } from 'react-router'
import {Navbar, Nav, NavItem, NavDropdown, MenuItem, Grid, Row, Col, Thumbnail} from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'


export default class extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      bgColor: "bg-white",
      ddTitle: "DE",
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
 
<section className= {(this.state.bgColor)} id="title">
   <Navbar inverse collapseOnSelect>   
       <Navbar.Header >
         <Navbar.Brand>
           <Link to="/de">
              <img src="../images/Logo_Blue.svg" alt="liimex_logo" />              
           </Link>
         </Navbar.Brand>
         <Navbar.Toggle />
       </Navbar.Header>     
      <Navbar.Collapse>
         <Nav pullRight>
           <LinkContainer to= "/de/our-offer"> 
            <NavItem>Our Offer</NavItem>
           </LinkContainer>
           <LinkContainer to= "/de/about-us">
            <NavItem>About Us</NavItem>
           </LinkContainer>
           <LinkContainer to="/de/insurance-directory">
            <NavItem>Insurance Directory</NavItem>
           </LinkContainer>
           <LinkContainer to= "/de/log-in">
            <NavItem >Log In</NavItem>
           </LinkContainer>
           <LinkContainer to="/de/sign-up">
            <NavItem>Sign Up</NavItem>
           </LinkContainer>
           <NavDropdown title={this.state.ddTitle} id="lang_select">
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
         </Nav>
      </Navbar.Collapse>       
     </Navbar>    
</section> 
    );
  }
}
