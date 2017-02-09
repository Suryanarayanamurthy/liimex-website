var React = require('react');
var Slider = require('nuka-carousel')



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
      autoplay: true,
      wrapAround: true,
      speed: 1500,
      slidesToShow: 1,
      slidesToScroll: 1
    };    
    return (
      <Slider {...settings}>
          <div className="row image-slider">
          <div>
          <div className="row">
          <h1 className="color-white col-md-6">What if commercial insurance was simple and easy?
           </h1>
          </div>
          </div>
          </div>

          
          <div className="row image-slider">
          <div>
          <div className="row">

          <h1 className="color-white col-md-6">Find out what insurances your business needs within minutes, for free.         
          </h1>
          <img className="col-md-6" src="images/Business.svg" alt="limmex business" width="500px" height="300px"/>
          </div>
          </div>
          </div>

          <div className="row image-slider">
          <div>
          <div className="row">
          <h1 className="color-white col-md-6">We give you more of what you
          need and less of everything
          else.
          </h1>
          <img className="col-md-6" src="images/Shield.svg" alt="limmex business" width="500px" height="300px" />
          </div>
          </div>
          </div>
      </Slider>
    );
  }
}