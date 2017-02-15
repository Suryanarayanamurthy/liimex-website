import React from 'react'
import Container from './Container'

export default class extends React.Component {
  constructor(props) {
    super(props);
    console.log(this.props);
  }
  
  render() {
    return (
    	<div>
    	<Container router={this.props.router} route={this.props.route}/>
      <p className="App-intro">
        This is our "Our Offer" Component   in German        
      </p>
      </div>
    )
  }
}
