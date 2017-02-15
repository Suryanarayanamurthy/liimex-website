import React from 'react'
import Container from './Container'

export default class extends React.Component {
  render() {
    return (
    	<div>
    	<Container router={this.props.router} route={this.props.route}/>
      <p className="App-intro">
        This is our "Insurance Directory" Component  in German         
      </p>
      </div>
    )
  }
}
