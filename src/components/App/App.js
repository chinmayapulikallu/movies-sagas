import React, { Component } from 'react';
import './App.css';
import {HashRouter as Router, Route, Switch } from 'react-router-dom';
//importing components to App.js
import Header from '../Header/Header'; 
import Home from '../Home/Home';
import DetailsView from '../DetailsView/DetailsView';
import Edit from '../Edit/Edit';
//material-ui
import {createMuiTheme, MuiThemeProvider} from '@material-ui/core/styles';
import {teal, cyan} from '@material-ui/core/colors';

const theme = createMuiTheme({
  palette: {
    primary: teal,
    secondary: cyan
  }
});


class App extends Component {


  // Renders the entire app on the DOM
  render() {
    return (
      <MuiThemeProvider theme = {theme}>
      <div className="App">
       <Header />
       {/* Routes for components, Home component is the Home page */}
       <Router>
          <Route exact path="/" component={Home}/>
          <Switch>
            <Route path="/details/:id" component={DetailsView}/>
            <Route path="/edit" component={Edit} />
          </Switch>
       </Router>
      </div>
      </MuiThemeProvider>
    );
  }
}

export default (App);

