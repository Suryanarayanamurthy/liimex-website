import React from 'react'
import { Link } from 'react-router'
import Container from './Container'

export default class extends React.Component {
  render() {
    return (
    	<div>
    	<Container router={this.props.router} route={this.props.route}/>
      <p className="App-intro">
        Signup
        <br/>
        <Link to="/">home</Link>
      </p>
      </div>
    )
  }
}
