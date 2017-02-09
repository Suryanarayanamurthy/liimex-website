var React = require('react');
var Slider = require('nuka-carousel')
import { Link } from 'react-router'


export default class extends React.Component{
  render () {
    /*
    var settings = {
      className: "",
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    */
    var settings = {
      autoplay: false,
      wrapAround: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };    
    return (
      <Slider {...settings}>
          <div className="row image-slider">
          <div>
          <img src="images/Logo_White.svg" alt="liimex" width="300px"></img>
          <h1 className="color-white">What if commercial insurance <br/>
          was simple and easy?
                </h1>
          <div className="row">
          <div className="col-md-3">
          <Link to="/our-offer" className="color-white">learn more</Link>
          </div>
          <div className="col-md-3">
          <Link to="/sign-up" className="color-white">sign up</Link>
          </div>
          </div>
          </div>
          </div>

          
          <div className="row image-slider">
          <div>
          <img src="Logo_White.svg" alt="liimex" width="300px"></img>
          <div className="row">

          <h1 className="color-white col-md-6">Find out what insurances your
          business needs within minutes,
          for free.         
          </h1>
          <img className="col-md-6" src="Business.svg" alt="limmex business" width="500px" height="300px"/>
          </div>
          <div className="row">
          <div className="col-md-3">
          <Link to="/our-offer" className="color-white">learn more</Link>
          </div>
          <div className="col-md-3">
          <Link to="/sign-up" className="color-white">sign up</Link>
          </div>
          </div>
          </div>
          </div>

          <div className="row image-slider">
          <div>
          <img src="images/Logo_White.svg" alt="liimex" width="300px"></img>
          <h1 className="color-white">We give you more of what you
          need and less of everything
          else.
                </h1>
          <div className="row">
          <div className="col-md-3">
          <Link to="/our-offer" className="color-white">learn more</Link>
          </div>
          <div className="col-md-3">
          <Link to="/sign-up" className="color-white">sign up</Link>
          </div>
          </div>
          </div>
          </div>
      </Slider>
    );
  }
}