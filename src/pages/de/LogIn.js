import React from 'react'
import { Link } from 'react-router'
import Container from './Container'

import RaisedButton from 'material-ui/RaisedButton'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme'
import getMuiTheme from 'material-ui/styles/getMuiTheme'

import injectTapEventPlugin from 'react-tap-event-plugin';

// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();


const muiTheme = getMuiTheme({
  userAgent: 'all',
});


export default class extends React.Component {
  render() {
    return (
    <MuiThemeProvider muiTheme={muiTheme}>
    	<div>
    	<Container router={this.props.router} route={this.props.route}/>
       <RaisedButton label="Default" />
      <p className="App-intro">
        This is our Login Component  in German  
        <br/>
        <Link to="/">home</Link>
      </p>
      </div>
      </MuiThemeProvider>
    )
  }
}
